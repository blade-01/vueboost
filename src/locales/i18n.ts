// import VueI18n  from '@intlify/unplugin-vue-i18n/vite';
import { createI18n } from 'vue-i18n';
import en from './en.json';
import jp from './jp.json';
import ar from './ar.json';
import sp from './sp.json';

const i18n = createI18n({
  locale: 'en',
  allowComposition: true, // you need to specify that!
  messages: {
    en,
    sp,
    ar,
    jp
  }
});

export default i18n;
