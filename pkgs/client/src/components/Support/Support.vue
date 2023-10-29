<script setup lang="ts">
import type { SupportInstanceInfo } from '@aknc/core'
import { NCard } from 'naive-ui'

import { FacilityColors } from '@/config'

defineProps<{
  data: SupportInstanceInfo
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <NCard title="供应堆" size="small">
      <div class="flex flex-col gap-2">
        <span> 源石: {{ data.originite_prime }} </span>
        <span> 金券: {{ data.money }} </span>
      </div>
    </NCard>
    <NCard title="设施" size="small">
      <div class="grid grid-cols-3 gap-1">
        <template v-for="(info, idx) of data.active_facilities" :key="idx">
          <NCard
            :title="info.id"
            size="small"
            :theme-overrides="{ color: '#EFEFEF', borderColor: FacilityColors[info.type] }"
          >
          </NCard>
        </template>
      </div>
    </NCard>
    <NCard title="城市样式" size="small">
      <div class="grid grid-cols-2 gap-1">
        <template v-for="(info, idx) of data.city_styles" :key="idx">
          <NCard :title="info.info.name" size="small" :theme-overrides="{ color: '#EFEFEF' }">
            <div class="grid grid-cols-2 h-full">
              <div class="flex flex-col justify-center">
                <div
                  class="grid gap-0.5 shrink-0"
                  :style="`grid-template-columns: repeat(${
                    info.info.requirement[0]!.length
                  }, min-content)`"
                >
                  <template v-for="(row, idx) of info.info.requirement" :key="idx">
                    <template v-for="(clr, idx) of row" :key="idx">
                      <div class="w-3 h-3" v-if="!clr"></div>
                      <div
                        class="w-3 h-3"
                        v-else-if="clr.length === 1"
                        :style="`background-color: ${FacilityColors[clr[0]!]}`"
                      ></div>
                      <div class="w-3 h-3 flex" v-else-if="clr.length === 2">
                        <div
                          class="w-1.5 h-3"
                          :style="`background-color: ${FacilityColors[clr[0]!]}`"
                        ></div>
                        <div
                          class="w-1.5 h-3"
                          :style="`background-color: ${FacilityColors[clr[1]!]}`"
                        ></div>
                      </div>
                      <div class="w-3 h-3" v-else></div>
                    </template>
                  </template>
                </div>
              </div>
              <div class="grid gap-0.5" style="grid-template-columns: 48px auto">
                <template v-for="(state, idx) of info.state" :key="idx">
                  <span> {{ info.info.state[idx] }} </span>
                  <span> {{ state.join(',') }} </span>
                </template>
              </div>
            </div>
            <!-- {{ info }} -->
          </NCard>
        </template>
      </div>
    </NCard>
  </div>
</template>
