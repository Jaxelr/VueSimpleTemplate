import Vue from 'vue'
import axios from 'axios'
import App from '@/components/App.vue'
import router from './router'
import store from './store/store.js'

Vue.prototype.$http = axios;

Vue.config.productionTip = true;

const app = new Vue({
    router,
    store,
    ...App
})

export { 
    app, 
    router, 
    store 
}
