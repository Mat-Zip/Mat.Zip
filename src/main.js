import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// font awesome 추가
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// font awesome icons 추가
import { faHeart, faMap, faCalendar, faUser,} from '@fortawesome/free-regular-svg-icons'

library.add(faHeart, faMap, faCalendar, faUser,)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
