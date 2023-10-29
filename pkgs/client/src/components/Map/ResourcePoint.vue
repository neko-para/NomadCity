<script setup lang="ts">
import type { MapResptInfo } from '@aknc/core'

import { EventColors, RegionColors } from '@/config'

defineProps<{
  info: MapResptInfo
}>()
</script>

<template>
  <g id="respt" :transform="`translate(${info.pos[0]} ${info.pos[1]})`">
    <rect x="0" y="0" width="50" height="50" fill="gray"></rect>
    <rect x="50" y="0" width="60" height="10" :fill="RegionColors[info.region]"></rect>
    <rect x="50" y="10" width="60" height="90" fill="darkgray"></rect>
    <rect x="20" y="50" width="30" height="50" :fill="RegionColors[info.region]"></rect>

    <circle cx="25" cy="25" r="10" :stroke="EventColors[info.type]" fill="none"></circle>

    <!-- <a style="fill:g"></a> -->

    <text x="80" y="10" fill="white" text-anchor="middle" font-size="small">
      {{ info.id }}
    </text>
  </g>
</template>
