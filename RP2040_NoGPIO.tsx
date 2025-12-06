import { RP2040 } from "./imports/RP2040"
import { Crystal } from "./lib/Crystal"
import { Decoupling } from "./lib/Decoupling"
import { Flash } from "./lib/Flash"
import { USBPower } from "./lib/USBPower"

export default () => (
  <board
    pcbPack
    width="65mm"
    height="60mm"
    autorouter="laser_prefab"
    layers={1}
  >
    <RP2040
      name="U3"
      connections={{
        // Power - 3.3V IO supply
        IOVDD1: "net.V3V3",
        IOVDD2: "net.V3V3",
        IOVDD3: "net.V3V3",
        IOVDD4: "net.V3V3",
        IOVDD5: "net.V3V3",
        IOVDD6: "net.V3V3",
        USB_VDD: "net.V3V3",
        ADC_AVDD: "net.V3V3",

        // Power - internal 1.1V regulator
        VREG_IN: "net.V3V3",
        VREG_VOUT: "net.V1V1",
        DVDD1: "net.V1V1",
        DVDD2: "net.V1V1",

        // Ground
        GND: "net.GND",
        TESTEN: "net.GND",

        // QSPI Flash
        QSPI_SS: "net.QSPI_SS",
        QSPI_SCLK: "net.QSPI_SCLK",
        QSPI_SD0: "net.QSPI_SD0",
        QSPI_SD1: "net.QSPI_SD1",
        QSPI_SD2: "net.QSPI_SD2",
        QSPI_SD3: "net.QSPI_SD3",

        // USB (through series resistors)
        USB_DP: "net.USB_DP_INT",
        USB_DM: "net.USB_DM_INT",
      }}
    />

    <Decoupling />

    <Flash />

    <Crystal />

    <USBPower />
  </board>
)
