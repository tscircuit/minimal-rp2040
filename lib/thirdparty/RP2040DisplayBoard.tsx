// Rp2040ZeroToDisplayBoard.tsx

import { Rp2040Zero } from "./RP2040Zero"
import { I2CDisplayHeader4 } from "./I2CDisplayHeader4"
import { ZX_QC66_7_5TP } from "../../imports/ZX_QC66_7_5TP"

export const RP2040DisplayBoard = () => (
  <board
    width="54mm"
    height="40mm"
    borderRadius="2mm"
    autorouter="laser_prefab"
  >
    <Rp2040Zero
      name="U1"
      pcbX="0mm"
      pcbY="-4mm"
      pcbRotation={180}
      connections={{
        GND: "net.GND",
        V3_3: "net.VCC",
        GP0: "net.SDA",
        GP1: "net.SCL",
      }}
    />

    <interconnect
      name="I1"
      pcbX="12mm"
      pcbY="2mm"
      standard="0805"
      pcbRotation="90deg"
    />

    {/* <interconnect
      name="I2"
      pcbX="12mm"
      pcbY="-4mm"
      standard="0805"
      pcbRotation="90deg"
    />

    <interconnect
      name="I3"
      pcbX="12mm"
      pcbY="-10mm"
      standard="0805"
      pcbRotation="90deg"
    /> */}

    <interconnect
      name="I4"
      pcbX="-12mm"
      pcbY="2mm"
      standard="0805"
      pcbRotation="90deg"
    />

    <ZX_QC66_7_5TP
      name="SW1"
      pcbX="20mm"
      pcbY="0mm"
      connections={{
        pin1: "U1.GP26",
        pin3: "net.VCC",
      }}
    />
    <ZX_QC66_7_5TP
      name="SW2"
      pcbX="20mm"
      pcbY="-10mm"
      connections={{
        pin1: "U1.GP27",
        pin3: "net.VCC",
      }}
    />
    <ZX_QC66_7_5TP
      name="SW3"
      pcbX="-20mm"
      pcbY="0mm"
      connections={{
        pin2: "U1.GP7",
        pin4: "net.VCC",
      }}
    />
    <ZX_QC66_7_5TP
      name="SW4"
      pcbX="-20mm"
      pcbY="-10mm"
      connections={{
        pin2: "U1.GP3",
        pin4: "net.VCC",
      }}
    />

    <I2CDisplayHeader4
      name="J1"
      pcbX="0mm"
      pcbY="14mm"
      connections={{
        GND: "net.GND",
        VCC: "net.VCC",
        SDA: "net.SDA",
        SCL: "net.SCL",
      }}
    />
  </board>
)
