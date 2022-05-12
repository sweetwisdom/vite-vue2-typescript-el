/*
 * @Author: zhangchao
 * @Date: 2022-05-12 11:47:37
 * @LastEditors: zhangchao
 * @LastEditTime: 2022-05-12 11:52:53
 * @Description: file content
 */
import Vue from 'vue'
import VCA, { createApp, h } from '@vue/composition-api'
import router from './router'
import AddModules from './modules/index'
import store from './store'
import App from './App.vue'



Vue.use(VCA)

AddModules({ app: Vue, store, router })

Vue.config.productionTip = false

const app = createApp({
  router,
  store,
  render: () => h(App),
})

app.mount('#app')
