<p align='center'>
  <img src='public/screenshot.png' alt='Boost your productivity with Vue Boost - work smarter, not harder.'/>
</p>
<br/>

<p align='center'>
Boost your productivity with <strong>Vue Boost</strong> - work smarter, not harder.
</p>

<br>

<p align='center'>
Inspired by <a href="https://github.com/antfu/vitesse">Vitesse</a>
</p>

<br>

<p align='center'>
<a href="https://vueboost.netlify.app/">Live Demo</a>
</p>

<br>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [esbuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [TailwindCSS](https://tailwindcss.com/)

- 😃 [Use icons from Iconify](https://iconify.design)

- 🌍 [I18n ready](./locales)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🧩 [Reuseable Components](#reuseable-components) - a little something to improve productivity

- 🦾 TypeScript, of course

<br>

## Pre-packed

### UI Frameworks

- [TailwindCSS](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.js.org)
- [MDI Fonts](https://materialdesignicons.com/) - Material Design Icons (this can also be used from Iconify)

### Reuseable Components

- [Parent Folder](/src/components/reusables/)
  - [Button](/src/components/reusables/BaseButton.vue) - Reusable button component
  - [Editor](/src/components/reusables/BaseEditor.vue) - Rich Text Editor Component
  - [Input](/src/components/reusables/BaseInput.vue) - Form input component (Types: text, email, and password)
  - [File](/src/components/reusables/BaseFile.vue) - File upload component
  - [Textarea](/src/components/reusables/BaseTextarea.vue) - Textarea component
  - [Modal](/src/components/reusables/BaseFile.vue) - Reusable modal component
  - [Phone](/src/components/reusables/BasePhone.vue) - Phone number validation component
  - [Select](/src/components/reusables/BaseSelect.vue) - Select dropdown component
  - [Submit Button](/src/components/reusables/BaseSubmitButton.vue) - Submit Button with loader upon request
  - [Table](/src/components/reusables/BaseTable.vue) - Data table component
  - [Table Action](/src/components/reusables/BaseTableAction.vue) - Table Action component (view, edit and delete)
- [Samples Folder](/src/components/samples/)
  - You can find out how to use these components in the [Samples](/src/components/samples/) folder or visit [Vue Boost Dashboard](https://vueboost.netlify.app/dashboard) for the visualization

### Plugins

- [Vue Router](https://github.com/vuejs/router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [Pinia](https://pinia.vuejs.org) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - unplugin for Vue I18n
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively
- [`vite-plugin-vue-inspector`](https://github.com/webfansplz/vite-plugin-vue-inspector) - jump to local IDE source code while click the element of browser automatically
- [Axios](https://axios-http.com/docs/intro) - make requests on the go
- [Vuelidate](https://vuelidate-next.netlify.app/) - form input field validation libray for Vue
- [Vue Toastification](https://github.com/Maronato/vue-toastification) - toast notifications for Vue
- [Tailwind Elements](https://tailwind-elements.com/) - reusable vue components for Tailwind
- [Vue Select](https://vue-select.org/) - flexible dropdown list for Vue
- [Vue-tel-input](https://vue-tel-input.iamstevendao.com/) - mobile number validation library for Vue
- [Vue3 Lazy](https://github.com/liangyuanchai/vue3-plugin-lazy) - image lazy/skeleton loader for Vue
- [Vue3 Quill Editor](https://vueup.github.io/vue-quill/) - text rich editor for vue
- [Vue3 Apexcharts](https://github.com/apexcharts/vue3-apexcharts) - Vue 3 component for ApexCharts to build interactive visualizations in vue.

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/).

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [Tailwind IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Icon inline display and autocomplete
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Variations

- [Vue Boost + Nuxt 3](https://github.com/blade-01/vueboost-nuxt3) - Vue Boost for Nuxt 3.

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/blade-01/vueboost/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit blade-01/vueboost my-template
cd my-template
pnpm i or yarn i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the hostname in `vite.config.ts`
- [ ] Change the favicon in `public`
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

OR

```bash
yarn dev
```

### Build

To build the App, run

```bash
pnpm build
```

OR

```bash
yarn build
```

And you will see the generated file in `dist` that is ready to be served.

### Deploy

Deploy anywhere.

## Why

To boost our collective productivity as developers.
