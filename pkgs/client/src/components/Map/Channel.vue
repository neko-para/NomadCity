<script setup lang="ts">
import type { MapChannelInfo } from '@aknc/core'

import { RegionColors } from '@/config'

defineProps<{
  info: MapChannelInfo
}>()
</script>

<template>
  <g id="respt" :transform="`translate(${info.pos[0]} ${info.pos[1]})`">
    <rect x="0" y="3" width="65" height="10" fill="darkgray"></rect>
    <rect x="0" y="13" width="15" height="12" :fill="RegionColors[info.region]"></rect>
    <rect x="15" y="13" width="50" height="22" :fill="RegionColors[info.region]"></rect>
    <polygon points="0,0 -15,26 15,26" :fill="RegionColors[info.region]" stroke="black"></polygon>

    <text x="40" y="13" fill="white" text-anchor="middle" font-size="small">{{ info.region }}</text>
  </g>
</template>
