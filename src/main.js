// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import UIkit from 'uikit';

import {SuperStore,flueVue} from 'flue-vue'

import logger from 'redux-logger'

import UserStore from './stores/UserStore.js'

Vue.use(flueVue)

SuperStore.addStores([UserStore])

SuperStore.applyMiddleware(UserStore,[logger])

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
