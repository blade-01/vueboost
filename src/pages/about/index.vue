<script setup lang="ts">
import { Icon } from '@iconify/vue'
useHead({
  title: 'About | About V'
})
</script>

<template>
  <div class="routes py-8">
    <div class="container">
      <h1 class="text-center text-3xl font-bold my-12">About</h1>
      <RouterLink to="/dashboard">
        <Icon icon="mdi:view-dashboard" />
      </RouterLink>
    </div>
  </div>
</template>
