import type { ResourceType } from '.'

export type GetResourceEffect = {
  type: 'get resource'
  target: 'self' | 'others' | 'all' | 'select'
  resource: Partial<Record<ResourceType | 'money' | 'score', number>>
}

export type Effect = GetResourceEffect
