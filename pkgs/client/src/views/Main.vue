<script setup lang="ts">
import {
  type BusMessage,
  BusServerReducer,
  type GameInstanceInfo,
  GamePreset4,
  GameStateReducer
} from '@aknc/core'
import { shallowRef } from 'vue'

import Map from '@/components/Map/Map.vue'
import Support from '@/components/Support/Support.vue'

const game = new BusServerReducer(new GameStateReducer())
const state = shallowRef<GameInstanceInfo | null>(null)

function pushInput(msg: BusMessage) {
  game.handleInput(msg)
  state.value = game.state
}

pushInput({
  msg: 'game.begin',
  data: {
    cfg: GamePreset4
  }
})
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center" v-if="state">
    <div class="flex gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="1200"
        :height="1000"
        viewBox="0 0 1200 1000"
        class="shrink-0"
      >
        <g transform="translate(50 0)">
          <Map :data="state.map"></Map>
        </g>
      </svg>

      <Support :data="state.support"></Support>
    </div>
  </div>
</template>
