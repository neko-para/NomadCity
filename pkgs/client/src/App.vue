<script setup lang="ts">
import { NMessageProvider, NNotificationProvider } from 'naive-ui'

import Main from '@/views/Main.vue'
</script>

<template>
  <NMessageProvider>
    <NNotificationProvider placement="bottom-right">
      <Main></Main>
    </NNotificationProvider>
  </NMessageProvider>
</template>
