import type { Effect } from '.'
import type { ResourceType } from './resource'

export type EventType = 'red' | 'orange' | 'green'

export type EventInfo = {
  type: EventType
  resource: ResourceType
  name: string
  comment: string
  choice: {
    comment: string
    effect: Effect[]
  }[]
}

export type EventData = EventInfo[]

export type EventIndex = Record<EventType, EventInfo[]>
