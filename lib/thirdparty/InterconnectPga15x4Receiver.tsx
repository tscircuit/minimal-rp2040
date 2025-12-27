import type { ChipProps } from "@tscircuit/props"
import LGA15x4_net15 from "./PGA15x4_net15_bottomonly.json"

const COLS = 15
const ROWS = 4
const PITCH = 2.54 // 0.1 inch in mm

// Calculate grid dimensions
const gridWidth = (COLS - 1) * PITCH
const gridHeight = (ROWS - 1) * PITCH

// Build pin labels for all 60 pins
// Maps pin1-pin60 to P_R*_C* labels (row-major order)
const buildPinLabels = () => {
  const labels: Record<string, string> = {}
  let pinNum = 1
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    for (let colIndex = 0; colIndex < COLS; colIndex++) {
      labels[`pin${pinNum}`] = `P_R${rowIndex}_C${colIndex}`
      pinNum++
    }
  }
  return labels
}

const PIN_LABELS = buildPinLabels()
const PIN_LABEL_TO_NUMBER = Object.fromEntries(
  Object.entries(PIN_LABELS).map(([key, value]) => [value, key]),
)

// Build internally connected pins from the pin locations
// Pins with the same net number are internally connected
const buildInternallyConnectedPins = () => {
  const netGroups: Map<number, string[]> = new Map()

  // Group physical pins by their net number
  LGA15x4_net15.pinLocations.forEach((row, rowIndex) => {
    row.forEach((netNum, colIndex) => {
      const pinLabel = PIN_LABEL_TO_NUMBER[`P_R${rowIndex}_C${colIndex}`]
      if (!netGroups.has(netNum)) {
        netGroups.set(netNum, [])
      }
      netGroups.get(netNum)!.push(pinLabel)
    })
  })

  // Return array of arrays, where each inner array contains pins that are internally connected
  return Array.from(netGroups.values())
}

const internallyConnectedPins = buildInternallyConnectedPins()

// Build the footprint with all 60 plated holes
const PGA15x4ReceiverFootprint = () => {
  let pinNum = 1
  const holes: React.ReactNode[] = []

  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    for (let colIndex = 0; colIndex < COLS; colIndex++) {
      const pinName = `pin${pinNum}`
      const isPin1 = pinNum === 1

      holes.push(
        <platedhole
          name={pinName}
          portHints={[pinName]}
          shape={isPin1 ? "circular_hole_with_rect_pad" : "circle"}
          holeDiameter={1.0}
          {...(isPin1
            ? { rectPadHeight: 2, rectPadWidth: 2 }
            : { outerDiameter: 2 })}
          pcbX={colIndex * PITCH - gridWidth / 2}
          pcbY={gridHeight / 2 - rowIndex * PITCH}
        />,
      )
      pinNum++
    }
  }

  return (
    <footprint>
      {holes}{" "}
      <silkscreenrect pcbX={0} pcbY={0} width={gridWidth} height={2.4} />
    </footprint>
  )
}

export const InterconnectPga15x4Receiver = (
  props: ChipProps<typeof PIN_LABELS> & {
    children?: any
  },
) => {
  const { children, ...rest } = props

  return (
    <interconnect
      {...rest}
      footprint={<PGA15x4ReceiverFootprint />}
      pinLabels={PIN_LABELS}
      internallyConnectedPins={internallyConnectedPins}
      doNotPlace
    >
      {children}
    </interconnect>
  )
}

export default InterconnectPga15x4Receiver
