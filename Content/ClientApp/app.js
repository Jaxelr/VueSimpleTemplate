import Vue from 'vue'
import App from './components/App.vue'
import router from './router';
import store from './store/store.js';

const app = new Vue({
    router,
    store,
    ...App
})

export { app, router, store };