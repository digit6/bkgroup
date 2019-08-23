import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './plugins/iview.js'
import './plugins/vuesax.js'
import './plugins/others.js'

import './plugins/semantic.js'
import TurbolinksAdapter from 'vue-turbolinks';
Vue.use(TurbolinksAdapter)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

