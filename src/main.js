import Vue from 'vue'
import App from './App.vue'
import Varb from 'bootstrap-vue'

import VueRouter from 'vue-router'
import routes from './routes'


Vue.use(Varb);
Vue.use(VueRouter)

//configurar rutas
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
