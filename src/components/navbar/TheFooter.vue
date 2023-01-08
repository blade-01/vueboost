<template>
  <footer class="flex gap-3.5 items-center">
    <div @click="switchTheme" class="transition-all ease-linear duration-300">
      <Icon
        icon="mdi:weather-sunny"
        width="23"
        v-if="colorMode === 'light'"
        class="link"
      />
      <Icon icon="mdi:weather-night" width="23" v-else class="link" />
    </div>
    <Icon icon="mdi:translate" width="23" class="link" @click="toggleLocales" />
    <RouterLink to="/about"
      ><Icon icon="mdi:information-outline" width="23" class="link"
    /></RouterLink>
    <a href="https://github.com/blade-01" target="_blank"
      ><Icon icon="mdi:github" width="23" class="link"
    /></a>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
const { colorMode, switchTheme } = useThemeSwitch()
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
