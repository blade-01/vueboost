<template>
  <div class="sidebar" :class="{ 'active-sidebar': nav }">
    <div>
      <div
        class="sticky-top bg-gray-100 dark:bg-darkBgSec w-full h-[60px] shadow-sm p-4 flex justify-between items-center"
      >
        <router-link to="/">
          <img
            v-lazy="
              'https://res.cloudinary.com/bladencove/image/upload/v1673219185/RC/vueboost_w.svg'
            "
            alt="logo"
            class="w-[50px] object-contain"
            v-if="isDark"
          />
          <img
            v-lazy="
              'https://res.cloudinary.com/bladencove/image/upload/v1673218739/RC/vueboost.svg'
            "
            alt="logo"
            class="w-[50px] object-contain"
            v-else
          />
        </router-link>
      </div>
      <div class="h-screen md:h-[calc(100vh-60px)] py-6 px-4 overflow-y-auto">
        <ul class="flex flex-col gap-y-3">
          <li v-for="(link, index) in links" :key="index">
            <p class="text-2xl font-semibold pb-4">{{ link.title }}</p>
            <span v-for="(list, index) in link.list" :key="index">
              <span v-if="!list.sub" class="block pb-2">
                <RouterLink
                  :to="`${list.route}`"
                  active-class="sidebar-active"
                  class="flex items-center gap-3 sidebar-hover"
                >
                  <Icon v-if="list.icon" :icon="`mdi:${list.icon}`" width="25" />
                  <span class="font-light">{{ list.name }}</span>
                </RouterLink>
              </span>
              <div v-else>
                <div
                  class="flex items-center justify-between sidebar-hover mb-2"
                  @click="toggleDropdown(list)"
                >
                  <span class="flex items-center gap-3">
                    <Icon v-if="list.icon" :icon="`mdi:${list.icon}`" width="25" />
                    <span class="font-light">{{ list.name }}</span>
                  </span>
                  <Icon
                    icon="mdi:menu-down-outline"
                    width="18"
                    :class="
                      list.show
                        ? 'transition-all ease-in duration-300 transform rotate-180'
                        : 'transition-all ease-out duration-300 transform rotate-40'
                    "
                  ></Icon>
                </div>
                <div
                  class="flex flex-col"
                  :class="[
                    list.show
                      ? 'transition-[max-height] max-h-[5000px] duration-200 ease-in'
                      : 'transition-[max-height] max-h-0 duration-300 ease-out overflow-hidden'
                  ]"
                >
                  <div v-for="(sub, index) in list.sub" :key="index">
                    <p class="pl-[37px]">
                      <RouterLink
                        :to="`${sub.route}`"
                        active-class="inner-sidebar-active"
                        class="flex items-center gap-3 inner-sidebar-hover"
                      >
                        <span class="font-light">{{ sub.name }}</span>
                      </RouterLink>
                    </p>
                  </div>
                </div>
              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
const { links, toggleDropdown } = useSidebarUtils()
defineProps<{ nav: boolean }>()
</script>

<style scoped>
.sidebar {
  @apply bg-gray-200 dark:bg-darkBgSec shadow-sm z-40 w-[260px] fixed top-0 md:left-0  -left-full transition-[left];
}

.active-sidebar {
  @apply left-0 w-[260px] md:-left-full;
}
.sidebar-active {
  @apply bg-priText rounded-md text-white hover:bg-priText !important;
}

.inner-sidebar-active {
  @apply rounded-md text-priText font-medium !important;
}

.sidebar-hover {
  @apply p-3 transition-all ease-in-out duration-300 hover:bg-[#00000042] hover:text-white hover:rounded-md cursor-pointer;
}

.inner-sidebar-hover {
  @apply p-3 transition-all ease-in-out duration-300 hover:text-priText cursor-pointer;
}
</style>
