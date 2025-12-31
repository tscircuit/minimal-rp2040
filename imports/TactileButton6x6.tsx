// 6x6mm Tactile Push Button Switch (Through-Hole)
// Standard 4-pin momentary tactile switch

import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1", "A1"],
  pin2: ["pin2", "A2"],
  pin3: ["pin3", "B1"],
  pin4: ["pin4", "B2"],
} as const

export type TactileButton6x6Props = ChipProps<typeof pinLabels>

/**
 * 6x6mm Tactile Push Button Switch
 *
 * Standard 4-pin through-hole momentary switch
 * Body dimensions: 6mm x 6mm x ~4.3mm height (varies)
 *
 * Internal connections:
 * - Pin 1 and Pin 2 are connected (side A)
 * - Pin 3 and Pin 4 are connected (side B)
 * - When pressed, A connects to B
 *
 * Pin layout (top view, button facing up, CCW from pin 1):
 *       +-----+
 *       |     |
 *  1 o--|[=]  |--o 4
 *       |     |
 *  2 o--|     |--o 3
 *       +-----+
 *
 * Typical usage: Connect one side (1 or 2) to GPIO with pull-up/down
 *               Connect other side (3 or 4) to GND or VCC
 */
export const TactileButton6x6 = (props: TactileButton6x6Props) => {
  // Standard 6x6mm tactile switch pin spacing
  // Plastic body: 6x6mm
  // Pin spacing: 4.5mm between opposite sides, 2mm between pins on same side
  const pinSpacingX = 4.5 / 2 // half spacing between opposite sides (left-right)
  const pinSpacingY = 2 / 2 // half spacing between pins on same side (top-bottom)

  // Button body dimensions
  const bodyWidth = 6
  const bodyHeight = 6

  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="TS-6x6"
      footprint={
        <footprint>
          {/* Pin 1 - Left Top */}
          <platedhole
            portHints={["1"]}
            pcbX={-pinSpacingX}
            pcbY={pinSpacingY}
            holeDiameter="0.8mm"
            outerDiameter="1.4mm"
            shape="circle"
          />

          {/* Pin 2 - Left Bottom */}
          <platedhole
            portHints={["2"]}
            pcbX={-pinSpacingX}
            pcbY={-pinSpacingY}
            holeDiameter="0.8mm"
            outerDiameter="1.4mm"
            shape="circle"
          />

          {/* Pin 3 - Right Bottom */}
          <platedhole
            portHints={["3"]}
            pcbX={pinSpacingX}
            pcbY={-pinSpacingY}
            holeDiameter="0.8mm"
            outerDiameter="1.4mm"
            shape="circle"
          />

          {/* Pin 4 - Right Top */}
          <platedhole
            portHints={["4"]}
            pcbX={pinSpacingX}
            pcbY={pinSpacingY}
            holeDiameter="0.8mm"
            outerDiameter="1.4mm"
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
              { x: -1.5, y: 0 },
              { x: -1.06, y: 1.06 },
              { x: 0, y: 1.5 },
              { x: 1.06, y: 1.06 },
              { x: 1.5, y: 0 },
              { x: 1.06, y: -1.06 },
              { x: 0, y: -1.5 },
              { x: -1.06, y: -1.06 },
              { x: -1.5, y: 0 },
            ]}
          />

          {/* Pin 1 indicator - small dot near left-top pin */}
          <silkscreencircle
            pcbX={-bodyWidth / 2 + 1}
            pcbY={pinSpacingY}
            radius={0.3}
          />
        </footprint>
      }
      {...props}
    />
  )
}
