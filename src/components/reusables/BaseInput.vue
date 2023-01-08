<template>
  <!-- Base Input (text, email, password) -->
  <div>
    <label class="label-style" :for="label" v-if="label">{{ label }}</label>
    <div class="relative">
      <input
        :id="label"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        v-bind="$attrs"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="input-style"
        :class="{ err: error }"
      />
      <span
        v-if="password"
        class="mdi absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
        :class="[
          type === 'password' ? 'mdi-eye' : 'mdi-eye-off',
          { 'err-message': error }
        ]"
        @click="$emit('changeType')"
      ></span>
    </div>
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
  type: string
  modelValue: string | number
  label?: string
  placeholder?: string
  password?: boolean
  error?: string | boolean
  errorMessage?: string | boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['changeType', 'update:modelValue'])
</script>

<style lang="scss" scoped></style>
