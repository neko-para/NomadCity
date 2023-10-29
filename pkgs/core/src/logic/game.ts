import type { BusMessage, BusServerProcessor } from '../bus'
import type { BusServerReducer } from '../bus/reducer'
import {
  CityStyles,
  Event4,
  Facilities,
  Map4,
  buildCityStyleArea,
  buildEventHeap,
  buildFacilityIndex,
  buildMapIndex
} from '../data'
import type { FacilityId, GameInstanceInfo, GamePresetConfig, PlayerId } from '../types'
import { PlayerStateReducer } from './player'

export const GamePreset4: GamePresetConfig = {
  player: 4,

  map: Map4,
  event: Event4,
  facility: Facilities,
  city_style: CityStyles,

  money_init: [10, 12, 14, 18]
}

export class GameStateReducer implements BusServerProcessor<GameInstanceInfo, number> {
  handleInput(
    state: GameInstanceInfo | null,
    msg: BusMessage,
    ctrl: BusServerReducer<GameInstanceInfo, number>
  ): GameInstanceInfo | null {
    switch (msg.msg) {
      case 'game.begin': {
        const cfg = msg.data.cfg
        for (let i = 0; i < cfg.player; i++) {
          ctrl.addSlave(new PlayerStateReducer(), i)
        }
        const facis = [...cfg.facility]
        // shuffle
        const active_facis = facis.splice(0, 6)
        return {
          round: 0,
          active_player: 0 as PlayerId,

          map: buildMapIndex(cfg.map),
          facility: buildFacilityIndex(cfg.facility),

          support: {
            events: buildEventHeap(cfg.event),

            facilities: facis,
            active_facilities: active_facis,

            city_styles: buildCityStyleArea(cfg.city_style),

            originite_prime: 35,
            money: 1000 // TODO: 看看规则书
          },

          player: Array.from({ length: cfg.player }, (_, i) => ({
            id: i as PlayerId,
            point: 0,
            facilities: [
              [null, null, null],
              [null, null, null],
              [
                null,
                {
                  id: '核心控制塔' as FacilityId,
                  used: false
                },
                null
              ],
              [null, null, null]
            ],
            money: cfg.money_init[i]!,
            resource: {
              orirock: 0,
              oriron: 0,
              originium: 0,
              originite_prime: 0
            },
            rest_influence: 30 - 1, // 有一个影响力放到计分板上去了,

            rest_operator: [],
            used_operator: []
          }))
        }
      }
    }
    throw new Error('Method not implemented.')
  }
}
