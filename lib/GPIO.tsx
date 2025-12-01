export const GPIO = () => (
  <group name="GPIO">
    <pinheader
      name="J3"
      pinCount={36}
      pcbX={30 - 2.54}
      pcbY={0}
      doubleRow
      footprint="pinrow36_rows2_p2.54mm_id1mm_od1.6mm_female_faceup_nosilk"
      pcbOrientation="vertical"
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
      pcbX={-30 + 2.54}
      pcbY={0}
      pitch="2.54mm"
      footprint="pinrow36_rows2_p2.54mm_id1mm_od1.6mm_female_faceup_noref"
      schFacingDirection="right"
      pcbOrientation="vertical"
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
  </group>
)
