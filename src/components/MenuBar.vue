<template>
  <div id="menu-bar">
    <transition name="slide">
    <div v-if="showBar" id="schedule">
      <div v-if="!logged">
        <ul>
          <li>회원가입</li>
          <button @click="showBar = !showBar">버튼</button>
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
    <div class="sidebtn" @click="showBar=!showBar"><font-awesome-icon icon="fa-regular fa-user" /></div>
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
  z-index: 2;
}

#schedule ul {
  list-style: none;
}
.sidebtn {
  position: absolute;
  right: -250px;
}
.slide-enter-active {
  transition:all .5s ease-out;
}
.slide-leave-active {
  transition: all .4s ease-in;
}
.slide-enter, .slide-leave-to {
  left: 300px;
}
.slide-enter-to, .slide-leave {
  left:  0px;
}
</style>