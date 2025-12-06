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
    <RP2040 name="U3" />

    <Decoupling />

    <Flash />

    <Crystal />

    <USBPower />
  </board>
)
