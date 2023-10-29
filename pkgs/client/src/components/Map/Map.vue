<script setup lang="ts">
import type { MapIndex } from '@aknc/core'

import Channel from './Channel.vue'
import ResourcePoint from './ResourcePoint.vue'

defineProps<{
  data: MapIndex
}>()
</script>

<template>
  <rect x="0" y="0" width="1100" height="1000" fill="wheat" stroke="black"></rect>
  <g transform="translate(0 -50)">
    <template v-for="info of data.respt" :key="info.id">
      <template v-for="to of info.edge" :key="to">
        <line
          :x1="info.pos[0] + 65"
          :y1="info.pos[1] + 55"
          :x2="data.channel[to]!.pos[0] + 30"
          :y2="data.channel[to]!.pos[1] + 20"
          stroke="white"
          stroke-width="10"
        ></line>
      </template>
    </template>
    <template v-for="info of data.respt" :key="info.id">
      <ResourcePoint :info="info"></ResourcePoint>
    </template>
    <template v-for="info of data.channel" :key="info.id">
      <Channel :info="info"></Channel>
    </template>
  </g>
</template>
