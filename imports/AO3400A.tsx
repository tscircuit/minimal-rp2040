import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["G", "gate"],
  pin2: ["S", "source"],
  pin3: ["D", "drain"],
} as const

export const AO3400A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C347475"],
      }}
      manufacturerPartNumber="AO3400A"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="0.9999979999998914mm"
            pcbY="-0.9499599999999191mm"
            width="1.2500101999999997mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.9999979999998914mm"
            pcbY="0.9499599999999191mm"
            width="1.2500101999999997mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.9999979999998914mm"
            pcbY="0mm"
            width="1.2500101999999997mm"
            height="0.6999986mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.726211400000011, y: 1.5262098000000606 },
              { x: -0.726211400000011, y: 1.5262098000000606 },
              { x: -0.726211400000011, y: 0.49458879999997407 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.726211400000011, y: -1.5262097999999469 },
              { x: -0.726211400000011, y: -1.5262097999999469 },
              { x: -0.726211400000011, y: -0.49458879999997407 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.726211400000011, y: 0.45539659999997184 },
              { x: 0.726211400000011, y: -0.45539659999985815 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=d777607a152f4f3aac9bb0d0c14ed6fd&pn=C347475",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: -861.568, y: 843.28, z: -0.4999592999999549 },
      }}
      {...props}
    />
  )
}
