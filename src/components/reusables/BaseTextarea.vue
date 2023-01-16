<template>
  <!-- Base Textarea -->
  <div>
    <label class="label-style" :for="label" v-if="label">{{ label }}</label>
    <textarea
      name="textarea"
      :id="label"
      cols="30"
      rows="10"
      v-bind="$attrs"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="input-style textarea-style" 
      :class="{ err: error }"
      
    ></textarea>
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
  modelValue: string | number
  label?: string
  placeholder?: string
  error?: string | boolean
  errorMessage?: string | boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped></style>
