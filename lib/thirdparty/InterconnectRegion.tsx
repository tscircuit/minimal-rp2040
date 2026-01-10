// InterconnectRegion.tsx
// Fills a rectangular region with interconnect elements in a grid pattern
// Uses 0805 resistor footprint with internally connected pads based on rotation

// 0805 resistor dimensions (in mm)
const PAD_WIDTH = 1.0 // Width of each SMT pad
const PAD_HEIGHT = 1.2 // Height of each SMT pad
const PAD_SPACING = 1.6 // Center-to-center spacing between pads

interface InterconnectRegionProps {
  name: string
  minX: number
  maxX: number
  minY: number
  maxY: number
  spacingX?: number // Horizontal grid spacing in mm, defaults to 3
  spacingY?: number // Vertical grid spacing in mm, defaults to 3
  pcbRotation?: number // Rotation in degrees, defaults to 0
}

export const InterconnectRegion = ({
  name,
  minX,
  maxX,
  minY,
  maxY,
  spacingX = 3,
  spacingY = 3,
  pcbRotation = 0,
}: InterconnectRegionProps) => {
  // Handle cases where min > max by normalizing bounds
  const x1 = Math.min(minX, maxX)
  const x2 = Math.max(minX, maxX)
  const y1 = Math.min(minY, maxY)
  const y2 = Math.max(minY, maxY)

  const width = x2 - x1
  const height = y2 - y1

  const cols = Math.floor(width / spacingX) + 1
  const rows = Math.floor(height / spacingY) + 1

  // Center the grid within the bounds
  const actualWidth = (cols - 1) * spacingX
  const actualHeight = (rows - 1) * spacingY

  // Generate smtpads for all resistors and trace bridges
  const smtpads: React.ReactNode[] = []
  const traces: React.ReactNode[] = []
  const padOffset = PAD_SPACING / 2

  // Track pads for internal connections
  // For rotation=0: group by row (all pads at same grid row are connected)
  // For rotation=90: group by column (all pads at same grid column are connected)
  const padGroups: Map<number, string[]> = new Map()

  const isHorizontal = pcbRotation === 0
  // Trace dimensions
  const TRACE_HEIGHT = 0.5 // Height of trace bridges
  const externalGap = isHorizontal
    ? spacingX - PAD_SPACING - PAD_WIDTH // Gap between adjacent resistors horizontally
    : spacingY - PAD_SPACING - PAD_WIDTH // Gap between adjacent resistors vertically

  let padIndex = 0
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Positions relative to interconnect center (0, 0)
      const centerX = -actualWidth / 2 + col * spacingX
      const centerY = -actualHeight / 2 + row * spacingY

      const pad1Name = `${name}R${row}C${col}_1`
      const pad2Name = `${name}R${row}C${col}_2`

      let pad1X: number, pad1Y: number, pad2X: number, pad2Y: number
      let padW: number, padH: number

      if (isHorizontal) {
        // Horizontal: pads to left and right
        pad1X = centerX - padOffset
        pad1Y = centerY
        pad2X = centerX + padOffset
        pad2Y = centerY
        padW = PAD_WIDTH
        padH = PAD_HEIGHT
      } else {
        // Vertical (90 degrees): pads above and below
        pad1X = centerX
        pad1Y = centerY - padOffset
        pad2X = centerX
        pad2Y = centerY + padOffset
        padW = PAD_HEIGHT
        padH = PAD_WIDTH
      }

      const pinNum1 = padIndex * 2 + 1
      const pinNum2 = padIndex * 2 + 2

      smtpads.push(
        <smtpad
          name={pad1Name}
          pinNumber={pinNum1}
          portHints={[pad1Name, `pin${pinNum1}`]}
          pcbX={pad1X}
          pcbY={pad1Y}
          width={padW}
          height={padH}
          shape="rect"
        />,
        <smtpad
          name={pad2Name}
          pinNumber={pinNum2}
          portHints={[pad2Name, `pin${pinNum2}`]}
          pcbX={pad2X}
          pcbY={pad2Y}
          width={padW}
          height={padH}
          shape="rect"
        />,
      )

      // Add external trace bridge to next resistor in connected direction
      if (isHorizontal && col < cols - 1) {
        // Connect to next column on same row
        const nextCenterX = -actualWidth / 2 + (col + 1) * spacingX
        const bridgeCenterX = (centerX + padOffset + PAD_WIDTH / 2 + nextCenterX - padOffset - PAD_WIDTH / 2) / 2
        traces.push(
          <smtpad
            pcbX={bridgeCenterX}
            pcbY={centerY}
            width={externalGap}
            height={TRACE_HEIGHT}
            shape="rect"
          />,
        )
      } else if (!isHorizontal && row < rows - 1) {
        // Connect to next row on same column
        const nextCenterY = -actualHeight / 2 + (row + 1) * spacingY
        const bridgeCenterY = (centerY + padOffset + PAD_WIDTH / 2 + nextCenterY - padOffset - PAD_WIDTH / 2) / 2
        traces.push(
          <smtpad
            pcbX={centerX}
            pcbY={bridgeCenterY}
            width={TRACE_HEIGHT}
            height={externalGap}
            shape="rect"
          />,
        )
      }

      // Group pads for internal connections
      const groupKey = isHorizontal ? row : col

      if (!padGroups.has(groupKey)) {
        padGroups.set(groupKey, [])
      }
      padGroups.get(groupKey)!.push(pad1Name, pad2Name)

      padIndex++
    }
  }

  // Build internallyConnectedPins array
  const internallyConnectedPins = Array.from(padGroups.values())

  // Build pin labels
  const pinLabels: Record<string, string> = {}
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const idx = row * cols + col
      const pinNum1 = idx * 2 + 1
      const pinNum2 = idx * 2 + 2
      const pad1Name = `${name}R${row}C${col}_1`
      const pad2Name = `${name}R${row}C${col}_2`
      pinLabels[`pin${pinNum1}`] = pad1Name
      pinLabels[`pin${pinNum2}`] = pad2Name
    }
  }

  return (
    <interconnect
      name={name}
      pcbX={(x1 + x2) / 2}
      pcbY={(y1 + y2) / 2}
      footprint={
        <footprint>
          {smtpads}
          {traces}
          <silkscreentext text={name} pcbX={0} pcbY={0} fontSize={1} />
          <pcbnoterect pcbX={0} pcbY={0} width={width} height={height} />
        </footprint>
      }
      pinLabels={pinLabels}
      internallyConnectedPins={internallyConnectedPins}
      doNotPlace
    />
  )
}

export default InterconnectRegion
