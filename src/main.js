import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import DateFilter from './common/date.filter';
import { axiosService } from './service/api.service';

Vue.config.productionTip = false
Vue.filter("date", DateFilter)
axiosService.init();
axiosService.setHeaderFromLocalStorage();
// axiosService.get('/articles', {tag: 'reactJS', limit: 30}).then(data => console.log(data))

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
