// HiLetGoA4988.tsx
// HiLetGo A4988A Stepper Motor Driver Module
// PCB breakout module with dual 8-pin 0.1" (2.54mm) through-hole headers
//
// Left side (top to bottom):  GND, VDD, 1B, 1A, 2A, 2B, GND, VMOTOR
// Right side (top to bottom): DIRECTION, STEP, N_SLEEP, N_RESET, MS3, MS2, MS1, N_ENABLE

type HiLetGoA4988Connections = Partial<{
  GND1: string
  VDD: string
  "1B": string
  "1A": string
  "2A": string
  "2B": string
  GND2: string
  VMOTOR: string
  DIRECTION: string
  STEP: string
  N_SLEEP: string
  N_RESET: string
  MS3: string
  MS2: string
  MS1: string
  N_ENABLE: string
}>

export type HiLetGoA4988Props = {
  name: string
  pcbX?: number | string
  pcbY?: number | string
  pcbRotation?: number | string
  connections?: HiLetGoA4988Connections
}

/**
 * HiLetGo A4988A Stepper Motor Driver Module
 *
 * 16-pin DIP-style PCB module (~15mm x 21mm)
 * Two rows of 8 pins at 0.6" (15.24mm) row spacing, 0.1" (2.54mm) pitch
 *
 * Pin layout (top view):
 *
 *   Left                Right
 *   ┌────────────────────┐
 *   │ GND1    DIRECTION  │
 *   │ VDD     STEP       │
 *   │ 1B      N_SLEEP    │
 *   │ 1A      N_RESET    │
 *   │ 2A      MS3        │
 *   │ 2B      MS2        │
 *   │ GND2    MS1        │
 *   │ VMOTOR  N_ENABLE   │
 *   └────────────────────┘
 */
export const HiLetGoA4988 = ({
  name,
  pcbX,
  pcbY,
  pcbRotation,
  connections,
}: HiLetGoA4988Props) => {
  const P = 2.54 // 0.1" pitch
  const ROW_X = 7.62 // half of 15.24mm (0.6") row-to-row
  const PINS_PER_SIDE = 8
  const halfSpan = ((PINS_PER_SIDE - 1) * P) / 2 // 8.89mm

  const leftLabels = [
    "GND1",
    "VDD",
    "1B",
    "1A",
    "2A",
    "2B",
    "GND2",
    "VMOTOR",
  ] as const
  const rightLabels = [
    "DIRECTION",
    "STEP",
    "N_SLEEP",
    "N_RESET",
    "MS3",
    "MS2",
    "MS1",
    "N_ENABLE",
  ] as const

  const pinLabels: Record<string, string> = {}
  for (let i = 0; i < leftLabels.length; i++) {
    pinLabels[`pin${1 + i}`] = leftLabels[i]
  }
  for (let i = 0; i < rightLabels.length; i++) {
    pinLabels[`pin${9 + i}`] = rightLabels[i]
  }

  // Module board outline (approximate)
  const boardWidth = 20
  const boardHeight = 22

  return (
    <chip
      name={name}
      pcbX={pcbX}
      pcbY={pcbY}
      pcbRotation={pcbRotation}
      pinLabels={pinLabels}
      connections={connections}
      manufacturerPartNumber="HiLetGo-A4988A"
      footprint={
        <footprint>
          {/* Left side pins (1-8), top to bottom */}
          {leftLabels.map((_, i) => (
            <platedhole
              portHints={[String(1 + i)]}
              pcbX={-ROW_X}
              pcbY={halfSpan - i * P}
              holeDiameter="1.0mm"
              outerDiameter="1.8mm"
              shape="circle"
            />
          ))}

          {/* Right side pins (9-16), top to bottom */}
          {rightLabels.map((_, i) => (
            <platedhole
              portHints={[String(9 + i)]}
              pcbX={ROW_X}
              pcbY={halfSpan - i * P}
              holeDiameter="1.0mm"
              outerDiameter="1.8mm"
              shape="circle"
            />
          ))}

          {/* Silkscreen outline */}
          <silkscreenpath
            route={[
              { x: -boardWidth / 2, y: boardHeight / 2 },
              { x: boardWidth / 2, y: boardHeight / 2 },
              { x: boardWidth / 2, y: -boardHeight / 2 },
              { x: -boardWidth / 2, y: -boardHeight / 2 },
              { x: -boardWidth / 2, y: boardHeight / 2 },
            ]}
          />

          {/* Pin 1 indicator */}
          <silkscreencircle
            pcbX={-ROW_X + 2.5}
            pcbY={halfSpan}
            radius={0.4}
          />
        </footprint>
      }
    />
  )
}
