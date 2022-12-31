<template>
  <div class="flex routes py-8 lg:p-0 h-[calc(100%-78px)] md:h-[calc(100vh-78px)]">
    <div class="container">
      <div class="flex justify-between items-center flex-col-reverse md:flex-row">
        <div>
          <h1
            class="my-6 md:m-0 font-bold text-[54px] lg:text-[63px] 2xl:text-7xl leading-[65px] sm:max-w-2xl xl:w-[35rem]"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            Welcome to
            <a href="https://github.com/blade-01" class="underline">Blade's</a>
            Boilerplate
          </h1>
          <p
            class="max-w-md leading-[25px] priText text-base mt-2"
            data-aos="fade"
            data-aos-delay="500"
          >
          Vue 3 + TS + Pinia + TailwindCSS + MDI Fonts + Vue Select
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-anchor-placement="top-center"
        >
          <figure>
            <img
              src="https://avatars.githubusercontent.com/u/47092407?v=4"
              alt="illustration_01"
              class="w-full h-full"
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
