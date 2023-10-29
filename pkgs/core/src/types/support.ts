import type { CityStyleInstanceInfo } from './city'
import type { EventIndex } from './event'
import type { FacilityHeap, FacilityIndex, FacilityInfo } from './facility'

export type SupportInstanceInfo = {
  events: EventIndex

  facilities: FacilityHeap
  active_facilities: FacilityInfo[]

  city_styles: CityStyleInstanceInfo[]

  originite_prime: number // 35
  money: number
}
