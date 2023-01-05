<template>
  <div class="relative">
    <TheSidebar />
    <main :class="[activeSidebar ? 'active-mainbar' : 'sidebar-wrapper']" id="mainbar">
      <div class="relative">
        <TheTopbar />
        <div class="p-8">
          <slot></slot>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const { activeSidebar } = useMainStore()
</script>

<style scoped>
.sidebar-wrapper {
  @apply bg-gray-50 w-full md:ml-[260px] md:w-[calc(100%-260px)] md:float-right;
}
.active-mainbar {
  @apply md:ml-0 md:w-full;
}
</style>
