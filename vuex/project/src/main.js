import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// 따로 store파일 만ㄷ르었으니까 이걸로 교체함 이번만
import store from './store/store.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
