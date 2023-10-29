import type { BusMessage, BusServerSlaveProcessor } from '../bus'
import type { GameInstanceInfo } from '../types'

export class PlayerStateReducer implements BusServerSlaveProcessor<GameInstanceInfo, number> {
  handleInput(state: GameInstanceInfo | null, msg: BusMessage, id: number): void {
    // throw new Error('Method not implemented.')
  }
}
