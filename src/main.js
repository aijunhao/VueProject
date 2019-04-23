import Vue from 'vue'
import qs from 'qs'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import axios from 'axios'
import moment from 'moment'
import VuePreview from 'vue2-preview'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(VuePreview)
Vue.use(ElementUI)

Vue.prototype.$qs = qs
Vue.prototype.$axios = axios

// 定义全局过滤器
Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
