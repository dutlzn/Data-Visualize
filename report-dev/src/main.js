import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts.js'
import VueECharts from 'vue-echarts'
import './style/index.css'
var echarts = require('echarts');
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.component('v-chart', VueECharts)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
