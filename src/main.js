import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

// Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

refresh();
window.onresize = function(){
  setTimeout(function(){
    refresh();
  },10)
};
function refresh() {
  let deviceWidth = document.documentElement.clientWidth;
  if (deviceWidth > 1200) {
    document.documentElement.style.fontSize = 1200 / 12 + "px";
  } else {
    document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
  }
}
