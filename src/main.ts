/*
 * @Author: zhangchao
 * @Date: 2022-05-12 11:47:37
 * @LastEditors: zhangchao
 * @LastEditTime: 2023-06-28 21:17:37
 * @Description: file content
 */
import Vue from 'vue'

import router from './router'
import AddModules from './modules/index'
import store from './store'
import App from './App.vue'

AddModules({ app: Vue, store, router })

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// const app = createApp({
//   router,
//   store,
//   render: () => h(App),
// })

// app.mount('#app')
