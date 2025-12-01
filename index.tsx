import { Decoupling } from "./lib/Decoupling"
import { Flash } from "./lib/Flash"
import { Power } from "./lib/Power"
import { Crystal } from "./lib/Crystal"
import { USB } from "./lib/USB"
import importedRp2040KicadMod from "./RP2040-QFN-56.kicad_mod"
import { GPIO } from "./lib/GPIO"

export const Rp2040MinimalBoard = () => (
  <board routingDisabled pcbPack width="65mm" height="60mm">
    <chip
      name="U3"
      footprint={importedRp2040KicadMod}
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

    <Power />

    <Decoupling />

    <Flash />

    <Crystal />

    <USB />

    <GPIO />
  </board>
)
