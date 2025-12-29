// Rp2040ZeroToDisplayBoard.tsx

import { Rp2040Zero } from "./RP2040Zero"
import { I2CDisplayHeader4 } from "./I2CDisplayHeader4"
import { ZX_QC66_7_5TP } from "../../imports/ZX_QC66_7_5TP"
import InterconnectPga15x4Receiver from "./InterconnectPga15x4Receiver"

export const RP2040DisplayBoard = () => (
  <board
    width="60mm"
    height="70mm"
    borderRadius="2mm"
    autorouter="laser_prefab"
    // routingDisabled
    // minTraceWidth="0.25mm"
    layers={1}
  >
    <Rp2040Zero
      name="U1"
      pcbX="0mm"
      pcbY="-20mm"
      pcbRotation={180}
      connections={{
        GND: "net.GND",
        V3_3: "net.VCC",
        GP0: "net.SDA",
        GP1: "net.SCL",
      }}
    />

    <ZX_QC66_7_5TP
      name="SW1"
      pcbX="20mm"
      pcbY="-14mm"
      connections={{
        pin1: "U1.GP26",
        pin3: "net.VCC",
      }}
    />
    <ZX_QC66_7_5TP
      name="SW2"
      pcbX="20mm"
      pcbY="-24mm"
      connections={{
        pin1: "U1.GP27",
        pin3: "net.VCC",
      }}
    />
    <ZX_QC66_7_5TP
      name="SW3"
      pcbX="-20mm"
      pcbY="-14mm"
      connections={{
        pin2: "U1.GP7",
        pin4: "net.VCC",
      }}
    />
    <ZX_QC66_7_5TP
      name="SW4"
      pcbX="-20mm"
      pcbY="-24mm"
      connections={{
        pin2: "U1.GP3",
        pin4: "net.VCC",
      }}
    />

    <I2CDisplayHeader4
      name="J1"
      pcbX="0mm"
      pcbY="10mm"
      pcbRotation="180deg"
      connections={{
        GND: "net.GND",
        VCC: "net.VCC",
        SDA: "net.SDA",
        SCL: "net.SCL",
      }}
    />

    <InterconnectPga15x4Receiver
      name="I1"
      pcbX="22mm"
      pcbY="14mm"
      pcbRotation="-90deg"
    />
    <InterconnectPga15x4Receiver
      name="I2"
      pcbX="-22mm"
      pcbY="14mm"
      pcbRotation="90deg"
    />
  </board>
)
