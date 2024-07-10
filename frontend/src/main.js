import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

library.add(faHome);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app');
