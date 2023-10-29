import type {
  MapChannelId,
  MapChannelInfo,
  MapData,
  MapIndex,
  MapRegionId,
  MapResptId,
  MapResptInfo,
  MapResptType
} from '../types'

function respt(
  x: number,
  y: number,
  id: string,
  type: MapResptType,
  region: string,
  edge: string[]
): MapResptInfo {
  return {
    pos: [x, y],
    edge: edge as MapChannelId[],
    id: id as MapResptId,
    type,
    region: region as MapRegionId
  }
}

function channel(
  x: number,
  y: number,
  id: string,
  region: string,
  infl: number,
  edge: string[]
): MapChannelInfo {
  return {
    pos: [x, y],
    edge: edge as MapResptId[],
    id: id as MapChannelId,
    region: region as MapRegionId,
    influence_slot: infl
  }
}

export const Map4: MapData = {
  respt: [
    respt(873, 207, 'A-01', 'green', 'A', ['A-1', 'R-1', 'R-2']),
    respt(867, 423, 'A-02', 'green', 'A', ['A-1', 'A-2', 'B-1', 'R-6']),
    respt(708, 454, 'A-03', 'orange', 'A', ['A-2', 'D-1']),
    respt(952, 635, 'B-01', 'green', 'B', ['B-2', 'R-2', 'R-6']),
    respt(832, 744, 'B-02', 'green', 'B', ['B-1', 'B-2', 'C-2']),
    respt(666, 671, 'B-03', 'orange', 'B', ['A-2', 'C-2', 'R-7']),
    respt(834, 909, 'C-01', 'green', 'C', ['B-2', 'C-2']),
    respt(428, 830, 'C-02', 'orange', 'C', ['C-1', 'C-2']),
    respt(75, 788, 'C-03', 'orange', 'C', ['C-1', 'E-2', 'R-3']),
    respt(710, 314, 'D-01', 'orange', 'D', ['D-1', 'R-1']),
    respt(547, 260, 'D-02', 'orange', 'D', ['D-1', 'D-2', 'F-1']),
    respt(567, 469, 'D-03', 'orange', 'D', ['D-1', 'D-2', 'R-7']),
    respt(553, 747, 'E-01', 'orange', 'E', ['E-1', 'R-7']),
    respt(303, 679, 'E-02', 'red', 'E', ['E-1', 'E-2']),
    respt(143, 580, 'E-03', 'red', 'E', ['E-2', 'R-4', 'R-5']),
    respt(293, 309, 'F-01', 'red', 'F', ['F-1', 'F-2', 'F-3']),
    respt(362, 507, 'F-02', 'red', 'F', ['D-2', 'E-1', 'F-3', 'R-5']),
    respt(125, 373, 'F-03', 'red', 'F', ['F-2', 'R-4']),
    respt(753, 95, 'G-01', 'green', 'G', ['R-1', 'R-2']),
    respt(470, 120, 'G-02', 'orange', 'G', ['G-1', 'R-1']),
    respt(85, 69, 'G-03', 'orange', 'G', ['G-1', 'G-2', 'R-3']),
    respt(279, 188, 'G-04', 'red', 'G', ['G-2', 'F-2'])
  ],
  channel: [
    channel(887, 354, 'A-1', 'A', 1, ['A-01', 'A-02']),
    channel(760, 604, 'A-2', 'A', 2, ['A-02', 'A-03', 'B-03']),
    channel(846, 651, 'B-1', 'B', 1, ['A-02', 'B-02']),
    channel(973, 871, 'B-2', 'B', 2, ['B-01', 'B-02', 'C-01']),
    channel(305, 857, 'C-1', 'C', 1, ['C-02', 'C-03']),
    channel(715, 859, 'C-2', 'C', 2, ['B-02', 'B-03', 'C-01', 'C-02']),
    channel(624, 394, 'D-1', 'D', 2, ['A-03', 'D-01', 'D-02', 'D-03']),
    channel(484, 443, 'D-2', 'D', 2, ['D-02', 'D-03', 'F-02']),
    channel(479, 694, 'E-1', 'E', 2, ['E-01', 'E-02', 'F-02']),
    channel(190, 718, 'E-2', 'E', 2, ['C-03', 'E-02', 'E-03']),
    channel(459, 298, 'F-1', 'F', 2, ['D-01', 'F-01']),
    channel(176, 309, 'F-2', 'F', 2, ['F-01', 'F-03', 'G-04']),
    channel(324, 439, 'F-3', 'F', 2, ['F-01', 'F-02']),
    channel(329, 83, 'G-1', 'G', 1, ['G-02', 'G-03']),
    channel(165, 237, 'G-2', 'G', 1, ['G-03', 'G-04']),
    channel(745, 230, 'R-1', 'R', 2, ['A-01', 'D-01', 'G-01', 'G-02']),
    channel(1001, 350, 'R-2', 'R', 2, ['A-01', 'B-01', 'G-01']),
    channel(66, 450, 'R-3', 'R', 1, ['C-03', 'G-03']),
    channel(156, 506, 'R-4', 'R', 1, ['E-03', 'F-03']),
    channel(286, 557, 'R-5', 'R', 1, ['E-03', 'F-02']),
    channel(951, 559, 'R-6', 'R', 1, ['A-02', 'B-01']),
    channel(608, 619, 'R-7', 'R', 2, ['B-03', 'D-03', 'E-01'])
  ]
}

export function buildMapIndex(data: MapData): MapIndex {
  const ret: MapIndex = {
    respt: {},
    channel: {}
  }
  for (const r of data.respt) {
    ret.respt[r.id] = r
  }
  for (const c of data.channel) {
    ret.channel[c.id] = c
  }
  return ret
}
