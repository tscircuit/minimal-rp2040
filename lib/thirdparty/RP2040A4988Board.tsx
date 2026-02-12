// RP2040A4988Board.tsx
// Board with 0.96" I2C OLED display, HiLetGo A4988A stepper motor driver module,
// 3 control buttons, and 5mm-pitch wire block header for motor/power connections.

import { HiLetGoA4988 } from "../../imports/HiLetGoA4988"
import { TactileButton6x6 } from "../../imports/TactileButton6x6"
import { WireBlockHeader6 } from "../../imports/WireBlockHeader6"
import { I2CDisplayHeader4 } from "./I2CDisplayHeader4"
import { Rp2040Zero } from "./RP2040Zero"

export const RP2040A4988Board = () => (
  <board width="95mm" height="65mm" borderRadius="2mm" autorouterVersion="v1">
    {/* === OLED Display Header (top of board) === */}
    <I2CDisplayHeader4
      name="J1"
      pcbX="0mm"
      pcbY="22mm"
      pcbRotation="180deg"
      connections={{
        GND: "net.GND",
        VCC: "net.VCC",
        SDA: "net.SDA",
        SCL: "net.SCL",
      }}
    />

    {/* === HiLetGo A4988A Stepper Motor Driver Module === */}
    <HiLetGoA4988
      name="U2"
      pcbX="-30mm"
      pcbY="6mm"
      connections={{
        // Power
        GND1: "net.GND",
        VDD: "net.VCC",
        GND2: "net.GND",
        VMOTOR: "net.VMOTOR",
        // Motor coil outputs
        "1A": "net.COIL_1A",
        "1B": "net.COIL_1B",
        "2A": "net.COIL_2A",
        "2B": "net.COIL_2B",
        // Control inputs (from RP2040)
        STEP: "net.STEP",
        DIRECTION: "net.DIRECTION",
        N_ENABLE: "net.N_ENABLE",
        N_SLEEP: "net.N_SLEEP",
        // N_RESET tied to N_SLEEP (standard configuration:
        // both go high together so the driver wakes and un-resets at once)
        N_RESET: "net.N_SLEEP",
        // Microstepping select (from RP2040)
        MS1: "net.MS1",
        MS2: "net.MS2",
        MS3: "net.MS3",
      }}
    />

    {/* R1: 10k pullup for N_SLEEP / N_RESET (default awake) */}
    <resistor
      name="R1"
      resistance="10k"
      pcbX="-4mm"
      pcbY="8mm"
      footprint="0402"
      connections={{
        pin1: "net.VCC",
        pin2: "net.N_SLEEP",
      }}
    />

    {/* C1: 10uF motor supply decoupling (VMOTOR to GND) */}
    <capacitor
      name="C1"
      capacitance="10uF"
      pcbX="-4mm"
      pcbY="4mm"
      footprint="0805"
      connections={{
        pin1: "net.VMOTOR",
        pin2: "net.GND",
      }}
    />

    {/* === Control Buttons === */}

    {/* Button A: e.g. Step CW */}
    <TactileButton6x6
      name="SW1"
      pcbX="-38mm"
      pcbY="-18mm"
      connections={{
        pin1: "net.BTN_A",
        pin3: "net.GND",
      }}
    />

    {/* Button B: e.g. Step CCW */}
    <TactileButton6x6
      name="SW2"
      pcbX="-25mm"
      pcbY="-18mm"
      connections={{
        pin1: "net.BTN_B",
        pin3: "net.GND",
      }}
    />

    {/* Button C: e.g. Enable/Disable */}
    <TactileButton6x6
      name="SW3"
      pcbX="36mm"
      pcbY="-18mm"
      connections={{
        pin1: "net.BTN_C",
        pin3: "net.GND",
      }}
    />

    {/* === RP2040-Zero Module (bottom area) === */}
    <Rp2040Zero
      name="U1"
      pcbX="0mm"
      pcbY="-20mm"
      pcbRotation={180}
      connections={{
        GND: "net.GND",
        V3_3: "net.VCC",
        // I2C for OLED display
        GP0: "net.SDA",
        GP1: "net.SCL",
        // A4988 step/direction
        GP2: "net.STEP",
        GP3: "net.DIRECTION",
        // A4988 control
        GP4: "net.N_ENABLE",
        GP5: "net.N_SLEEP",
        // A4988 microstepping select
        GP6: "net.MS1",
        GP7: "net.MS2",
        GP8: "net.MS3",
        // Buttons (active-low with internal pull-ups)
        GP26: "net.BTN_A",
        GP27: "net.BTN_B",
        GP28: "net.BTN_C",
      }}
    />

    {/* === Wire Block Header (right edge, for motor + power) ===
         5mm pitch, 6 pins: A-, A+, B-, B+, VM+, GND */}
    <WireBlockHeader6
      name="J2"
      pcbX="40mm"
      pcbY="4mm"
      pcbRotation="90deg"
      connections={{
        A_NEG: "net.COIL_1B",
        A_POS: "net.COIL_1A",
        B_NEG: "net.COIL_2B",
        B_POS: "net.COIL_2A",
        VM: "net.VMOTOR",
        GND: "net.GND",
      }}
    />
  </board>
)
