import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
} as const

export const ZX_QC66_7_5TP = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C7470157"],
      }}
      manufacturerPartNumber="ZX_QC66_7_5TP"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-4.29996600000004mm"
            pcbY="2.2500589999999647mm"
            width="2.1999956mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="4.299965999999927mm"
            pcbY="2.2500589999999647mm"
            width="2.1999956mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-4.29996600000004mm"
            pcbY="-2.2500590000000784mm"
            width="2.1999956mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="4.299965999999927mm"
            pcbY="-2.2500590000000784mm"
            width="2.1999956mm"
            height="1.499997mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.999994000000129, y: 3.000044799999955 },
              { x: 2.999994000000015, y: 3.000044799999955 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.999994000000129, y: -2.9999431999999615 },
              { x: 2.999994000000015, y: -2.9999431999999615 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.999994000000129, y: 3.000044799999955 },
              { x: -2.999994000000129, y: -2.9999431999999615 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.999994000000015, y: 3.000044799999955 },
              { x: 2.999994000000015, y: -2.9999431999999615 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=0c5cbc362e9d41ae95f9f77f620e8890&pn=C7470157",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0.00005080000005364127, z: 0 },
      }}
      {...props}
    />
  )
}
