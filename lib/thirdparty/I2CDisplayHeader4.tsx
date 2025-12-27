// I2CDisplayHeader4.tsx

export type I2CDisplayHeader4Props = {
  name: string
  pcbX?: number | string
  pcbY?: number | string
  pcbRotation?: number | string
  connections?: Partial<{
    GND: string
    VCC: string
    SCL: string
    SDA: string
  }>
}

/**
 * 4-pin 0.1" (2.54mm) through-hole header:
 * [1] GND, [2] VCC, [3] SCL, [4] SDA   (left -> right)
 */
export const I2CDisplayHeader4 = ({
  name,
  pcbX,
  pcbY,
  pcbRotation,
  connections,
}: I2CDisplayHeader4Props) => {
  // 4 pins on 2.54mm pitch, centered around origin:
  // x = -3.81, -1.27, +1.27, +3.81  (i.e. ±1.5P and ±0.5P)
  const P = 2.54
  const xs = [-1.5 * P, -0.5 * P, 0.5 * P, 1.5 * P]

  return (
    <chip
      name={name}
      pcbX={pcbX}
      pcbY={pcbY}
      pcbRotation={pcbRotation}
      connections={connections}
      pinLabels={{
        pin1: "GND",
        pin2: "VCC",
        pin3: "SCL",
        pin4: "SDA",
      }}
      footprint={
        <footprint>
          {xs.map((x, i) => (
            <platedhole
              key={i}
              portHints={[String(i + 1)]}
              pcbX={x}
              pcbY={0}
              holeDiameter="1.0mm"
              outerDiameter="1.8mm"
              shape="circle"
            />
          ))}
        </footprint>
      }
    />
  )
}
