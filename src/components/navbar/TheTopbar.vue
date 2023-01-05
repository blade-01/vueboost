<template>
  <div class="flex items-center main sticky-top w-full h-[60px] z-50 shadow-sm bg-white">
    <div class="p-4 w-full">
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center gap-2">
          <span
            class="mdi mdi-menu text-3xl font-bold cursor-pointer"
            @click="$emit('toggleSidebar')"
          ></span>
          <p>Dashboard</p>
        </div>
        <div class="flex items-center gap-4">
          <span class="mdi mdi-magnify text-2xl cursor-pointer"></span>
          <span class="mdi mdi-bell-outline text-2xl cursor-pointer"></span>
          <div class="flex gap-2 items-center cursor-pointer">
            <img
              v-lazy="'https://avatars.githubusercontent.com/u/47092407?v=4'"
              alt="illustration_01"
              class="w-10 h-10 border-2 border-primary rounded-full"
            />
            <p class="hidden md:flex">Blade</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['toggleSidebar'])
</script>

<style scoped></style>
