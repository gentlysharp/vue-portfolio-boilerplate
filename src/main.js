import Vue from 'vue'
import main from './main.vue'

import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import router from './plugins/router'
import './plugins/axios'
import './plugins/moment'
import './plugins/aos'

import store from './stores'


Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  i18n,
  router,
  render: h => h(main)
}).$mount('#app')