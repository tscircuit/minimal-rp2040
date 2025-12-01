export const Power = () => (
  <group name="Power">
    <chip
      name="J1"
      footprint="kicad:Connector_USB/USB_C_Receptacle_Palconn_UTC16-G"
      pinLabels={{
        pin1: "VBUS",
        pin2: "D-",
        pin3: "D+",
        pin4: "CC1",
        pin5: "CC2",
        pin6: "GND",
        pin7: "SBU1",
        pin8: "SBU2",
      }}
      connections={{
        VBUS: "net.VBUS",
        "D+": "net.USB_DP",
        "D-": "net.USB_DM",
        CC1: "net.CC1",
        CC2: "net.CC2",
        GND: "net.GND",
      }}
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
      footprint="sot223"
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
  </group>
)
