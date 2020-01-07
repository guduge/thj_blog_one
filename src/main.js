import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

new Vue({
  router:router,
  store,
  render: h => h(App),
}).$mount('#app')

// new Vue({
// 	el: '#app',
// 	router,
// 	store,
// 	template: '<App/>',
// 	components: { App }
// })
