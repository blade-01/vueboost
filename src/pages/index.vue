<script setup lang="ts">
useHead({
  title: 'Vue Boost',
  meta: [{ name: 'description', content: 'Boost your productivity with Vue Boost - work smarter, not harder.' }],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }
  ]
})
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-10 text-center h-screen px-4">
    <TheHeader />
    <HomeCTA />
    <TheFooter />
  </div>
</template>
