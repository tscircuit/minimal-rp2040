import { TYPE_C_16PIN_2MD_073_ } from "../imports/TYPE_C_16PIN_2MD_073_"

export const USBPower = () => (
  <>
    <TYPE_C_16PIN_2MD_073_
      name="J1"
      connections={{
        VBUS1: "net.VBUS",
        VBUS2: "net.VBUS",
        DP1: "net.USB_DP",
        DP2: "net.USB_DP",
        DN1: "net.USB_DM",
        DN2: "net.USB_DM",
        CC1: "net.CC1",
        CC2: "net.CC2",
        GND1: "net.GND",
        GND2: "net.GND",
        SHELL1: "net.GND",
        SHELL2: "net.GND",
      }}
      pcbRotation={180}
      pcbX={0}
      pcbY={26}
    />

    {/* 5.1k Rd to GND on CC1/CC2 for UFP (device) mode */}
    <resistor
      name="R6"
      resistance="5.1k"
      footprint="0402"
      connections={{ pin1: "net.CC1", pin2: "net.GND" }}
    />
    <resistor
      name="R7"
      resistance="5.1k"
      footprint="0402"
      connections={{ pin1: "net.CC2", pin2: "net.GND" }}
    />

    {/* NCP1117‑3.3 (SOT‑223) – modelled as generic 3‑pin LDO */}
    <chip
      name="U1"
      pcbX={15}
      pcbY={15}
      footprint="sot223"
      obstructsWithinBounds
      pinLabels={{
        pin1: "GND",
        pin2: "VOUT",
        pin3: "VIN",
        pin4: "VOUT_TAB",
      }}
      internallyConnectedPins={[["VOUT", "VOUT_TAB"]]}
      connections={{
        VIN: "net.VBUS",
        VOUT: "net.V3V3",
        GND: "net.GND",
      }}
    />

    {/* Regulator input / output bulk caps */}
    <capacitor
      name="C1"
      footprint="0603"
      capacitance="10uF"
      schOrientation="vertical"
      connections={{ pos: "U1.VIN", neg: "net.GND" }}
    />
    <capacitor
      name="C4"
      footprint="0603"
      capacitance="10uF"
      schOrientation="vertical"
      connections={{ pos: "U1.VOUT", neg: "net.GND" }}
    />

    <resistor
      name="R3"
      resistance="27"
      footprint="0402"
      connections={{ pin1: "net.USB_DP_INT", pin2: "net.USB_DP" }}
    />
    <resistor
      name="R4"
      resistance="27"
      footprint="0402"
      connections={{ pin1: "net.USB_DM_INT", pin2: "net.USB_DM" }}
    />
  </>
)
