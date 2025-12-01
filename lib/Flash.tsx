export const Flash = () => (
  <>
    <chip
      name="U2"
      pcbX={-15}
      pcbY={15}
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
      connections={{ pos: "U2.VCC", neg: "net.GND" }}
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
  </>
)
