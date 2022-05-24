import Vue from 'vue'
import Vuex from 'vuex'
import data from '../dummy.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    places: data,
    liked: [],
    showModal: false
  },
  getters: {
    getPlaces(state) {
      return state.places;
    },
    getLikedPlaces(state) {
      const result = state.places.filter((item) => state.liked.some((el) => item.id==el.id));
      return result;
    },
    getLiked(state) {
      return state.liked;
    },
    getShowModal(state) {
      return state.showModal;
    }
  },
  mutations: {
    addLikePlace(state, payload) {
      state.liked.push(payload);
    },
    deleteLikePlace(state, id) {
      const i=state.liked.findIndex((item) => item.id==id);
      state.liked.splice(i, 1);
    },
    setShowModal(state, bool) {
      state.showModal = bool;
    }
  },
  actions: {
  },
  modules: {
  }
})
