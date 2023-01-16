<template>
  <!-- Base Phone -->
  <div class="md:col-span-2">
    <label class="label-style" :for="label" v-if="label">{{ label }}</label>
    <vue-tel-input
      id="phoneNumber"
      :modelValue="modelValue"
      v-bind="$attrs"
      :class="{ err: error }"
      :autoFormat="false"
      :placeholder="placeholder"
      @validate="handleValidation"
      @on-input="$emit('update:modelValue', $event)"
    ></vue-tel-input>
    <small
      :class="{ 'err-message': error }"
      v-if="error && errorMessage"
      aria-live="assertive"
      :id="`${label}-error`"
      >{{ errorMessage }}</small
    >
    <small
      :class="{ 'err-message': error }"
      v-else-if="error && !errorMessage"
      aria-live="assertive"
      :id="`${label}-error`"
      >{{ label }} is required</small
    >
  </div>
</template>

<script setup lang="ts">
import { VueTelInput } from 'vue-tel-input'
interface Props {
  modelValue: string | number
  label?: string
  placeholder?: string
  error?: string | boolean
  errorMessage?: string | boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['handleValidation', 'update:modelValue'])

const handleValidation = ($event: Event): void => {
  emit('handleValidation', $event)
}
</script>

<style scoped>
:deep(.vue-tel-input) {
  @apply border-solid border-gray-300 border outline-none rounded-[4px] h-[42px] flex items-center py-3 px-4 focus:border-gray-600 w-full transition-all duration-200 ease-in-out disabled:rounded-[4px] disabled:border disabled:border-gray-300 disabled:bg-gray-50 disabled:p-4 disabled:py-6 placeholder:capitalize;
}
:deep(.vti__dropdown-list) {
  z-index: 10;
}
:deep(.vti__input) {
  @apply bg-transparent;
}
</style>
