import Vue from 'vue'
import Vuex from 'vuex'
import PlaceData from '@/dummy.json'
import CoordData from '@/coordinate.json'
import '@/datasources/firebase'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getDatabase, ref, set, child, get } from "firebase/database";
import router from "@/router";

const auth = getAuth();
const database = getDatabase();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    places: PlaceData,
    locations: CoordData,
    alertData: null,
    showModal: false,
    showSideMenu: false,
    user: null,
    schedules: [],
    liked: [],
  },
  getters: {
    getPlaces(state) {
      return state.places;
    },
    getLiked(state) {
      const reverse = [...state.liked].reverse();
      return reverse;
    },
    getShowModal(state) {
      return state.showModal;
    },
    getLocations(state) {
      return state.locations;
    },
    getShowSideMenu(state) {
      return state.showSideMenu;
    },
    getSchedules(state) {
      return state.schedules;
    },
    getLogged(state) {
      return state.user != null;
    },
    getAlertData(state) {
      return state.alertData;
    }
  },
  mutations: {
    setShowModal(state, bool) {
      state.showModal = bool;
    },
    setShowSideMenu(state, bool) {
      state.showSideMenu = bool;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    initLikePlace(state, payload) {
      state.liked = payload;
    },
    addLikePlace(state, payload) {
      state.liked.push(payload);
    },
    deleteLikePlace(state, payload) {
      const index = state.liked.findIndex((el) => el.id == payload);
      state.liked.splice(index, 1);
    },
    initSchedule(state, payload) {
      state.schedules = payload;
    },
    addSchedule(state, payload) {
      state.schedules.push(payload);
    },
    setAlertData(state, payload) {
      state.alertData = payload;
    }
  },
  actions: {
    emailLogin({ commit, dispatch }, payload) {
      signInWithEmailAndPassword(auth, payload.userid, payload.userpw)
        .then((userinfo) => {
          commit("setUser", {
            id: userinfo.user.uid,
            name: userinfo.user.displayname,
          });
          commit("setShowModal", false);
          dispatch('setUserData');
          router.push("/");
        })
        .catch((err) => {
          console.error(err);
        });
    },
    googleLogin({ commit, dispatch }) {
      const oProvider = new GoogleAuthProvider();
      oProvider.addScope("profile");
      oProvider.addScope("email");
      signInWithPopup(auth, oProvider)
        .then((userinfo) => {
          commit("setUser", {
            id: userinfo.user.uid,
            name: userinfo.user.displayname,
          });
          commit("setShowModal", false);
          dispatch('setUserData');
          router.push("/");
        })
        .catch((err) => {
          console.error(err);
        });
    },
    registerUser({ commit, dispatch }, payload) {
      createUserWithEmailAndPassword(auth, payload.userid, payload.userpw)
        .then((userinfo) => {
          commit("setUser", {
            id: userinfo.user.uid,
            name: userinfo.user.displayname,
          });
          commit("setShowModal", false);
          dispatch('setUserData');
          router.push("/");
        })
        .catch((err) => {
          console.error(err);
        });
    },
    logout({ commit }) {
      signOut(auth)
        .then(() => {
          commit('setUser', null);
          commit('initLikePlace', []);
          commit('initSchedule', []);
          router.push("/");
          commit('setAlertData', {
            alertText: "로그아웃되었습니다",
            buttonText1: "확인",
            buttonFunc1: () => {
              commit('setAlertData', null);
            }
          });
        })
        .catch((err) => {
          console.error(err);
      })
    },
    setUserData({ state, commit }) {
      get(child(ref(database), 'users/' + state.user.id)).then((snapshot) => {
        if (snapshot.exists()) {
          commit('initLikePlace', snapshot.val().liked ? snapshot.val().liked : []);
          commit('initSchedule', snapshot.val().schedules ? snapshot.val().schedules : []);
        }
        else {
          commit('initLikePlace', []);
          commit('initSchedule', []);
        }
      }).catch((err) => {
        console.error(err);
      })
    },
    addLikeDB({ state, commit }, payload) {
      commit('addLikePlace', payload);
      set(ref(database, 'users/' + state.user.id), {
        liked: [...state.liked],
        schedules: [...state.schedules]
      });
    },
    deleteLikeDB({ state, commit }, payload) {
      commit('deleteLikePlace', payload);
      set(ref(database, 'users/' + state.user.id), {
        liked: [...state.liked],
        schedules: [...state.schedules]
      });
    },
    addScheduleDB({ state, commit }, payload) {
      commit('addSchedule', payload);
      set(ref(database, 'users/' + state.user.id), {
        liked: [...state.liked],
        schedules: [...state.schedules]
      });
    }
  },
  modules: {},
});
