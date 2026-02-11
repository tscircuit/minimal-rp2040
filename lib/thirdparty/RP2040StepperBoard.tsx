// RP2040StepperBoard.tsx
// Board with 0.96" I2C OLED display, DRV8833RTYR stepper motor driver,
// 3 control buttons, and 5mm-pitch wire block header for motor/power connections.

import { Rp2040Zero } from "./RP2040Zero"
import { I2CDisplayHeader4 } from "./I2CDisplayHeader4"
import { DRV8833RTYR } from "../../imports/DRV8833RTYR"
import { TactileButton6x6 } from "../../imports/TactileButton6x6"
import { WireBlockHeader6 } from "../../imports/WireBlockHeader6"

export const RP2040StepperBoard = () => (
  <board
    width="90mm"
    height="80mm"
    borderRadius="2mm"
    // autorouter="auto_jumper"
    autorouterVersion="v1"
    // layers={1}
  >
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

    {/* === DRV8833RTYR Motor Driver === */}
    <DRV8833RTYR
      name="U2"
      pcbX="-16mm"
      pcbY="4mm"
      connections={{
        // Motor control inputs (from RP2040)
        AIN1: "net.AIN1",
        AIN2: "net.AIN2",
        BIN1: "net.BIN1",
        BIN2: "net.BIN2",
        // Motor outputs (to wire block header)
        AOUT1: "net.AOUT1",
        AOUT2: "net.AOUT2",
        BOUT1: "net.BOUT1",
        BOUT2: "net.BOUT2",
        // Power
        VM: "net.VM",
        GND1: "net.GND",
        GND2: "net.GND",
        // Charge pump
        VCP: "net.VCP",
        // Internal supply bypass
        VINT: "net.VINT",
        // Control/status
        nSLEEP: "net.nSLEEP",
        nFAULT: "net.nFAULT",
        // Current sense - tied to GND (no current limiting)
        AISEN: "net.GND",
        BISEN: "net.GND",
      }}
    />

    {/* --- DRV8833 External Components --- */}

    {/* C1: 10uF motor supply decoupling (VM to GND) */}
    <capacitor
      name="C1"
      capacitance="10uF"
      pcbX="-6mm"
      pcbY="8mm"
      footprint="0805"
      connections={{
        pin1: "net.VM",
        pin2: "net.GND",
      }}
    />

    {/* C2: 10nF charge pump capacitor (VCP to VM) */}
    <capacitor
      name="C2"
      capacitance="10nF"
      pcbX="-6mm"
      pcbY="4mm"
      footprint="0402"
      connections={{
        pin1: "net.VCP",
        pin2: "net.VM",
      }}
    />

    {/* C3: 2.2uF internal supply bypass (VINT to GND) */}
    <capacitor
      name="C3"
      capacitance="2.2uF"
      pcbX="-6mm"
      pcbY="0mm"
      footprint="0402"
      connections={{
        pin1: "net.VINT",
        pin2: "net.GND",
      }}
    />

    {/* R1: 10k pullup for nSLEEP (to VCC, also driven by GP6) */}
    <resistor
      name="R1"
      resistance="10k"
      pcbX="16mm"
      pcbY="8mm"
      footprint="0402"
      connections={{
        pin1: "net.VCC",
        pin2: "net.nSLEEP",
      }}
    />

    {/* R2: 10k pullup for nFAULT (open-drain output) */}
    <resistor
      name="R2"
      resistance="10k"
      pcbX="16mm"
      pcbY="4mm"
      footprint="0402"
      connections={{
        pin1: "net.VCC",
        pin2: "net.nFAULT",
      }}
    />

    {/* === Control Buttons === */}

    {/* Button: Step Clockwise */}
    <TactileButton6x6
      name="SW1"
      pcbX="-26mm"
      pcbY="-4mm"
      connections={{
        pin1: "net.BTN_CW",
        pin3: "net.GND",
      }}
    />

    {/* Button: Step Counter-Clockwise */}
    <TactileButton6x6
      name="SW2"
      pcbX="-14mm"
      pcbY="-4mm"
      connections={{
        pin1: "net.BTN_CCW",
        pin3: "net.GND",
      }}
    />

    {/* Button: Enable/Disable Motor */}
    <TactileButton6x6
      name="SW3"
      pcbX="26mm"
      pcbY="-4mm"
      connections={{
        pin1: "net.BTN_EN",
        pin3: "net.GND",
      }}
    />

    {/* === RP2040-Zero Module (bottom area) === */}
    <Rp2040Zero
      name="U1"
      pcbX="0mm"
      pcbY="-22mm"
      pcbRotation={180}
      connections={{
        GND: "net.GND",
        V3_3: "net.VCC",
        // I2C for OLED display
        GP0: "net.SDA",
        GP1: "net.SCL",
        // DRV8833 motor control inputs
        GP2: "net.AIN1",
        GP3: "net.AIN2",
        GP4: "net.BIN1",
        GP5: "net.BIN2",
        // DRV8833 control/status
        GP6: "net.nSLEEP",
        GP7: "net.nFAULT",
        // Buttons
        GP26: "net.BTN_CW",
        GP27: "net.BTN_CCW",
        GP28: "net.BTN_EN",
      }}
    />

    {/* === Wire Block Header (top edge, near motor driver) ===
         5mm pitch, 6 pins: A-, A+, B-, B+, VM+, GND */}
    <WireBlockHeader6
      name="J2"
      // pcbX="calc(board.maxx - 4mm)"
      pcbX="40mm"
      pcbY="4mm"
      pcbRotation="90deg"
      connections={{
        A_NEG: "net.AOUT2",
        A_POS: "net.AOUT1",
        B_NEG: "net.BOUT2",
        B_POS: "net.BOUT1",
        VM: "net.VM",
        GND: "net.GND",
      }}
    />
  </board>
)
