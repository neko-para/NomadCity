import type { EventData, EventIndex as EventHeap, EventInfo } from '../types'

export const Event3: EventData = [
  {
    type: 'orange',
    resource: 'oriron',
    name: '异铁开采权',
    comment: '',
    choice: [
      {
        comment: '',
        effect: [
          {
            type: 'get resource',
            target: 'self',
            resource: {
              orirock: 3,
              oriron: 1
            }
          }
        ]
      },
      {
        comment: '',
        effect: [
          {
            type: 'get resource',
            target: 'self',
            resource: {
              money: 13
            }
          },
          {
            type: 'get resource',
            target: 'others',
            resource: {
              oriron: 1
            }
          }
        ]
      }
    ]
  }
]

export const Event4: EventData = [
  ...Event3,
  {
    type: 'orange',
    resource: 'oriron',
    name: '敌对生态圈',
    comment: '',
    choice: [
      {
        comment: '',
        effect: [
          {
            type: 'get resource',
            target: 'self',
            resource: {
              oriron: 3
            }
          }
        ]
      },
      {
        comment: '',
        effect: [
          {
            type: 'get resource',
            target: 'self',
            resource: {
              orirock: 2,
              score: 1
            }
          }
        ]
      }
    ]
  }
]

export function buildEventHeap(data: EventData): EventHeap {
  const ret: EventHeap = {
    green: [],
    orange: [],
    red: []
  }
  for (const e of data) {
    ret[e.type].push(e)
  }
  return ret
}
