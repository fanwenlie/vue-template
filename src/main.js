// 解决vuex在ie下报错的问题[issues/474](https://github.com/vuejs-templates/webpack/issues/474)
// 必须放在前面引入，否则无效
import 'es6-promise/auto'

import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '../static/css/font-awesome.min.css'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/element-var.scss'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import './mock'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
