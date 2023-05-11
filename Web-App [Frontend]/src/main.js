import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueCookies from "vue-cookies";

Vue.use(VueCookies);

Vue.$cookies.config("av");

Vue.config.productionTip = false

new Vue({
  router,
  //store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
