export const USB = () => (
	<group name="USB">
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
	</group>
);
