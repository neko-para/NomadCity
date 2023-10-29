import type { BusMessage } from './msg'
import type { BusServerReducer } from './reducer'

export interface BusClientInputter {
  registerInputHandler(handler: (msg: BusMessage) => Promise<void>): void
  clearInputHandler(): void
}

export interface BusServerProcessor<State, Id extends number | string> {
  handleInput(state: State | null, msg: BusMessage, ctrl: BusServerReducer<State, Id>): State | null
}

export interface BusServerSlaveProcessor<State, Id extends number | string> {
  handleInput(state: State | null, msg: BusMessage, id: Id): void
}

export interface BusClientRenderer<State> {
  updateState(state: State): void
}
