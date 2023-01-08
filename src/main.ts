import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';

import App from './App.vue';
import router from './router';

// Tailwind Styles
import './style.css';

// MDI Fonts
import '@mdi/font/css/materialdesignicons.css';

// Lazy Loaders
import lazyPlugin from 'vue3-lazy';

// Phone number validator
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

// Vue Select
import 'vue-select/dist/vue-select.css';

// Vue toastification and styles
import Toast, { POSITION } from 'vue-toastification';
import type { PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

// Quill Editor
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// Vue Apex Charts
import VueApexCharts from 'vue3-apexcharts';

// Internationalization
import i18n from './locales/i18n';

const pinia = createPinia();

const head = createHead();

const app = createApp(App);

const options: PluginOptions = {
  // Default toast options
  position: POSITION.TOP_RIGHT,
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  closeButton: 'button',
  icon: true,
  rtl: false
};

app
  .use(router)
  .use(pinia)
  .use(lazyPlugin, {
    loading:
      'https://res.cloudinary.com/bladencove/image/upload/v1655997367/RC/ezgif.com-gif-maker_1_vptsnn.gif',
    error: 'https://c.tenor.com/hwe3vkln0_UAAAAC/error-x-error.gif'
  })
  .use(Toast, options)
  .use(head)
  .use(VueApexCharts)
  .use(i18n)
  .component('vue-tel-input', VueTelInput)
  .component('QuillEditor', QuillEditor)
  .mount('#app');
