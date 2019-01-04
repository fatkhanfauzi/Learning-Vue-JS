import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import ServerInfo from './ServerInfo.vue'

Vue.component('my-cmp', Home)
Vue.component('my-server-info', ServerInfo)

new Vue({
  el: '#app',
  render: h => h(App)
})
