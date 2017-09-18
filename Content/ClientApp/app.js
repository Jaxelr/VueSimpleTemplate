import Vue from 'vue'
import App from './components/App.vue'
import router from './router';
import store from './store/store.js';

//Adds the icon file to the graph.
var icoFile = require("./assets/favicon.ico");

const app = new Vue({
    router,
    store,
    ...App
})

export { app, router, store };