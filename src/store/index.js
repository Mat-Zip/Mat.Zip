import Vue from 'vue'
import Vuex from 'vuex'
import PlaceData from '../dummy.json'
import ScheduleData from '../datesdummy.json'
import coord from '../coordinate.json'
import '@/datasources/firebase'
import {
  getAuth,
  signInWithEmailAndPassword,
  
} from 'firebase/auth'
import router from '@/router'
const auth = getAuth();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    places: PlaceData,
    schedules: ScheduleData,
    locations: coord,
    liked: [],
    showModal: false,
    showSideMenu : false,
    user : null
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
    },
    getLocations(state) {
      return state.locations;
    },
    getShowSideMenu(state){
      return state.showSideMenu;
    },
    getSchedules(state) {
      return state.schedules;
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
    },
    setShowSideMenu(state, bool) {
      state.showSideMenu = bool;
    },
    setUser(state,payload) {
      state.user = payload;
    }
  },
  actions: {
    emailLogin({commit}, payload) {
      signInWithEmailAndPassword(auth, payload.userid, payload.userpw)
      .then( (userinfo)=>{
        commit('setUser', {
          uid : userinfo.user.uid,
          name : userinfo.user.displayname
        });
        router.push('/main')
      })
      .catch( (err)=>{
        console.log(err);
      })
    }
  },
  modules: {
  }
})
