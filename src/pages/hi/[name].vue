<template>
  <div class="flex flex-col justify-center items-center gap-5 text-center h-screen px-4">
    <div class="flex flex-col gap-2 items-center text-center">
      <Icon icon="mdi:run-fast" width="70" />
      <h1 class="text-center font-medium">Hi, {{ name }}! 👋</h1>
      <p class="text-sm font-light">{{$t('dynamic')}}</p>
    </div>
    <BaseButton :label="$t('back')" class="px-6 h-[35px]" @click="goBack" />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
interface Props {
  name: string
}
const props = defineProps<Props>()
useHead({
  title: `Hi, ${props.name}`
})
const router = useRouter()
const goBack = (): void => router.go(-1)
</script>

<style scoped></style>
