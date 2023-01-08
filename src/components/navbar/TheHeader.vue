<template>
  <header class="flex flex-col justify-center items-center text-center">
    <Icon icon="mdi:home-battery-outline" width="70" />
    <p class="text-sm font-light mt-3">{{ $t('title') }}</p>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scoped></style>
