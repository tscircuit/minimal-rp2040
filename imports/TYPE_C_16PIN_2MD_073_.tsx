import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND1"],
  pin2: ["VBUS1"],
  pin3: ["SBU2"],
  pin4: ["CC1"],
  pin5: ["DN2"],
  pin6: ["DP1"],
  pin7: ["DN1"],
  pin8: ["DP2"],
  pin9: ["SBU1"],
  pin10: ["CC2"],
  pin11: ["VBUS2"],
  pin12: ["GND2"],
  pin13: ["SHELL1"],
  pin14: ["SHELL2"],
  pin15: ["pin13_alt1"],
  pin16: ["pin14_alt1"]
} as const

export const TYPE_C_16PIN_2MD_073_ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2765186"
  ]
}}
      manufacturerPartNumber="TYPE_C_16PIN_2MD_073_"
      footprint={<footprint>
        <hole pcbX="-2.8898849999999356mm" pcbY="1.0549255499997798mm" diameter="0.700024mm" />
<hole pcbX="2.8901389999999765mm" pcbY="1.0549255499997798mm" diameter="0.700024mm" />
<platedhole  portHints={["pin13"]} pcbX="-4.324985000000083mm" pcbY="1.575117549999959mm" holeWidth="0.5999987999999999mm" holeHeight="1.499997mm" outerWidth="1.0999978mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin14"]} pcbX="4.324985000000083mm" pcbY="1.575117549999959mm" holeWidth="0.5999987999999999mm" holeHeight="1.499997mm" outerWidth="1.0999978mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="-4.324985000000083mm" pcbY="-2.625026450000064mm" holeWidth="0.5999987999999999mm" holeHeight="1.1999976mm" outerWidth="1.1999975999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="4.324985000000083mm" pcbY="-2.625026450000064mm" holeWidth="0.5999987999999999mm" holeHeight="1.1999976mm" outerWidth="1.1999975999999999mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-3.2000189999999975mm" pcbY="2.1250275499999134mm" width="0.5500115999999999mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.399919000000068mm" pcbY="2.1250275499999134mm" width="0.5500115999999999mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.7499330000000555mm" pcbY="2.1250275499999134mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.2498070000000325mm" pcbY="2.1250275499999134mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.7499350000000504mm" pcbY="2.1250275499999134mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.2500630000000683mm" pcbY="2.1250275499999134mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.2500630000000683mm" pcbY="2.1250275499999134mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.7499350000000504mm" pcbY="2.1250275499999134mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.2500610000000734mm" pcbY="2.1250275499999134mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.7501869999999826mm" pcbY="2.1250275499999134mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.4001729999998815mm" pcbY="2.1250275499999134mm" width="0.5500115999999999mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="3.2000189999999975mm" pcbY="2.1250275499999134mm" width="0.5500115999999999mm" height="1.0999978mm" shape="rect" />
<silkscreenpath route={[{"x":4.5720761999999695,"y":-1.646948650000013},{"x":4.5720761999999695,"y":0.34700214999986656}]} />
<silkscreenpath route={[{"x":4.5720761999999695,"y":-5.0759740500000134},{"x":4.5720761999999695,"y":-3.6030026500000076}]} />
<silkscreenpath route={[{"x":-4.499914800000056,"y":-1.6438244500001247},{"x":-4.499914800000056,"y":0.34390335000000505}]} />
<silkscreenpath route={[{"x":-4.499914800000056,"y":-5.224970450000114},{"x":-4.499914800000056,"y":-3.6061268500000097}]} />
<silkscreenpath route={[{"x":4.5000671999999895,"y":-5.224970450000114},{"x":-4.499914800000056,"y":-5.224970450000114}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4ee8413127e64716b804db03d4b340ae&pn=C2765186",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.4499970500000927, z: -1.8750264499999616 },
      }}
      {...props}
    />
  )
}