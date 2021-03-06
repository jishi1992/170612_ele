import Vue from 'vue'
import app from './app.vue'
import router from './router'

new Vue({
  el: '#app',
  render: h => h(app),
  router  // 配置路由器
})