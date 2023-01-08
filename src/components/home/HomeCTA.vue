<template>
  <form
    @submit.prevent
    class="flex flex-col justify-center items-center gap-3 text-center"
  >
    <BaseInput
      required
      type="text"
      v-model="name"
      :placeholder="$t('placeholder')"
      class="text-center"
    />
    <BaseButton :label="$t('go')" class="px-6" />
  </form>
</template>

<script setup lang="ts">
const name = ref<string>('')
</script>

<style scoped></style>
