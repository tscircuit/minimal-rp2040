// Rp2040ZeroToDisplayBoard.tsx

import { Rp2040Zero } from "./RP2040Zero"
import { I2CDisplayHeader4 } from "./I2CDisplayHeader4"

export const RP2040DisplayBoard = () => (
  <board
    width="40mm"
    height="40mm"
    borderRadius="2mm"
    autorouter="laser_prefab"
  >
    <Rp2040Zero
      name="U1"
      pcbX="0mm"
      pcbY="-4mm"
      connections={{
        GND: "net.GND",
        V3_3: "net.VCC",
        GP0: "net.SDA",
        GP1: "net.SCL",
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
