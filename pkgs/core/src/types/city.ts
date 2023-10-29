import type { FacilityColor, FacilityType } from './facility'
import type { PlayerId } from './player'
import type { Matrix } from './utils'

export type CityStyleType = 'purple' | 'green'

export type CityStyleInfo = {
  name: string
  type: CityStyleType
  requirement: Matrix<FacilityColor[] | null>
  state: string[]
}

export type CityStyleInstanceInfo = {
  info: CityStyleInfo
  state: PlayerId[][]
}

export type CityStyleData = CityStyleInfo[]
export type CityStyleArea = CityStyleInstanceInfo[]
