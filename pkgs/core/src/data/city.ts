import type { CityStyleArea, CityStyleData } from '../types'

export const CityStyles: CityStyleData = [
  {
    name: '源石工业中枢',
    type: 'purple',
    requirement: [
      [['blue'], null, null],
      [['red'], ['blue'], null],
      [['yellow'], ['yellow'], ['yellow']]
    ],
    state: ['2', '已使用', '1', '已使用', '0']
  },
  {
    name: '高效移动管理体系',
    type: 'purple',
    requirement: [
      [['yellow'], null, null],
      [['red'], ['yellow'], null],
      [['blue'], ['blue'], ['red']]
    ],
    state: ['2', '已使用', '1', '已使用', '0']
  },
  {
    name: '军工化区域',
    type: 'green',
    requirement: [[['blue', 'yellow'], ['red']]],
    state: ['未使用', '已使用']
  },
  {
    name: '物资中继站',
    type: 'green',
    requirement: [[['blue', 'red'], ['yellow']]],
    state: ['已宣告']
  },
  {
    name: '动员配套体系',
    type: 'green',
    requirement: [[['yellow'], ['yellow'], ['red']]],
    state: ['未使用', '已使用']
  },
  {
    name: '物资中继站',
    type: 'green',
    requirement: [
      [['yellow'], null],
      [['red'], ['yellow']]
    ],
    state: ['未使用', '已使用']
  }
]

export function buildCityStyleArea(data: CityStyleData): CityStyleArea {
  return data.map(info => {
    return {
      info,
      state: Array.from({ length: info.state.length }, () => [])
    }
  })
}
