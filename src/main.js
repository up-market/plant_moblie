import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./plugins/vant.js"

import axios from 'axios'
axios.defaults.baseURL = 'http://39.97.179.188:8899/undergraduate-authentication/'

// import "vant@2.12/lib/index.css";
import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
