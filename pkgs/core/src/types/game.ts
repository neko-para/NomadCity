import type { CityStyleData } from './city'
import type { EventData } from './event'
import type { FacilityData, FacilityIndex } from './facility'
import type { MapData, MapIndex } from './map'
import type { PlayerId, PlayerInstanceInfo } from './player'
import type { SupportInstanceInfo } from './support'

export type GameInstanceInfo = {
  round: number
  active_player: PlayerId

  map: MapIndex
  facility: FacilityIndex

  support: SupportInstanceInfo

  player: PlayerInstanceInfo[]
}

export type GamePresetConfig = {
  player: 2 | 3 | 4 // maybe number

  map: MapData
  event: EventData
  facility: FacilityData
  city_style: CityStyleData

  money_init: number[]
}
