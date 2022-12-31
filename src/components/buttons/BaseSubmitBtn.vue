<template>
  <button class="btn flex justify-center items-center">
    <div v-if="isLoading"></div>
    <span class="space-x-3" v-else>
      <span>{{ label }}</span>
      <span
        class="mdi mdi-chevron-down text-base font-bold"
        v-if="label === 'load more'"
      ></span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { useMainStore } from '../../store/main'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const isLoading = ref(false)
interface Props {
  label: string
}
defineProps<Props>()
</script>

<style lang="scss" scoped></style>
