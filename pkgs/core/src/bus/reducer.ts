import type { BusMessage } from './msg'
import type { BusServerProcessor, BusServerSlaveProcessor } from './type'

export class BusServerReducer<State, Id extends number | string> {
  state: State | null
  master: BusServerProcessor<State, Id>
  slaves: Partial<Record<Id, BusServerSlaveProcessor<State, Id>>>

  constructor(master: BusServerProcessor<State, Id>) {
    this.state = null
    this.master = master
    this.slaves = {}
  }

  handleInput(msg: BusMessage) {
    const st = this.master.handleInput(this.state, msg, this)
    if (st !== null) {
      this.state = st
    }
    for (const id in this.slaves) {
      const slave = this.slaves[id]!
      slave.handleInput(this.state, msg, id)
    }
  }

  addSlave(slave: BusServerSlaveProcessor<State, Id>, id: Id): boolean {
    if (id in this.slaves) {
      return false
    }
    this.slaves[id] = slave
    return true
  }
}
