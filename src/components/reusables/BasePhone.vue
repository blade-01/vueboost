<template>
  <!-- Base Phone - WIP -->
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

<style scoped></style>
