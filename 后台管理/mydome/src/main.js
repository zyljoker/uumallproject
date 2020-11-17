// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
//状态管理
import store from './store'
//全局引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//给vue原型挂载一个服务器地址
Vue.prototype.$imgUrl = 'http://localhost:3000'
Vue.config.productionTip = false
//全局引入ECharts
import Echart from 'echarts'

Vue.prototype.$eh = Echart

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
