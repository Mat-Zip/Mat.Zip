import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// v-calendar 추가
import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'v',  // Use <vc-calendar /> instead of <v-calendar />
  // ...,                // ...other defaults
});

// font awesome 추가
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// font awesome icons 추가
import { faHeart as farHeart, faMap, faCalendar, faUser, faBarChart, faArrowAltCircleLeft, faSquareCaretUp } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'

library.add(farHeart, fasHeart, faMap, faCalendar, faUser, faBarChart, faArrowAltCircleLeft, faSquareCaretUp)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
