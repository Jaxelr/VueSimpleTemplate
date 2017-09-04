import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../components/App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
      { path: '/', component: App }
  ]
});

export default router;