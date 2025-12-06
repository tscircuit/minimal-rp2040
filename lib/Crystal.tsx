export const Crystal = () => (
  <>
    <crystal
      name="Y1"
      footprint="hc49"
      loadCapacitance="15pF"
      frequency="12MHz"
      pcbX={0}
      pcbY={-15}
      connections={{ pin1: "U3.XIN", pin2: "net.XOUT_CRYSTAL" }}
    />
    <capacitor
      name="C2"
      footprint="0402"
      capacitance="15pF"
      connections={{ pos: "U3.XIN", neg: "net.GND" }}
    />
    <capacitor
      name="C3"
      footprint="0402"
      capacitance="15pF"
      connections={{ pos: "net.XOUT_CRYSTAL", neg: "net.GND" }}
    />
    <resistor
      name="R5"
      resistance="1k"
      footprint="0402"
      connections={{ pin1: "net.XOUT_CRYSTAL", pin2: "U3.XOUT" }}
    />
  </>
)
