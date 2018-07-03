import Vue from 'vue'
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import App from './App.vue'

Raven
    .config('https://0c26f3f5810843979b768217e1b6d4d7@sentry.io/1236209')
    .addPlugin(RavenVue, Vue)
    .install();

Vue.config.errorHandler = function (err) {
  Raven.captureException(err)
}


Vue.config.productionTip = false


new Vue({
  render: h => h(App)
}).$mount('#app')

undefinedFunc(things);