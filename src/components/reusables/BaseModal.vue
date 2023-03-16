<template>
  <Teleport to="body">
    <div
      class="fixed top-0 left-0 w-screen h-screen bg-[rgb(0,0,0,0.1)] flex justify-center items-center z-50"
      @click.self="$emit('openModal', false)"
      v-show="isActive"
    >
      <Transition :name="side ? 'slide' : 'zoom'">
        <div
          v-if="isActive"
          class="absolute z-50 shadow-xl bg-white dark:bg-darkBgSec"
          :class="[
            side
              ? 'top-0 right-0 w-full md:max-w-[428px] h-screen overflow-y-auto pb-8'
              : 'flex justify-center items-center text-center flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-11/12 max-w-[523px] after:max-h-[531px] py-8 px-6',
            customClass
          ]"
        >
          <slot></slot>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ isActive: boolean; side?: boolean; customClass?: string }>()
defineEmits(['openModal'])
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all ease-in-out 0.3s;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.zoom-enter-active,
.zoom-leave-active {
  transition: transform ease-in-out 0.3s;
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0);
}
</style>
