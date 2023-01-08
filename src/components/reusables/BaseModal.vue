<template>
  <Teleport to="body">
    <Transition name="zoom">
      <div
        class="fixed top-0 left-0 w-screen h-screen bg-[rgb(0,0,0,0.1)] flex justify-center items-center z-50"
        @click.self="$emit('openModal', false)"
        v-if="isActive"
      >
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl bg-white dark:bg-darkBgSec py-8 px-6 w-11/12 md:w-[360px] flex justify-center items-center text-center flex-col rounded-lg"
        >
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ isActive: boolean }>()
defineEmits(['openModal'])
</script>

<style scoped>
.zoom-enter-active,
.zoom-leave-active {
  transition: transform ease-in-out 0.3s;
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0);
}
</style>
