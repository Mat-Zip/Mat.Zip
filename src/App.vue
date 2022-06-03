<template>
  <div id="app" @click="SideMenuOff">
    <nav>
      <router-link to="/">Main</router-link>
    </nav>
    <menu-bar class="menu-bar1"></menu-bar>
    <router-view />
    <transition name="trans">
      <alert-comp v-if="$store.getters.getAlertData" :alertData="$store.getters.getAlertData"></alert-comp>
    </transition>
  </div>
</template>

<script>
import AlertComp from './components/AlertComp.vue';
import MenuBar from "./components/MenuBar.vue";

export default {
  components: {
    MenuBar,
    AlertComp,
  },
  methods: {
    SideMenuOff: function () {
      this.$store.commit("setShowSideMenu", false);
    },
  },
};
</script>

<style>
* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fcfcfc;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.menu-bar1 {
  position: fixed;
  top: 20px;
  right: 270px;
  width: 25px;
  height: 25px;
  z-index: 100;
}

.trans-enter-active {
  transition: all .2s ease;
}
.trans-enter,
.trans-leave-to {
  opacity: 0;
}
.trans-leave,
.trans-enter-to {
  opacity: 1;
}
</style>
