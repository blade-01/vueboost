<template>
  <div class="input-field">
    <label class="label-style" :for="label" v-if="label">{{ label }}</label>
    <QuillEditor
      ref="quill"
      :id="label"
      theme="snow"
      toolbar="full"
      :placeholder="`'${placeholder}'`"
      v-model:content="content"
      contentType="html"
      :readOnly="readOnly"
      style="height: 200px"
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
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number
  label?: string
  placeholder?: string
  error?: string | boolean
  errorMessage?: string | boolean
  readOnly?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits({
  'update:modelValue': (value) => true
})

const content = ref('')
const quill = ref<any>(null)
let newContent = ''

watch(content, (newValue) => {
  newContent = newValue
  emit('update:modelValue', newValue)
})

watch(
  () => props.modelValue,
  (newValue: any) => {
    if (newContent === newValue) return
    quill.value.setHTML(newValue)

    // Workaround https://github.com/vueup/vue-quill/issues/52
    // move cursor to end
    nextTick(() => {
      let q = quill.value.getQuill()
      q.setSelection(newValue.length, 0, 'api')
      q.focus()
    })
  }
)
</script>

<style scoped>
:deep(.ql-tooltip) {
  display: none;
}
</style>
