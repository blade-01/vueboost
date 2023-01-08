<template>
  <BaseModal :is-active="isActive" @open-modal="openModal">
    <div class="flex justify-between items-center w-full">
      <p class="title">Hello there</p>
      <span class="icon text-red-400 hover:bg-red-200 mdi mdi-close" @click="openModal(false)"></span>
    </div>
  </BaseModal>
  <button class="btn" @click="openModal(true)">Open Modal</button>
</template>

<script setup lang="ts">
const { isActive, openModal } = useModal()
</script>

<style scoped></style>
