// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
import { store } from './store/store.js' // store 사용
import router from './route/index.js' // route 사용
import VueSignaturePad from 'vue-signature-pad';
import vueEventCalendar from 'vue-event-calendar';
// locale can be 'zh' , 'en' , 'es', 'pt-br', 'ja', 'ko', 'fr', 'it', 'ru', 'de', 'vi', 'ua', 'no, 'no-nn'
import feather from 'vue-icon';
import Notifications from 'vue-notification';
import VueNativeNotification from 'vue-native-notification'

Vue.use(vueEventCalendar, {locale: 'ko', color: 'green'}) 
Vue.use(VueSignaturePad);
Vue.use(VueResource);
Vue.use(Notifications);
Vue.use(feather, 'v-icon');

Vue.use(VueNativeNotification, {
  // Automatic permission request before
  // showing notification (default: true)
  requestOnNotify: true
})
/* eslint-disable no-new */
new Vue({
   el: '#app',
   store, // store 사용
   router, // route 사용
   template: '<App/>',
   components: { App }
})
