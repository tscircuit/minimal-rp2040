// 12x12mm Tactile Push Button Switch (Through-Hole)
// Standard 4-pin momentary tactile switch

import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1", "A1"],
  pin2: ["pin2", "A2"],
  pin3: ["pin3", "B1"],
  pin4: ["pin4", "B2"],
} as const

export type TactileButton12x12Props = ChipProps<typeof pinLabels>

/**
 * 12x12mm Tactile Push Button Switch
 *
 * Standard 4-pin through-hole momentary switch
 * Body dimensions: 12mm x 12mm x ~4.3mm height (varies)
 * Button height: typically 7-8mm total
 *
 * Internal connections:
 * - Pin 1 and Pin 2 are connected (side A)
 * - Pin 3 and Pin 4 are connected (side B)
 * - When pressed, A connects to B
 *
 * Pin layout (top view, button facing up, CCW from pin 1):
 *       +-------+
 *       |       |
 *  1 o--|  [=]  |--o 4
 *       |       |
 *  2 o--|       |--o 3
 *       +-------+
 *
 * Typical usage: Connect one side (1 or 2) to GPIO with pull-up/down
 *               Connect other side (3 or 4) to GND or VCC
 */
export const TactileButton12x12 = (props: TactileButton12x12Props) => {
  // Standard 12x12mm tactile switch pin spacing (measured)
  // Plastic body: 12x12mm
  // Short side pin-to-pin: 5mm
  // Long side pin-to-pin: 12.25mm
  // Rotated 90deg: pins on left/right sides, long dimension horizontal
  const pinSpacingX = 12.25 / 2 // half spacing between opposite sides (left-right)
  const pinSpacingY = 5 / 2 // half spacing between pins on same side (top-bottom)

  // Button body dimensions
  const bodyWidth = 12
  const bodyHeight = 12

  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="TS-12x12"
      footprint={
        <footprint>
          {/* Pin 1 - Left Top */}
          <platedhole
            portHints={["1"]}
            pcbX={-pinSpacingX}
            pcbY={pinSpacingY}
            holeDiameter="1.0mm"
            outerDiameter="1.8mm"
            shape="circle"
          />

          {/* Pin 2 - Left Bottom */}
          <platedhole
            portHints={["2"]}
            pcbX={-pinSpacingX}
            pcbY={-pinSpacingY}
            holeDiameter="1.0mm"
            outerDiameter="1.8mm"
            shape="circle"
          />

          {/* Pin 3 - Right Bottom */}
          <platedhole
            portHints={["3"]}
            pcbX={pinSpacingX}
            pcbY={-pinSpacingY}
            holeDiameter="1.0mm"
            outerDiameter="1.8mm"
            shape="circle"
          />

          {/* Pin 4 - Right Top */}
          <platedhole
            portHints={["4"]}
            pcbX={pinSpacingX}
            pcbY={pinSpacingY}
            holeDiameter="1.0mm"
            outerDiameter="1.8mm"
            shape="circle"
          />

          {/* Silkscreen outline */}
          <silkscreenpath
            route={[
              { x: -bodyWidth / 2, y: bodyHeight / 2 },
              { x: bodyWidth / 2, y: bodyHeight / 2 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: bodyWidth / 2, y: bodyHeight / 2 },
              { x: bodyWidth / 2, y: -bodyHeight / 2 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: bodyWidth / 2, y: -bodyHeight / 2 },
              { x: -bodyWidth / 2, y: -bodyHeight / 2 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -bodyWidth / 2, y: -bodyHeight / 2 },
              { x: -bodyWidth / 2, y: bodyHeight / 2 },
            ]}
          />

          {/* Button circle indicator (center) */}
          <silkscreenpath
            route={[
              { x: -3, y: 0 },
              { x: -2.1, y: 2.1 },
              { x: 0, y: 3 },
              { x: 2.1, y: 2.1 },
              { x: 3, y: 0 },
              { x: 2.1, y: -2.1 },
              { x: 0, y: -3 },
              { x: -2.1, y: -2.1 },
              { x: -3, y: 0 },
            ]}
          />

          {/* Pin 1 indicator - small dot near left-top pin */}
          <silkscreencircle
            pcbX={-bodyWidth / 2 + 1.5}
            pcbY={pinSpacingY}
            radius={0.5}
          />
        </footprint>
      }
      {...props}
    />
  )
}
