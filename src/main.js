import { createApp } from 'vue';
import http from '@/plugins/http';
import axiosServer from '@/plugins/axiosServer';
import axiosController from '@/plugins/axiosController';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(http)
  .use(axiosServer)
  .use(axiosController)
  .mixin({
    methods: {
      clone(a) { return JSON.parse(JSON.stringify(a)); },
    },
  })
  .mount('#app');
