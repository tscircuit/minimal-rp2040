// Rp2040ZeroToDisplayBoard.tsx

import { Rp2040Zero } from "./RP2040Zero"
import { I2CDisplayHeader4 } from "./I2CDisplayHeader4"
import { ZX_QC66_7_5TP } from "../../imports/ZX_QC66_7_5TP"
import InterconnectPga15x4Receiver from "./InterconnectPga15x4Receiver"

export const RP2040DisplayBoard = () => (
  <board
    width="80mm"
    height="40mm"
    borderRadius="2mm"
    autorouter="laser_prefab"
    layers={1}
    // routingDisabled
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

    {/* <interconnect
      name="I1"
      pcbX="12mm"
      pcbY="2mm"
      standard="0805"
      pcbRotation="90deg"
    />

    <interconnect
      name="I2"
      pcbX="12mm"
      pcbY="12mm"
      standard="0805"
      pcbRotation="90deg"
    />

    <interconnect
      name="I3"
      pcbX="16mm"
      pcbY="12mm"
      standard="0805"
      pcbRotation="90deg"
    /> */}

    {/* <interconnect
      name="I4"
      pcbX="-12mm"
      pcbY="12mm"
      standard="0805"
      pcbRotation="90deg"
    />
    <interconnect
      name="I5"
      pcbX="-16mm"
      pcbY="12mm"
      standard="0805"
      pcbRotation="90deg"
    />
    <interconnect
      name="I6"
      pcbX="-20mm"
      pcbY="12mm"
      standard="0805"
      pcbRotation="90deg"
    /> */}
    {/* <interconnect
      name="I7"
      pcbX="-18mm"
      pcbY="-17mm"
      standard="0805"
      pcbRotation="0deg"
    />
    <interconnect
      name="I8"
      pcbX="18mm"
      pcbY="-17mm"
      standard="0805"
      pcbRotation="0deg"
    />
    <interconnect
      name="I9"
      pcbX="-11.5mm"
      pcbY="0mm"
      standard="0805"
      pcbRotation="0deg"
    />
    <interconnect
      name="I10"
      pcbX="-11.5mm"
      pcbY="-10mm"
      standard="0805"
      pcbRotation="0deg"
    />
    <interconnect
      name="I11"
      pcbX="-11.5mm"
      pcbY="-5mm"
      standard="0805"
      pcbRotation="0deg"
    />
    <interconnect
      name="I12"
      pcbX="11.5mm"
      pcbY="-10mm"
      standard="0805"
      pcbRotation="0deg"
    />
    <interconnect
      name="I13"
      pcbX="11.5mm"
      pcbY="-5mm"
      standard="0805"
      pcbRotation="0deg"
    /> */}

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
    <ZX_QC66_7_5TP
      name="SW5"
      pcbX="-20mm"
      pcbY="10mm"
      connections={{
        pin2: "U1.GP4",
        pin4: "net.VCC",
      }}
    />

    <I2CDisplayHeader4
      name="J1"
      pcbX="0mm"
      pcbY="14mm"
      pcbRotation="180deg"
      connections={{
        GND: "net.GND",
        VCC: "net.VCC",
        SDA: "net.SDA",
        SCL: "net.SCL",
      }}
    />

    <InterconnectPga15x4Receiver name="I1" pcbX="34mm" pcbRotation="-90deg" />
    <InterconnectPga15x4Receiver name="I2" pcbX="-34mm" pcbRotation="90deg" />
  </board>
)
