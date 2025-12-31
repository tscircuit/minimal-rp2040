import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["_POS"],
  pin2: ["pin2"]
} as const

export const TMB12A03 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C96222"
  ]
}}
      manufacturerPartNumber="TMB12A03"
      footprint={<footprint>
        <platedhole  portHints={["pin2"]} pcbX="3.799966999999924mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-3.799967000000038mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<silkscreentext text="_POS" pcbX="-4.44487300000003mm" pcbY="1.7653000000000247mm" anchorAlignment="bottom_left" fontSize="1.524mm" />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=659b7b30e5a340e8a7eddac89d8c69d7&pn=C96222",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: -0.019989800000075775, y: 0, z: 6.796635199999999 },
      }}
      {...props}
    />
  )
}