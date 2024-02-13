import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import './assets/main.css';
import i18n from './plugins/i18n';
import { createPinia } from 'pinia';

const pinia = createPinia();


createApp(App)
    .use(router)
    .use(vuetify)
    .use(i18n)
    .use(pinia)
    .mount('#app');
