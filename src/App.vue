<template>
  <div id="app">
    <nav>
      <router-link to="/">Category 1</router-link> |
      <router-link to="/mypage">Category 2</router-link>
    </nav>
    <menu-bar class="menu-bar1"></menu-bar>
    <router-view/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'

export default {
  components: {
    MenuBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
  right: 20px;
  width: 25px;
  height: 25px;
  z-index: 1000;
}
</style>
