import type { Effect } from '.'
import type { ResourceType } from './resource'

export type FacilityId = string & { __brand: 'facility id' }

export type FacilityColor = 'red' | 'blue' | 'yellow'
export type FacilityType = FacilityColor | 'special'

export type FacilityCost = {
  resource: Partial<Record<'money' | ResourceType, number>>
  money: number
}

export type FacilityInfo = {
  id: FacilityId
  type: FacilityType
  cost: FacilityCost
  effect: Effect[]
}

export type FacilityData = FacilityInfo[]
export type FacilityIndex = Record<FacilityId, FacilityInfo>
export type FacilityHeap = FacilityInfo[]
