import type { FacilityId } from './facility'
import type { MapResptId } from './map'
import type { OperatorId } from './operator'
import type { ResourceType } from './resource'
import type { Matrix } from './utils'

export type PlayerId = number & { __brand: 'player id' }

export type PlayerInstanceInfo = {
  id: PlayerId

  point: number

  city_place?: MapResptId

  facilities: Matrix<{
    id: FacilityId
    used: boolean
  } | null>

  money: number
  resource: Record<ResourceType, number>

  rest_influence: number

  active_operator?: OperatorId
  rest_operator: OperatorId[]
  used_operator: OperatorId[]
}
