<template>
  <div id="app" @click="SideMenuOff">
    <nav>
      <router-link to="/">
        <img
          class="login_image"
          src="./assets/MAT.ZIP-logo.png"
          width="100px"
          height="100px"
        />
      </router-link>
    </nav>
    <menu-bar class="menu-bar1"></menu-bar>
    <router-view />
    <transition name="trans">
      <alert-comp
        v-if="$store.getters.getAlertData"
        :alertData="$store.getters.getAlertData"
      ></alert-comp>
    </transition>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import AlertComp from "./components/AlertComp.vue";
import MenuBar from "./components/MenuBar.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  components: {
    MenuBar,
    AlertComp,
    FooterComp
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
  background-color: #fcfcfc;
}

nav {
  padding: 0 10px 0 10px;
  text-align: center;
  margin-top: 10px;
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
  transition: all 0.2s ease;
}
.trans-enter,
.trans-leave-to {
  opacity: 0;
}
.trans-leave,
.trans-enter-to {
  opacity: 1;
}

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap");
</style>
