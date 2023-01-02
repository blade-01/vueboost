<template>
  <header
    class="header flex items-center main fixed w-full h-[78px] top-0 left-0 z-50 shadow-sm bg-white"
  >
    <div class="container">
      <div class="header-content flex justify-between items-center w-full">
        <router-link to="/">
          <img
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png"
            alt="logo"
            class="w-[60px] object-contain"
          />
        </router-link>
        <nav
          class="fixed h-full w-full top-0 -left-full mt-[76px] bg-white py-8 lg:relative lg:w-auto lg:left-0 lg:m-0 lg:p-0 lg:bg-inherit transition-all duration-500 lg:transition-none"
          :class="{ 'open-navbar': show }"
        >
          <ul class="block text-center lg:flex lg:space-x-12 lg:m-0 lg:items-center">
            <li class="mb-8 lg:m-0 mt-10" v-for="route in routes" :key="route.name">
              <router-link
                :to="route.routePath"
                class="font-medium capitalize"
                active-class="header-link"
                >{{ route.name }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div
          class="toggle lg:hidden transition-all duration-500"
          @click="toggleNav"
          :class="{ change: show }"
        >
          <div class="toggler"></div>
          <div class="toggler"></div>
          <div class="toggler"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const routes: {
  name: string
  routePath: string
}[] = [
  {
    name: 'Home',
    routePath: '/'
  },
  {
    name: 'About',
    routePath: '/about'
  }
]
const show = ref<boolean>(false)

const toggleNav = (): void => {
  show.value = !show.value
}

const router = useRouter()

onMounted(() => {
  router.beforeEach(() => {
    show.value = false
  })
})
</script>

<style lang="scss" scoped></style>
