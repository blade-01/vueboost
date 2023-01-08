<script setup lang="ts">
import { Icon } from '@iconify/vue'
useHead({
  title: 'About | About V'
})
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-10 text-center h-screen px-4">
    <Icon icon="mdi:run" width="70" />
    <h1 class="text-center text-3xl font-bold my-12">About V</h1>
    <TheFooter />
  </div>
</template>
