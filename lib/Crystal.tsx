export const Crystal = () => (
	<group name="Crystal">
		<crystal
			name="Y1"
			footprint="hc49"
			loadCapacitance="15pF"
			frequency="12MHz"
			connections={{ pin1: "net.XIN", pin2: "net.XOUT_CRYSTAL" }}
		/>
		<capacitor
			name="C2"
			footprint="0402"
			capacitance="15pF"
			connections={{ pos: "net.XIN", neg: "net.GND" }}
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
			connections={{ pin1: "net.XOUT_CRYSTAL", pin2: "net.XOUT" }}
		/>
	</group>
);
