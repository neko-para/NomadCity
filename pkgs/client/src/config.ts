import type { EventType, FacilityColor, FacilityType } from '@aknc/core'

export const RegionColors: Record<string, string> = {
  A: 'dodgerblue',
  B: 'orange',
  C: 'paleturquoise',
  D: 'mediumpurple',
  E: 'yellowgreen',
  F: 'crimson',
  G: 'darkgreen',

  R: '#99FFFF'
}

export const EventColors: Record<EventType, string> = {
  green: 'greenyellow',
  orange: 'orange',
  red: 'red'
}

export const FacilityColors: Record<FacilityType, string> = {
  red: 'crimson',
  blue: 'dodgerblue',
  yellow: 'gold',
  special: 'black'
}
