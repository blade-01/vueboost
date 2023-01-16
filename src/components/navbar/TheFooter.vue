<template>
  <footer>
    <div class="flex gap-3.5 justify-center items-center">
      <RouterLink to="/"><Icon icon="mdi:home" width="23" class="link" /></RouterLink>
      <div @click="toggleDark()" class="transition-all ease-linear duration-300">
        <Icon icon="mdi:weather-night" width="23" v-if="isDark" class="link" />
        <Icon icon="mdi:weather-sunny" width="23" v-else class="link" />
      </div>
      <Icon icon="mdi:translate" width="23" class="link" @click="toggleLocales" />
      <RouterLink to="/about"
        ><Icon icon="fluent:tab-desktop-multiple-20-regular" width="23" class="link"
      /></RouterLink>
      <a href="https://github.com/blade-01/vueboost" target="_blank"
        ><Icon icon="mdi:github" width="23" class="link"
      /></a>
    </div>
    <aside class="text-center mt-5">
      <p class="font-light text-sm">
        Inspired by
        <a href="https://vitesse.netlify.app" target="_blank" class="underline"
          >Vitesse</a
        >
      </p>
    </aside>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<style scoped>
.link {
  @apply cursor-pointer transition-colors hover:text-[#344675];
}
</style>
