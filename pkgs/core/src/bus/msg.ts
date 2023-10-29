import type { GamePresetConfig, PlayerId } from '../types'

export type BusMessageDeclaration = {
  'game.begin': {
    cfg: GamePresetConfig
  }
  'game.end': {}

  'setup.public': {}
  'setup.player': {
    player: PlayerId
  }

  'enter.begin': {}
  'enter.end': {}
  'enter.player': {
    player: PlayerId
  }

  'round.start': {
    round: PlayerId
  }
  'round.end': {
    round: PlayerId
  }
  'round.select-operator.start': {}
  'round.select-operator.end': {}
  'round.select-operator.player': {
    player: PlayerId
  }
  'round.action.start': {}
  'round.action.end': {}
  'round.action.player.begin': {
    player: PlayerId
  }
  'round.action.player.end': {
    player: PlayerId
  }
  'round.action.player.fast': {
    player: PlayerId
  }
  'round.harvest.begin': {}
  'round.harvest.end': {}
  'round.harvest.player': {
    player: PlayerId
  }
  'round.finish.begin': {}
  'round.finish.end': {}
  'round.finish.operator-effect': {
    player: PlayerId
  }
  'round.finish.update-city-style': {}
}

export type BusMessageKey = keyof BusMessageDeclaration

export type BusMessage<T extends BusMessageKey = BusMessageKey> = T extends unknown
  ? {
      msg: T
      data: BusMessageDeclaration[T]
    }
  : never
