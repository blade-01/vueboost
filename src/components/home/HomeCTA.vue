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
    <BaseButton :label="$t('go')" class="px-6 h-[35px]" @click="reRoute" />
  </form>
</template>

<script setup lang="ts">
const name = ref<string>('')
const router = useRouter()
const reRoute = (): void => {
  if (name.value) {
    router.push(`/hi/${encodeURIComponent(name.value)}`)
  }
}
</script>

<style scoped></style>
