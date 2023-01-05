<template>
  <div :class="[activeSidebar ? 'active-sidebar' : 'sidebar']" id="sidebar">
    <div>
      <div
        class="sticky-top bg-gray-100 w-full h-[60px] shadow-sm p-4 flex justify-between items-center"
      >
        <router-link to="/" class="flex items-center gap-2">
          <img
            v-lazy="'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png'"
            alt="logo"
            class="w-[50px] object-contain"
          />
          <p class="text-4xl font-semibold">V</p>
        </router-link>
      </div>
      <div class="h-screen md:h-[calc(100vh-60px)] py-6 px-4 overflow-y-auto">
        <ul class="flex flex-col gap-y-3">
          <li v-for="(link, index) in links" :key="index">
            <span class="text-2xl font-semibold block pb-4">{{ link.title }}</span>
            <span v-for="(list, index) in link.list" :key="index">
              <span v-if="!list.sub" class="block pb-2">
                <RouterLink
                  :to="`${list.route}`"
                  active-class="sidebar-active"
                  class="flex items-center gap-3 sidebar-hover"
                >
                  <Icon :icon="`mdi:${list.icon}`" width="25" />
                  <span class="font-light">{{ list.name }}</span>
                </RouterLink>
              </span>
              <div v-else>
                <div
                  class="flex items-center justify-between sidebar-hover mb-2"
                  @click="toggleDropdown(list)"
                >
                  <span class="flex items-center gap-3">
                    <Icon :icon="`mdi:${list.icon}`" width="25" />
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
                  class="flex flex-col gap-y-0.5"
                  :class="[
                    list.show
                      ? 'transition-[max-height] max-h-[5000px] duration-200 ease-in'
                      : 'transition-[max-height] max-h-0 duration-300 ease-out overflow-hidden'
                  ]"
                >
                  <div v-for="(sub, index) in list.sub" :key="index">
                    <span class="block pl-[37px] pb-1.5">
                      <RouterLink
                        :to="`${sub.route}`"
                        active-class="sidebar-active"
                        class="flex items-center gap-3 sidebar-hover"
                      >
                        <span class="font-light">{{ sub.name }}</span>
                      </RouterLink>
                    </span>
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
const { links, activeSidebar, toggleDropdown } = useMainStore()
</script>

<style scoped>
.sidebar {
  @apply bg-gray-200 shadow-sm z-40 w-[260px] fixed top-0 md:left-0  -left-full transition-[left] duration-300 ease-in-out;
}

.sidebar-active {
  @apply bg-priText rounded-md text-white hover:bg-priText !important;
}

.sidebar-hover {
  @apply p-3 transition-all ease-in-out duration-300 hover:bg-[#00000042] hover:text-white hover:rounded-md cursor-pointer;
}

.active-sidebar {
  @apply left-0 md:-left-full;
}
</style>
