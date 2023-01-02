<template>
  <div class="input-field">
    <label class="label-style" :for="label" v-if="label">{{ label }}</label>
    <QuillEditor
      :id="label"
      theme="snow"
      toolbar="full"
      :placeholder="`'${placeholder}'`"
      :value:content="modelValue"
      contentType="html"
      :readOnly="readOnly"
      style="height: 200px"
      @om-input="$emit('update:modelValue')"
      @update:content="$emit('update:modelValue')"
      :class="{ err: error }"
    />
    this.editor.getText() ? this.editor.root.innerHTML : ''
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
  label?: string
  placeholder?: string
  error?: string | boolean
  errorMessage?: string | boolean
  readOnly?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped></style>
