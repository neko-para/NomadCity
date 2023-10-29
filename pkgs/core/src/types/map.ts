import type { EventType } from './event'
import type { PlayerId } from './player'
import type { Point } from './render'
import type { ResourceType } from './resource'

export type MapNodeType = 'channel' | 'respt'

export type MapResptId = string & { __brand: 'resource point id' }
export type MapChannelId = string & { __brand: 'channel id' }

export type MapResptType = EventType

export type MapRegionId = string & { __brand: 'region id' }

export type MapResptInfo = {
  pos: Point
  edge: MapChannelId[]
  id: MapResptId
  type: MapResptType
  region: MapRegionId
}

export type MapChannelExtendType = 'channel' | 'road'

export type MapChannelInfo = {
  pos: Point
  edge: MapResptId[]
  id: MapChannelId
  region: MapRegionId
  influence_slot: number
}

export type MapResptInstanceInfo = {
  info: MapResptInfo
  resource?: ResourceType
  city?: PlayerId
  influences: (PlayerId | null)[]
}

export type MapChannelInstanceInfo = {
  info: MapChannelInfo
  extend: MapChannelExtendType
  influences: (PlayerId | null)[]
}

export type MapData = {
  respt: MapResptInfo[]
  channel: MapChannelInfo[]
}

export type MapIndex = {
  respt: Record<MapResptId, MapResptInfo>
  channel: Record<MapChannelId, MapChannelInfo>
}
