import Vue from 'vue'
import App from './App'
import request from './util/request/index.js'

Vue.config.productionTip = false
// 全局绑定请求方法
Vue.prototype.$request = request;

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
