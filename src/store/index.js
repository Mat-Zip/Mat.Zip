import Vue from 'vue'
import Vuex from 'vuex'
import data from '../dummy.json'
import data2 from '../datesdummy.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    places: data,
    schedules: data2,
    liked: []
  },
  getters: {
    getLikedPlaces(state) {
      const result = state.places.filter((item) => state.liked.some((el) => item.id==el.id));
      return result;
    },
    getLiked(state) {
      return state.liked;
    }
  },
  mutations: {
    addLikePlace(state, payload) {
      state.liked.push(payload);
    },
    deleteLikePlace(state, id) {
      const i=state.liked.findIndex((item) => item.id==id);
      state.liked.splice(i, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
