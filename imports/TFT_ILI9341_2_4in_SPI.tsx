// TFT 2.4" SPI Touchscreen Module with ILI9341 Driver 240x320
// hosyond.com SKU MSP2402
// 14-pin header configuration for SPI display with touch

import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["CS"],
  pin4: ["RESET"],
  pin5: ["DC"],
  pin6: ["SDI", "MOSI"],
  pin7: ["SCK"],
  pin8: ["LED"],
  pin9: ["SDO", "MISO"],
  pin10: ["T_CLK"],
  pin11: ["T_CS"],
  pin12: ["T_DIN"],
  pin13: ["T_DO"],
  pin14: ["T_IRQ"],
} as const

export type TFT_ILI9341_2_4in_SPIProps = ChipProps<typeof pinLabels> & {
  includeMountingHoles?: boolean
}

/**
 * TFT 2.4" SPI Touchscreen Module with ILI9341 Driver (240x320)
 * hosyond.com SKU MSP2402
 *
 * Mounting holes: 4x 3mm diameter in corners
 *   - Long side (X): 67.4mm center-to-center
 *   - Short side (Y): 36.8mm center-to-center
 * Header: 14-pin 2.54mm pitch through-hole, vertical along short side
 *   - Offset 5mm outside the mounting holes (on right edge)
 *
 * Pin layout (top to bottom when viewing from front, pins on right):
 * [1] VCC    - Power supply (3.3V-5V)
 * [2] GND    - Ground
 * [3] CS     - LCD Chip Select
 * [4] RESET  - LCD Reset
 * [5] DC     - Data/Command select
 * [6] SDI    - SPI MOSI (data to display)
 * [7] SCK    - SPI Clock
 * [8] LED    - Backlight control (active high)
 * [9] SDO    - SPI MISO (data from display, optional)
 * [10] T_CLK - Touch SPI Clock
 * [11] T_CS  - Touch Chip Select
 * [12] T_DIN - Touch SPI MOSI
 * [13] T_DO  - Touch SPI MISO
 * [14] T_IRQ - Touch Interrupt (active low)
 */
export const TFT_ILI9341_2_4in_SPI = ({
  includeMountingHoles = true,
  ...props
}: TFT_ILI9341_2_4in_SPIProps) => {
  // 14 pins on 2.54mm pitch, arranged vertically along the short side
  const P = 2.54
  const pinCount = 14
  const ys = Array.from(
    { length: pinCount },
    (_, i) => ((pinCount - 1) / 2 - i) * P // pin 1 at top, pin 14 at bottom
  )

  // Mounting hole positions (measured center-to-center)
  const holeSpacingX = 67.4 // long side
  const holeSpacingY = 36.8 // short side
  const holeDiameter = 3 // mm

  // Pins are offset 5mm outside the mounting holes (on right side)
  const pinOffsetFromHole = 5
  const pinX = holeSpacingX / 2 + pinOffsetFromHole

  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="MSP2402"
      footprint={
        <footprint>
          {/* 14-pin header - vertical along the short side, on right edge */}
          {ys.map((y, i) => (
            <platedhole
              key={i}
              portHints={[String(i + 1)]}
              pcbX={pinX}
              pcbY={y}
              holeDiameter="1.0mm"
              outerDiameter="1.8mm"
              shape="circle"
            />
          ))}

          {/* Mounting holes (3mm diameter) */}
          {includeMountingHoles && (
            <>
              <hole pcbX={-holeSpacingX / 2} pcbY={holeSpacingY / 2} diameter={`${holeDiameter}mm`} />
              <hole pcbX={holeSpacingX / 2} pcbY={holeSpacingY / 2} diameter={`${holeDiameter}mm`} />
              <hole pcbX={-holeSpacingX / 2} pcbY={-holeSpacingY / 2} diameter={`${holeDiameter}mm`} />
              <hole pcbX={holeSpacingX / 2} pcbY={-holeSpacingY / 2} diameter={`${holeDiameter}mm`} />
            </>
          )}

          {/* Silkscreen outline - based on mounting hole positions with margin */}
          <silkscreenpath
            route={[
              { x: -holeSpacingX / 2 - 3, y: holeSpacingY / 2 + 3 },
              { x: pinX + 3, y: holeSpacingY / 2 + 3 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: pinX + 3, y: holeSpacingY / 2 + 3 },
              { x: pinX + 3, y: -holeSpacingY / 2 - 3 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: pinX + 3, y: -holeSpacingY / 2 - 3 },
              { x: -holeSpacingX / 2 - 3, y: -holeSpacingY / 2 - 3 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -holeSpacingX / 2 - 3, y: -holeSpacingY / 2 - 3 },
              { x: -holeSpacingX / 2 - 3, y: holeSpacingY / 2 + 3 },
            ]}
          />

          {/* Pin 1 indicator - dot next to pin 1 (top pin) */}
          <silkscreencircle
            pcbX={pinX - 3}
            pcbY={ys[0]}
            radius={0.5}
          />
        </footprint>
      }
      {...props}
    />
  )
}
