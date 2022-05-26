<template>
  <div id="menu-bar">
    <transition name="slide">
    <div v-if="$store.getters.getShowSideMenu" id="schedule">
      <div v-if="!logged" class="sidebar-content">

        <div class="sidebar-text">
          <p>회원가입</p>
        </div>
        <div class="arrow"><font-awesome-icon icon="far fa-arrow-alt-circle-left" /></div>
        
        <div class="sidebar-text">
          <p @click="$router.push('/mypage')">마이페이지</p>
        </div>
        <div class="arrow"><font-awesome-icon icon="far fa-arrow-alt-circle-left" /></div>

        <div class="sidebar-text">
          <p @click="$router.push('/calendar')">캘린더</p>
        </div>
        <div class="arrow"><font-awesome-icon icon="far fa-arrow-alt-circle-left" /></div>
      
      </div>
      <div v-if="logged">
        <div class="sidebar-text">
          <p>마이페이지</p>
        </div>
        <div class="sidebar-text">
          <p>일정</p>
        </div>     
      </div>
    </div>
    </transition>
    <div class="sidebtn" @click.stop="showSideMenu"><font-awesome-icon icon="fa-regular fa-user" /></div>
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
  },
  methods : {
    showSideMenu : function() {
      this.$store.commit('setShowSideMenu', true);
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap");

.menu-bar {
  position: relative;
}

#schedule {
  position: absolute;
  width: 300px;
  height: 100vh;
  top: -20px;
  background-color: rgba(00, 00, 00, 0.5);
  z-index: 2;
}
.sidebar-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 15px;
  text-align: center;
  
}
.sidebar-text {
  display: inline-block;
  width: 55%;
  height : 50px;
  background-color: transparent;
  transition-duration: .5s;
  font-family: 'Noto Sans KR', sans-serif;
  cursor: pointer;
}
.sidebar-text:hover {
  transform: translateX(-10px);
  color: white;
}
@keyframes arrow {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
.sidebar-text:hover + .arrow {
  color: white;
  animation: arrow 0.5s infinite alternate;
  transform: translateX(-40px);
  
}
.arrow {
  position: absolute;
  display: inline-block;
  font-size: 25px;
  right: -20px;
  color: transparent;
  transition-duration: 0.5s;
}
.sidebtn {
  position: absolute;
  top: 15px;
  right: -250px;
  font-size: 20px;
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