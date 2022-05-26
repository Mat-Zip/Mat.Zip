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
import { faHeart, faMap, faCalendar, faUser, faBarChart} from '@fortawesome/free-regular-svg-icons'

library.add(faHeart, faMap, faCalendar, faUser, faBarChart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueNaverMap from 'vue-naver-map'

Vue.use(VueNaverMap, {
  key: 'tlhsvldx17',
  libraries: ['geocoder']
})

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
