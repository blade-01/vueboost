<template>
  <button class="btn" :class="{ 'flex items-center gap-2': iconLeft || iconRight }">
    <Icon :icon="`mdi:${iconLeft}`" :width="leftSize" v-if="iconLeft" />
    <span v-if="label">{{ label }}</span>
    <Icon :icon="`mdi:${iconRight}`" :width="rightSize" v-if="iconRight" />
  </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
defineProps<{
  label: string
  iconLeft?: boolean | string | 'emoticon-sad'
  iconRight?: boolean | string | 'emoticon-sad'
  leftSize?: number
  rightSize?: number
}>()
</script>

<style lang="scss" scoped></style>
