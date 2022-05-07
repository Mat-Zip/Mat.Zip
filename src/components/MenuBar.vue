<template>
  <div id="menu-bar">
    <transition name="slide">
    <div v-if="showBar" id="schedule">
      <div v-if="!logged">
        <ul>
          <li>회원가입</li>
        </ul>
      </div>
      <div v-if="logged">
        <ul>
          <li>마이페이지</li>
          <li>일정</li>
        </ul>
      </div>
    </div>
    </transition>
    <div @click="showBar=!showBar"><font-awesome-icon icon="fa-regular fa-user" /></div>
  </div>
</template>

<script>
export default {
  name: 'GPBar',
  data: function() {
    return {
      showBar: false,
      logged: false
    }
  }
}
</script>

<style scoped>
.menu-bar {
  position: relative;
}

#schedule {
  position: absolute;
  width: 300px;
  height: 100vh;
  background-color: lightblue;
}

#schedule ul {
  list-style: none;
}

.slide-enter-active {
  transition:all .5s ease-out;
}
.slide-leave-active {
  transition: all .4s ease-in;
}
.slide-enter, .slide-leave-to {
  right: -22%;
}
.slide-enter-to, .slide-leave {
  right: 0%;
}
</style>