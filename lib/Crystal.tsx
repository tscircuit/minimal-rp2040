export const Crystal = () => (
  <>
    <crystal
      name="Y1"
      footprint="hc49"
      loadCapacitance="18pF"
      frequency="12MHz"
      pcbX={0}
      pcbY={-15}
      obstructsWithinBounds
      connections={{ pin1: "U3.XIN", pin2: "net.XOUT_CRYSTAL" }}
    />
    <capacitor
      name="C3"
      footprint="0402"
      capacitance="27pF"
      connections={{ pos: "Y1.pin2" }}
    />
  </>
)
