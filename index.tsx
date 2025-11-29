import importedRp2040KicadMod from "./RP2040-QFN-56.kicad_mod";

export const Rp2040MinimalBoard = () => (
	<board pcbPack width="60mm" height="40mm">
		{/* =========================
        RP2040 core
       ========================= */}
		<chip
			name="U3"
			footprint={importedRp2040KicadMod}
			// !!! IMPORTANT !!!
			// pinLabels below are schematic-style placeholders.
			// Please remap pin1..pin56 to the real RP2040 pinout.
			pinLabels={{
				pin1: "GPIO0",
				pin2: "GPIO1",
				pin3: "GPIO2",
				pin4: "GPIO3",
				pin5: "GPIO4",
				pin6: "GPIO5",
				pin7: "GPIO6",
				pin8: "GPIO7",
				pin9: "GPIO8",
				pin10: "GPIO9",
				pin11: "GPIO10",
				pin12: "GPIO11",
				pin13: "GPIO12",
				pin14: "GPIO13",
				pin15: "GPIO14",
				pin16: "GPIO15",
				pin17: "GPIO16",
				pin18: "GPIO17",
				pin19: "GPIO18",
				pin20: "GPIO19",
				pin21: "GPIO20",
				pin22: "GPIO21",
				pin23: "GPIO22",
				pin24: "GPIO23",
				pin25: "GPIO24",
				pin26: "GPIO25",
				pin27: "GPIO26_ADC0",
				pin28: "GPIO27_ADC1",
				pin29: "GPIO28_ADC2",
				pin30: "GPIO29_ADC3",

				pin31: "QSPI_SS",
				pin32: "QSPI_SD0",
				pin33: "QSPI_SD1",
				pin34: "QSPI_SD2",
				pin35: "QSPI_SD3",
				pin36: "QSPI_SCLK",

				pin37: "XIN",
				pin38: "XOUT",

				pin39: "RUN",
				pin40: "SWCLK",
				pin41: "SWD",

				pin42: "USB_DP",
				pin43: "USB_DM",

				pin44: "VREG_IN",
				pin45: "VREG_VOUT",
				pin46: "DVDD",
				pin47: "DVDD2",

				pin48: "IOVDD",
				pin49: "IOVDD2",
				pin50: "USB_VDD",
				pin51: "ADC_AVDD",
				pin52: "IOVDD3",
				pin53: "IOVDD4",
				pin54: "IOVDD5",

				pin55: "GND1",
				pin56: "GND2",
			}}
			connections={{
				// Supplies
				VREG_IN: "net.V3V3",
				VREG_VOUT: "net.V1V1",
				DVDD: "net.V1V1",
				DVDD2: "net.V1V1",

				IOVDD: "net.V3V3",
				IOVDD2: "net.V3V3",
				IOVDD3: "net.V3V3",
				IOVDD4: "net.V3V3",
				IOVDD5: "net.V3V3",
				USB_VDD: "net.V3V3",
				ADC_AVDD: "net.V3V3",

				GND1: "net.GND",
				GND2: "net.GND",

				// Clocks
				XIN: "net.XIN",
				XOUT: "net.XOUT",

				// Debug / reset
				RUN: "net.RUN",
				SWCLK: "net.SWCLK",
				SWD: "net.SWD",

				// QSPI flash
				QSPI_SS: "net.QSPI_SS",
				QSPI_SD0: "net.QSPI_SD0",
				QSPI_SD1: "net.QSPI_SD1",
				QSPI_SD2: "net.QSPI_SD2",
				QSPI_SD3: "net.QSPI_SD3",
				QSPI_SCLK: "net.QSPI_SCLK",

				// USB – internal side (before 27Ω series Rs)
				USB_DP: "net.USB_DP_INT",
				USB_DM: "net.USB_DM_INT",

				// GPIOs
				GPIO0: "net.GPIO0",
				GPIO1: "net.GPIO1",
				GPIO2: "net.GPIO2",
				GPIO3: "net.GPIO3",
				GPIO4: "net.GPIO4",
				GPIO5: "net.GPIO5",
				GPIO6: "net.GPIO6",
				GPIO7: "net.GPIO7",
				GPIO8: "net.GPIO8",
				GPIO9: "net.GPIO9",
				GPIO10: "net.GPIO10",
				GPIO11: "net.GPIO11",
				GPIO12: "net.GPIO12",
				GPIO13: "net.GPIO13",
				GPIO14: "net.GPIO14",
				GPIO15: "net.GPIO15",
				GPIO16: "net.GPIO16",
				GPIO17: "net.GPIO17",
				GPIO18: "net.GPIO18",
				GPIO19: "net.GPIO19",
				GPIO20: "net.GPIO20",
				GPIO21: "net.GPIO21",
				GPIO22: "net.GPIO22",
				GPIO23: "net.GPIO23",
				GPIO24: "net.GPIO24",
				GPIO25: "net.GPIO25",
				GPIO26_ADC0: "net.GPIO26_ADC0",
				GPIO27_ADC1: "net.GPIO27_ADC1",
				GPIO28_ADC2: "net.GPIO28_ADC2",
				GPIO29_ADC3: "net.GPIO29_ADC3",
			}}
		/>

		{/* =========================
        USB‑C + LDO 3V3 regulator
       ========================= */}
		<chip
			name="J1"
			footprint="kicad:Connector_USB/USB_C_Receptacle_Palconn_UTC16-G"
			// Placeholder pin order; match to your USB‑C footprint.
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
				// SBU1/SBU2 left unconnected
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
			connections={{ pos: "net.VBUS", neg: "net.GND" }}
		/>
		<capacitor
			name="C4"
			footprint="0603"
			capacitance="10uF"
			connections={{ pos: "net.V3V3", neg: "net.GND" }}
		/>

		{/* =========================
        1V1 internal rail decoupling
       ========================= */}
		<capacitor
			name="C6"
			footprint="0402"
			capacitance="100nF"
			connections={{ pos: "net.V1V1", neg: "net.GND" }}
		/>
		<capacitor
			name="C7"
			footprint="0402"
			capacitance="100nF"
			connections={{ pos: "net.V1V1", neg: "net.GND" }}
		/>
		<capacitor
			name="C8"
			footprint="0402"
			capacitance="1uF"
			connections={{ pos: "net.V1V1", neg: "net.GND" }}
		/>

		{/* =========================
        3V3 decoupling around RP2040
       ========================= */}
		<capacitor
			name="C9"
			footprint="0402"
			capacitance="100nF"
			connections={{ pos: "net.V3V3", neg: "net.GND" }}
		/>
		<capacitor
			name="C11"
			footprint="0402"
			capacitance="100nF"
			connections={{ pos: "net.V3V3", neg: "net.GND" }}
		/>
		<capacitor
			name="C12"
			footprint="0402"
			capacitance="100nF"
			connections={{ pos: "net.V3V3", neg: "net.GND" }}
		/>
		<capacitor
			name="C13"
			footprint="0402"
			capacitance="100nF"
			connections={{ pos: "net.V3V3", neg: "net.GND" }}
		/>
		<capacitor
			name="C14"
			footprint="0402"
			capacitance="100nF"
			connections={{ pos: "net.V3V3", neg: "net.GND" }}
		/>
		<capacitor
			name="C15"
			footprint="0402"
			capacitance="100nF"
			connections={{ pos: "net.V3V3", neg: "net.GND" }}
		/>
		<capacitor
			name="C16"
			footprint="0402"
			capacitance="100nF"
			connections={{ pos: "net.V3V3", neg: "net.GND" }}
		/>
		<capacitor
			name="C10"
			footprint="0402"
			capacitance="1uF"
			connections={{ pos: "net.V3V3", neg: "net.GND" }}
		/>

		{/* Extra 3V3 bulk cap near IO headers */}
		<capacitor
			name="C17"
			footprint="0603"
			capacitance="10uF"
			connections={{ pos: "net.V3V3", neg: "net.GND" }}
		/>

		{/* =========================
        QSPI Flash + USB_BOOT
       ========================= */}
		<chip
			name="U2"
			footprint="soic8"
			pinLabels={{
				pin1: "QSPI_SS",
				pin2: "QSPI_SCLK",
				pin3: "QSPI_SD0",
				pin4: "QSPI_SD1",
				pin5: "QSPI_SD2",
				pin6: "QSPI_SD3",
				pin7: "GND",
				pin8: "VCC",
			}}
			connections={{
				QSPI_SS: "net.QSPI_SS",
				QSPI_SCLK: "net.QSPI_SCLK",
				QSPI_SD0: "net.QSPI_SD0",
				QSPI_SD1: "net.QSPI_SD1",
				QSPI_SD2: "net.QSPI_SD2",
				QSPI_SD3: "net.QSPI_SD3",
				VCC: "net.V3V3",
				GND: "net.GND",
			}}
		/>

		<capacitor
			name="C5"
			footprint="0402"
			capacitance="100nF"
			connections={{ pos: "net.V3V3", neg: "net.GND" }}
		/>

		{/* USB_BOOT header */}
		<pinheader
			name="J2"
			pinCount={2}
			gender="female"
			pitch="2.54mm"
			schFacingDirection="up"
			pinLabels={["USB_BOOT", "GND"]}
			connections={{
				USB_BOOT: "net.USB_BOOT",
				GND: "net.GND",
			}}
		/>

		{/* R1: 1k from USB_BOOT header to QSPI_SS */}
		<resistor
			name="R1"
			resistance="1k"
			footprint="0402"
			connections={{ pin1: "net.USB_BOOT", pin2: "net.QSPI_SS" }}
		/>

		{/* R2: DNF pull-up from USB_BOOT to 3V3 (value ~10k) */}
		<resistor
			name="R2"
			resistance="10k"
			footprint="0402"
			connections={{ pin1: "net.USB_BOOT", pin2: "net.V3V3" }}
		/>

		{/* =========================
        12 MHz crystal network
       ========================= */}
		<crystal
			name="Y1"
			footprint="hc49" // swap to ABM8 footprint when you have a footprinter string
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

		{/* =========================
        USB D+ / D- series resistors
       ========================= */}
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

		{/* =========================
        GPIO headers (J3, J4)
       ========================= */}
		<pinheader
			name="J3"
			pinCount={36}
			doubleRow
			gender="female"
			pitch="2.54mm"
			schFacingDirection="right"
			pinLabels={[
				"GPIO0",
				"GPIO0",
				"GPIO1",
				"GPIO1",
				"GPIO2",
				"GPIO2",
				"GPIO3",
				"GPIO3",
				"GPIO4",
				"GPIO4",
				"GPIO5",
				"GPIO5",
				"GPIO6",
				"GPIO6",
				"GPIO7",
				"GPIO7",
				"GPIO8",
				"GPIO8",
				"GPIO9",
				"GPIO9",
				"GPIO10",
				"GPIO10",
				"GPIO11",
				"GPIO11",
				"GPIO12",
				"GPIO12",
				"GPIO13",
				"GPIO13",
				"GPIO14",
				"GPIO14",
				"GPIO15",
				"GPIO15",
				"GND",
				"GND",
			]}
			connections={{
				GPIO0: "net.GPIO0",
				GPIO1: "net.GPIO1",
				GPIO2: "net.GPIO2",
				GPIO3: "net.GPIO3",
				GPIO4: "net.GPIO4",
				GPIO5: "net.GPIO5",
				GPIO6: "net.GPIO6",
				GPIO7: "net.GPIO7",
				GPIO8: "net.GPIO8",
				GPIO9: "net.GPIO9",
				GPIO10: "net.GPIO10",
				GPIO11: "net.GPIO11",
				GPIO12: "net.GPIO12",
				GPIO13: "net.GPIO13",
				GPIO14: "net.GPIO14",
				GPIO15: "net.GPIO15",
				GND: "net.GND",
			}}
		/>

		<pinheader
			name="J4"
			pinCount={36}
			doubleRow
			gender="female"
			pitch="2.54mm"
			schFacingDirection="right"
			pinLabels={[
				"GPIO29_ADC3",
				"GPIO29_ADC3",
				"GPIO28_ADC2",
				"GPIO28_ADC2",
				"GPIO27_ADC1",
				"GPIO27_ADC1",
				"GPIO26_ADC0",
				"GPIO26_ADC0",
				"GPIO25",
				"GPIO25",
				"GPIO24",
				"GPIO24",
				"GPIO23",
				"GPIO23",
				"GPIO22",
				"GPIO22",
				"GPIO21",
				"GPIO21",
				"GPIO20",
				"GPIO20",
				"GPIO19",
				"GPIO19",
				"GPIO18",
				"GPIO18",
				"GPIO17",
				"GPIO17",
				"GPIO16",
				"GPIO16",
				"RUN",
				"RUN",
				"SWD",
				"SWD",
				"SWCLK",
				"SWCLK",
				"GND",
				"GND",
			]}
			connections={{
				GPIO29_ADC3: "net.GPIO29_ADC3",
				GPIO28_ADC2: "net.GPIO28_ADC2",
				GPIO27_ADC1: "net.GPIO27_ADC1",
				GPIO26_ADC0: "net.GPIO26_ADC0",
				GPIO25: "net.GPIO25",
				GPIO24: "net.GPIO24",
				GPIO23: "net.GPIO23",
				GPIO22: "net.GPIO22",
				GPIO21: "net.GPIO21",
				GPIO20: "net.GPIO20",
				GPIO19: "net.GPIO19",
				GPIO18: "net.GPIO18",
				GPIO17: "net.GPIO17",
				GPIO16: "net.GPIO16",
				RUN: "net.RUN",
				SWD: "net.SWD",
				SWCLK: "net.SWCLK",
				GND: "net.GND",
			}}
		/>
	</board>
);
