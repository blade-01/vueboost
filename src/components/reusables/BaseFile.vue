<template>
  <!-- Base File -->
  <div>
    <label class="label-style" :for="label" v-if="label">{{ label }}</label>
    <input
      :id="label"
      type="file"
      :multiple="multiple"
      :placeholder="placeholder"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', multiple ? ($event.target as HTMLFormElement).files : ($event.target as HTMLFormElement).files[0])
        }
      }"
      class="input-style"
      :class="{ err: error }"
      :accept="fileType"
    />
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
interface Props {
  modelValue: string | number | object
  fileType: string
  label?: string
  placeholder?: string
  error?: string | boolean
  errorMessage?: string | boolean
  multiple?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped></style>
