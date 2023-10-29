import type {
  Effect,
  FacilityCost,
  FacilityData,
  FacilityId,
  FacilityIndex,
  FacilityInfo,
  FacilityType
} from '../types'

function faci(id: string, type: FacilityType, cost: FacilityCost, effect: Effect[]): FacilityInfo {
  return {
    id: id as FacilityId,
    type,
    cost,
    effect
  }
}

const indexOnly: FacilityData = [faci('核心控制塔', 'special', { resource: {}, money: 0 }, [])]

export const Facilities: FacilityData = [
  faci(
    '城邦行政区',
    'special',
    {
      resource: {
        orirock: 3,
        originium: 3,
        oriron: 3
      },
      money: 30
    },
    []
  ),
  faci(
    '城市化区域',
    'blue',
    {
      resource: {
        orirock: 3,
        oriron: 2
      },
      money: 16
    },
    []
  ),
  faci(
    '开采电钻',
    'yellow',
    {
      resource: {
        originium: 2,
        oriron: 1
      },
      money: 10
    },
    []
  ),
  faci(
    '佣兵指挥部',
    'special',
    {
      resource: {
        orirock: 2,
        oriron: 2,
        money: 4
      },
      money: 18
    },
    []
  ),
  faci(
    '联邦理事处',
    'special',
    {
      resource: {
        orirock: 4,
        originium: 2
      },
      money: 17
    },
    []
  ),
  faci(
    '附属能源设施',
    'special',
    {
      resource: {
        orirock: 2,
        originium: 2,
        oriron: 3
      },
      money: 23
    },
    []
  )
]

export function buildFacilityIndex(data: FacilityData): FacilityIndex {
  const ret: FacilityIndex = {}
  for (const f of indexOnly) {
    ret[f.id] = f
  }
  for (const f of data) {
    ret[f.id] = f
  }
  return ret
}
