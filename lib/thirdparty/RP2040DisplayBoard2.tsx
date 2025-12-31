// RP2040DisplayBoard2.tsx
// Board with TFT 2.4" SPI Touchscreen (ILI9341), D-pad (4x 6x6mm), menu button, and 2x 12x12mm buttons
// Both display and buttons are bottom-mounted

import { Rp2040Zero } from "./RP2040Zero"
import { TFT_ILI9341_2_4in_SPI } from "../../imports/TFT_ILI9341_2_4in_SPI"
import { TactileButton12x12 } from "../../imports/TactileButton12x12"
import { TactileButton6x6 } from "../../imports/TactileButton6x6"
import { TMB12A03 } from "../../imports/TMB12A03"
import { AO3400A } from "../../imports/AO3400A"

export const RP2040DisplayBoard2 = () => (
  <board
    width="90mm"
    height="90mm"
    borderRadius="2mm"
    autorouter="laser_prefab"
    // routingDisabled
    layers={1}
  >
    {/* RP2040-Zero module - top mounted at bottom of board */}
    <Rp2040Zero
      name="U1"
      pcbX="0mm"
      pcbY="-30mm"
      pcbRotation={180}
      connections={{
        GND: "net.GND",
        V3_3: "net.VCC",
        // Display SPI connections
        GP2: "net.LCD_SCK",
        GP3: "net.LCD_MOSI",
        GP4: "net.LCD_MISO",
        GP5: "net.LCD_CS",
        GP6: "net.LCD_DC",
        GP7: "net.LCD_RESET",
        GP8: "net.LCD_LED",
        // Touch SPI connections (shared clock/data lines)
        // GP9: "net.TOUCH_CS",
        GP10: "net.LCD_SCK", // Share clock with display
        GP11: "net.LCD_MOSI", // Share MOSI with display
        // GP12: "net.TOUCH_DO",
        // GP13: "net.TOUCH_IRQ",
        // D-pad button connections (left side)
        GP26: "net.BTN_UP",
        GP27: "net.BTN_DOWN",
        GP28: "net.BTN_LEFT",
        GP29: "net.BTN_RIGHT",
        // Right side button connections
        GP14: "net.BTN5",
        GP15: "net.BTN6",
        // Menu button
        GP9: "net.BTN_MENU",
        // Buzzer
        GP12: "net.BUZZER",
      }}
    />

    {/* TFT 2.4" SPI Display - bottom mounted, at top of board */}
    <TFT_ILI9341_2_4in_SPI
      name="LCD1"
      pcbX="0mm"
      pcbY="18mm"
      pcbRotation={0}
      layer="bottom"
      connections={{
        VCC: "net.VCC",
        GND: "net.GND",
        CS: "net.LCD_CS",
        RESET: "net.LCD_RESET",
        DC: "net.LCD_DC",
        SDI: "net.LCD_MOSI",
        SCK: "net.LCD_SCK",
        LED: "net.VCC", // Backlight always on (can connect to GPIO for PWM control)
        SDO: "net.LCD_MISO",
        T_CLK: "net.LCD_SCK",
        T_CS: "net.TOUCH_CS",
        T_DIN: "net.LCD_MOSI",
        T_DO: "net.TOUCH_DO",
        T_IRQ: "net.TOUCH_IRQ",
      }}
    />

    <group pcbY="8mm">
      {/* Buzzer - left of menu button */}
      <TMB12A03
        name="BZ1"
        pcbX="-10mm"
        pcbY="-18mm"
        layer="bottom"
        connections={{
          _POS: "net.VCC",
          pin2: "net.BUZZER_SW",
        }}
      />
      {/* MOSFET to drive buzzer */}
      <AO3400A
        name="Q1"
        pcbX="0mm"
        pcbY="-18mm"
        layer="top"
        pcbRotation="90deg"
        connections={{
          gate: "net.BUZZER",
          source: "net.GND",
          drain: "net.BUZZER_SW",
        }}
      />

      {/* Menu button - center, below display */}
      <TactileButton6x6
        name="SW_MENU"
        pcbX="8mm"
        pcbY="-18mm"
        layer="bottom"
        connections={{
          pin1: "net.BTN_MENU",
          pin2: "net.BTN_MENU",
          pin3: "net.GND",
          pin4: "net.GND",
        }}
      />

      {/* D-pad (left side) - 4x 6x6mm through-hole buttons */}
      {/* Up */}
      <TactileButton6x6
        name="SW1"
        pcbX="-28mm"
        pcbY="-22mm"
        layer="bottom"
        connections={{
          pin1: "net.BTN_UP",
          pin2: "net.BTN_UP",
          pin3: "net.GND",
          pin4: "net.GND",
        }}
      />
      {/* Down */}
      <TactileButton6x6
        name="SW2"
        pcbX="-28mm"
        pcbY="-38mm"
        layer="bottom"
        connections={{
          pin1: "net.BTN_DOWN",
          pin2: "net.BTN_DOWN",
          pin3: "net.GND",
          pin4: "net.GND",
        }}
      />
      {/* Left */}
      <TactileButton6x6
        name="SW3"
        pcbX="-36mm"
        pcbY="-30mm"
        layer="bottom"
        connections={{
          pin1: "net.BTN_LEFT",
          pin2: "net.BTN_LEFT",
          pin3: "net.GND",
          pin4: "net.GND",
        }}
      />
      {/* Right */}
      <TactileButton6x6
        name="SW4"
        pcbX="-20mm"
        pcbY="-30mm"
        layer="bottom"
        connections={{
          pin1: "net.BTN_RIGHT",
          pin2: "net.BTN_RIGHT",
          pin3: "net.GND",
          pin4: "net.GND",
        }}
      />

      {/* Right side - 12x12mm buttons */}
      <TactileButton12x12
        name="SW5"
        pcbX="32mm"
        pcbY="-20mm"
        layer="bottom"
        connections={{
          pin1: "net.BTN5",
          pin2: "net.BTN5",
          pin3: "net.GND",
          pin4: "net.GND",
        }}
      />
      <TactileButton12x12
        name="SW6"
        pcbX="22mm"
        pcbY="-34mm"
        layer="bottom"
        connections={{
          pin1: "net.BTN6",
          pin2: "net.BTN6",
          pin3: "net.GND",
          pin4: "net.GND",
        }}
      />
    </group>
  </board>
)
