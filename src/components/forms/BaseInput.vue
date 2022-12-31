<template>
  <!-- Textarea, text, email, password, file -->
  <div v-if="type === 'textarea'">
    <label class="label-style" :for="label" v-if="label">{{ label }}</label>
    <textarea
      name="textarea"
      :id="label"
      cols="30"
      rows="10"
      v-bind="$attrs"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="border-solid border-gray-300 border-2 outline-none rounded-xl flex items-center py-3 px-4 focus:border-gray-600 w-full transition-all duration-200 ease-in-out disabled:rounded-xl disabled:border disabled:border-gray-300 disabled:bg-gray-50 disabled:p-4 disabled:py-6 placeholder:capitalize" 
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
  <div v-else-if="type === 'file'">
    <label class="label-style" :for="label" v-if="label">{{ label }}</label>
    <input
      :id="label"
      :type="type"
      :placeholder="placeholder"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', ($event.target as HTMLFormElement).files[0])
        }
      }"
      class="input-style"
      :class="{ err: error }"
      
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
  <div v-else>
    <label class="label-style" :for="label" v-if="label">{{ label }}</label>
    <div class="relative">
      <input
        :id="label"
        :type="type"
        :value="modelValue"
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
  modelValue: string | number | object
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
