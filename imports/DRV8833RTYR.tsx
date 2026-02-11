import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["AISEN"],
  pin2: ["AOUT2"],
  pin3: ["BOUT2"],
  pin4: ["BISEN"],
  pin5: ["BOUT1"],
  pin6: ["nFAULT"],
  pin7: ["BIN1"],
  pin8: ["BIN2"],
  pin9: ["VCP"],
  pin10: ["VM"],
  pin11: ["GND1"],
  pin12: ["VINT"],
  pin13: ["AIN2"],
  pin14: ["AIN1"],
  pin15: ["nSLEEP"],
  pin16: ["AOUT1"],
  pin17: ["GND2"]
} as const

export const DRV8833RTYR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C154936"
  ]
}}
      manufacturerPartNumber="DRV8833RTYR"
      footprint={<footprint>
        <smtpad portHints={["pin16"]} pcbX="-0.9905999999999935mm" pcbY="1.9999959999999959mm" width="0.350012mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-0.3403599999999969mm" pcbY="1.9999959999999959mm" width="0.350012mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.3098799999999926mm" pcbY="1.9999959999999959mm" width="0.350012mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.9601200000000034mm" pcbY="1.9999959999999959mm" width="0.350012mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.9905999999999935mm" pcbY="-1.999996000000003mm" width="0.350012mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.3403599999999969mm" pcbY="-1.999996000000003mm" width="0.350012mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.3098799999999926mm" pcbY="-1.999996000000003mm" width="0.350012mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.9601200000000034mm" pcbY="-1.999996000000003mm" width="0.350012mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.9999959999999959mm" pcbY="0.965200000000003mm" width="0.9999979999999999mm" height="0.350012mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.9999959999999959mm" pcbY="0.31495999999999214mm" width="0.9999979999999999mm" height="0.350012mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.9999959999999959mm" pcbY="-0.33528000000000446mm" width="0.9999979999999999mm" height="0.350012mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.9999959999999959mm" pcbY="-0.9855200000000011mm" width="0.9999979999999999mm" height="0.350012mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.999996000000003mm" pcbY="-0.9905999999999935mm" width="0.9999979999999999mm" height="0.350012mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.999996000000003mm" pcbY="-0.3403599999999969mm" width="0.9999979999999999mm" height="0.350012mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.999996000000003mm" pcbY="0.3098799999999997mm" width="0.9999979999999999mm" height="0.350012mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.999996000000003mm" pcbY="0.9601200000000105mm" width="0.9999979999999999mm" height="0.350012mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0mm" pcbY="7.105427357601002e-15mm" width="2.5999947999999997mm" height="2.5999947999999997mm" shape="rect" />
<silkscreenpath route={[{"x":2.0999450000000053,"y":2.099995800000002},{"x":2.0999450000000053,"y":1.366265999999996}]} />
<silkscreenpath route={[{"x":-2.100046600000006,"y":-1.3916660000000007},{"x":-2.100046600000006,"y":-2.099995800000002}]} />
<silkscreenpath route={[{"x":-2.100046600000006,"y":2.099995800000002},{"x":-2.100046600000006,"y":1.3713460000000097}]} />
<silkscreenpath route={[{"x":1.3662151999999992,"y":-2.099995800000002},{"x":2.0999450000000053,"y":-2.099995800000002}]} />
<silkscreenpath route={[{"x":-2.100046600000006,"y":-2.099995800000002},{"x":-1.396796799999997,"y":-2.099995800000002}]} />
<silkscreenpath route={[{"x":1.3662151999999992,"y":2.099995800000002},{"x":2.0999450000000053,"y":2.099995800000002}]} />
<silkscreenpath route={[{"x":-2.100046600000006,"y":2.099995800000002},{"x":-1.396796799999997,"y":2.099995800000002}]} />
<silkscreenpath route={[{"x":2.0999450000000053,"y":-1.3967460000000003},{"x":2.0999450000000053,"y":-2.099995800000002}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=be2c395f829e442d94eaa44ffc939741&pn=C154936",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 7.105427357601002e-15, z: -1.699995000000002 },
      }}
      {...props}
    />
  )
}