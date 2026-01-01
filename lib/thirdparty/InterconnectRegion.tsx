// InterconnectRegion.tsx
// Fills a rectangular region with interconnect elements in a grid pattern

interface InterconnectRegionProps {
  namePrefix: string
  minX: number
  maxX: number
  minY: number
  maxY: number
  spacingX?: number // Horizontal grid spacing in mm, defaults to 3
  spacingY?: number // Vertical grid spacing in mm, defaults to 3
  standard?: string // Interconnect standard, defaults to "0805"
  pcbRotation?: number // Rotation in degrees, defaults to 0
}

export const InterconnectRegion = ({
  namePrefix,
  minX,
  maxX,
  minY,
  maxY,
  spacingX = 3,
  spacingY = 3,
  standard = "0805",
  pcbRotation = 0,
}: InterconnectRegionProps) => {
  const interconnects: React.ReactNode[] = []

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
  const offsetX = x1 + (width - actualWidth) / 2
  const offsetY = y1 + (height - actualHeight) / 2

  let index = 0
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = offsetX + col * spacingX
      const y = offsetY + row * spacingY

      interconnects.push(
        <interconnect
          key={`${namePrefix}${index}`}
          name={`${namePrefix}${index}`}
          standard={standard as "0805"}
          pcbX={x}
          pcbY={y}
          pcbRotation={pcbRotation}
        />,
      )
      index++
    }
  }

  return (
    <>
      {interconnects}
      <pcbnoterect
        pcbX={(x1 + x2) / 2}
        pcbY={(y1 + y2) / 2}
        width={width}
        height={height}
      />
    </>
  )
}

export default InterconnectRegion
