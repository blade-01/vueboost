<script setup lang="ts">
import { Icon } from '@iconify/vue'
useHead({
  title: 'About Vue Boost',
  meta: [
    {
      name: 'description',
      content: 'Boost your productivity with Vue Boost - work smarter, not harder.'
    }
  ]
})
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5 text-center h-screen px-4">
    <div class="flex flex-col gap-2 items-center text-center">
      <Icon icon="fluent:tab-desktop-multiple-20-regular" width="70" />
      <h1 class="text-center font-medium text-2xl">About</h1>
      <p class="font-light max-w-[780px] text-left text-lg">
        <a
          href="https://github.com/blade-01/vueboost"
          target="_blank"
          class="underline font-light"
          >Vue Boost</a
        >
        is an opinionated
        <a
          href="https://github.com/vitejs/vite"
          target="_blank"
          class="underline font-light"
          >Vite</a
        >
        starter template inspired by
        <a
          href="https://github.com/antfu/vitesse"
          target="_blank"
          class="underline font-light"
          >Vitesse</a
        >
        and made by
        <a href="https://github.com/blade-01" target="_blank" class="underline font-light"
          >@blade-01</a
        >
        for mocking apps swiftly. With
        <strong
          >file-based routing, components auto importing, I18n, PWA, reusable
          components</strong
        >
        and uses <strong>TailwindCSS</strong> for styling and <strong>Iconify</strong> for
        icons.

        <br /><br />

        Checkout the
        <a
          href="https://github.com/blade-01/vueboost"
          target="_blank"
          class="underline font-light"
          >GitHub repo</a
        >
        for more details.

        <br /><br />

        <strong>NB:</strong> To see the reusable components in action go to
        <RouterLink to="/dashboard" class="underline font-light">dashboard</RouterLink>.
      </p>
    </div>
    <TheFooter />
  </div>
</template>
