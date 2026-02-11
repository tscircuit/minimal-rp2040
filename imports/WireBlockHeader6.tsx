// WireBlockHeader6.tsx
// 6-pin through-hole header with 5mm pitch for screw terminal / wire block
// Pins: A-, A+, B-, B+, VM+, GND

import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A_NEG"],
  pin2: ["A_POS"],
  pin3: ["B_NEG"],
  pin4: ["B_POS"],
  pin5: ["VM"],
  pin6: ["GND"],
} as const

export type WireBlockHeader6Props = ChipProps<typeof pinLabels>

/**
 * 6-pin through-hole header with 5mm pitch for screw terminal wire blocks.
 *
 * Pin layout (top view, left to right):
 *   [1: A-] [2: A+] [3: B-] [4: B+] [5: VM+] [6: GND]
 *
 * Hole diameter: 1.2mm (fits standard wire block pins)
 * Pad outer diameter: 2.2mm
 * Pitch: 5.0mm
 */
export const WireBlockHeader6 = (props: WireBlockHeader6Props) => {
  const PITCH = 5.0
  const PIN_COUNT = 6
  // Center the pins around origin
  const xs = Array.from(
    { length: PIN_COUNT },
    (_, i) => (i - (PIN_COUNT - 1) / 2) * PITCH,
  )

  const totalWidth = (PIN_COUNT - 1) * PITCH + 4 // 4mm margin
  const bodyHeight = 8 // typical wire block depth

  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="WIRE_BLOCK_6P_5MM"
      footprint={
        <footprint>
          {xs.map((x, i) => (
            <platedhole
              key={i}
              portHints={[String(i + 1)]}
              pcbX={x}
              pcbY={0}
              holeDiameter="1.2mm"
              outerDiameter="2.2mm"
              shape="circle"
            />
          ))}

          {/* Silkscreen outline */}
          <silkscreenpath
            route={[
              { x: -totalWidth / 2, y: bodyHeight / 2 },
              { x: totalWidth / 2, y: bodyHeight / 2 },
              { x: totalWidth / 2, y: -bodyHeight / 2 },
              { x: -totalWidth / 2, y: -bodyHeight / 2 },
              { x: -totalWidth / 2, y: bodyHeight / 2 },
            ]}
          />

          {/* Pin 1 indicator */}
          <silkscreencircle pcbX={xs[0]} pcbY={bodyHeight / 2 + 1} radius={0.4} />

          {/* Pin labels */}
          <silkscreentext text="A-" pcbX={xs[0]} pcbY={-bodyHeight / 2 - 1.5} fontSize={0.8} />
          <silkscreentext text="A+" pcbX={xs[1]} pcbY={-bodyHeight / 2 - 1.5} fontSize={0.8} />
          <silkscreentext text="B-" pcbX={xs[2]} pcbY={-bodyHeight / 2 - 1.5} fontSize={0.8} />
          <silkscreentext text="B+" pcbX={xs[3]} pcbY={-bodyHeight / 2 - 1.5} fontSize={0.8} />
          <silkscreentext text="V+" pcbX={xs[4]} pcbY={-bodyHeight / 2 - 1.5} fontSize={0.8} />
          <silkscreentext text="GND" pcbX={xs[5]} pcbY={-bodyHeight / 2 - 1.5} fontSize={0.8} />
        </footprint>
      }
      {...props}
    />
  )
}
