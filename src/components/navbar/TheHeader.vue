<template>
  <header class="flex flex-col justify-center items-center text-center">
    <div class="flex flex-col justify-center items-center text-center">
      <img
        v-lazy="
          'https://res.cloudinary.com/bladencove/image/upload/v1673219185/RC/vueboost_w.svg'
        "
        alt="logo"
        class="w-[80px] h-[80px] object-contain"
        v-if="isDark"
      />
      <img
        v-lazy="
          'https://res.cloudinary.com/bladencove/image/upload/v1673218739/RC/vueboost.svg'
        "
        alt="logo"
        class="w-[80px] h-[80px] object-contain"
        v-else
      />
      <div class="text-base font-medium">Vue Boost</div>
    </div>
    <p class="text-sm font-light italic mt-2">{{ $t('title') }}</p>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
