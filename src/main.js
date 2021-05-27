import Vue from 'vue';
import jquery from 'jquery';
import axios from 'axios';
import VueAxios from 'vue-axios';
// Loading 套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import VueSuperSlide from 'vue-superslide';

import {
  ValidationProvider, ValidationObserver,
  configure, localize,
} from 'vee-validate/dist/vee-validate.full.min';
import TW from 'vee-validate/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';
import 'bootstrap';

// 將 VeeValidate input 驗證工具載入 作為全域註冊
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
localize('zh_TW', TW);

window.$ = jquery;
Vue.use(VueAxios, axios);
Vue.use(Loading);
Vue.use(VueSuperSlide);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
