export const Decoupling = () => (
  <group name="Decoupling">
    {/* 1V1 internal rail */}
    <capacitor
      name="C6"
      footprint="0402"
      capacitance="100nF"
      connections={{ pos: "U3.DVDD", neg: "net.GND" }}
    />
    <capacitor
      name="C7"
      footprint="0402"
      capacitance="100nF"
      connections={{ pos: "U3.DVDD2", neg: "net.GND" }}
    />
    <capacitor
      name="C8"
      footprint="0402"
      capacitance="1uF"
      connections={{ pos: "U3.VREG_VOUT", neg: "net.GND" }}
    />

    {/* 3V3 around RP2040 */}
    <capacitor
      name="C9"
      footprint="0402"
      capacitance="100nF"
      connections={{ pos: "U3.IOVDD", neg: "net.GND" }}
    />
    <capacitor
      name="C11"
      footprint="0402"
      capacitance="100nF"
      connections={{ pos: "U3.IOVDD2", neg: "net.GND" }}
    />
    <capacitor
      name="C12"
      footprint="0402"
      capacitance="100nF"
      connections={{ pos: "U3.IOVDD3", neg: "net.GND" }}
    />
    <capacitor
      name="C13"
      footprint="0402"
      capacitance="100nF"
      connections={{ pos: "U3.IOVDD4", neg: "net.GND" }}
    />
    <capacitor
      name="C14"
      footprint="0402"
      capacitance="100nF"
      connections={{ pos: "U3.IOVDD5", neg: "net.GND" }}
    />
    <capacitor
      name="C15"
      footprint="0402"
      capacitance="100nF"
      connections={{ pos: "U3.USB_VDD", neg: "net.GND" }}
    />
    <capacitor
      name="C16"
      footprint="0402"
      capacitance="100nF"
      connections={{ pos: "U3.ADC_AVDD", neg: "net.GND" }}
    />
    <capacitor
      name="C10"
      footprint="0402"
      capacitance="1uF"
      connections={{ pos: "U3.VREG_IN", neg: "net.GND" }}
    />

    {/* Extra 3V3 bulk cap near IO headers */}
    <capacitor
      name="C17"
      footprint="0603"
      capacitance="10uF"
      connections={{ pos: "net.V3V3", neg: "net.GND" }}
    />
  </group>
)
