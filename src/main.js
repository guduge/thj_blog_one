import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
Vue.config.productionTip = false

new Vue({
  router:router,
  store,
  render: h => h(App),
  comments: { App }
}).$mount('#app')

// new Vue({
// 	el: '#app',
// 	router,
// 	store,
// 	template: '<App/>',
// 	components: { App }
// })
