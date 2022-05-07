import Vue from 'vue'
import Vuex from 'vuex'
import data from '../dummy.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    places: data,
    liked: []
  },
  getters: {
    getLikedPlaces(state) {
      const result = state.places.filter((item) => state.liked.includes(item));
      return result;
    }
  },
  mutations: {
    addLikePlace(state, payload) {
      console.log(payload);
      state.liked.push(payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
