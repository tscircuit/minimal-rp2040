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
 * Module dimensions: approximately 71mm x 52mm
 * Header: 14-pin 2.54mm pitch through-hole
 * Mounting holes: 4x M2.5 in corners
 *
 * Pin layout (left to right when viewing from front):
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
  // 14 pins on 2.54mm pitch, centered around origin
  const P = 2.54
  const pinCount = 14
  const xs = Array.from(
    { length: pinCount },
    (_, i) => (i - (pinCount - 1) / 2) * P
  )

  // Module dimensions (approximate for MSP2402)
  const moduleWidth = 71 // mm
  const moduleHeight = 52 // mm

  // Mounting hole positions (M2.5 holes in corners)
  // Offset from edges approximately 3mm
  const holeOffsetX = moduleWidth / 2 - 3
  const holeOffsetY = moduleHeight / 2 - 3

  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="MSP2402"
      footprint={
        <footprint>
          {/* 14-pin header */}
          {xs.map((x, i) => (
            <platedhole
              key={i}
              portHints={[String(i + 1)]}
              pcbX={x}
              pcbY={moduleHeight / 2 - 2} // Header at top edge
              holeDiameter="1.0mm"
              outerDiameter="1.8mm"
              shape="circle"
            />
          ))}

          {/* Mounting holes (M2.5) */}
          {includeMountingHoles && (
            <>
              <hole pcbX={-holeOffsetX} pcbY={holeOffsetY} diameter="2.7mm" />
              <hole pcbX={holeOffsetX} pcbY={holeOffsetY} diameter="2.7mm" />
              <hole pcbX={-holeOffsetX} pcbY={-holeOffsetY} diameter="2.7mm" />
              <hole pcbX={holeOffsetX} pcbY={-holeOffsetY} diameter="2.7mm" />
            </>
          )}

          {/* Silkscreen outline */}
          <silkscreenpath
            route={[
              { x: -moduleWidth / 2, y: moduleHeight / 2 },
              { x: moduleWidth / 2, y: moduleHeight / 2 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: moduleWidth / 2, y: moduleHeight / 2 },
              { x: moduleWidth / 2, y: -moduleHeight / 2 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: moduleWidth / 2, y: -moduleHeight / 2 },
              { x: -moduleWidth / 2, y: -moduleHeight / 2 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -moduleWidth / 2, y: -moduleHeight / 2 },
              { x: -moduleWidth / 2, y: moduleHeight / 2 },
            ]}
          />

          {/* Pin 1 indicator */}
          <silkscreenpath
            route={[
              { x: xs[0] - 1.5, y: moduleHeight / 2 - 5 },
              { x: xs[0], y: moduleHeight / 2 - 6.5 },
              { x: xs[0] + 1.5, y: moduleHeight / 2 - 5 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  )
}
