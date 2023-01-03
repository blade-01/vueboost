<script setup lang="ts">
useHead({
  title: 'About | About Vue-TS'
})
</script>

<template>
  <TheHeader />
  <div class="routes py-8">
    <div class="container">
      <h1 class="text-center text-3xl font-bold my-12">Forms Usage</h1>
      <SampleForm />
      <SampleTable class="mt-5" />
    </div>
  </div>
  <TheFooter />
</template>
