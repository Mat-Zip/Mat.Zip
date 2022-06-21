<template>
  <div id="menu_bar">
    <transition name="slide">
      <div
        v-show="$store.getters.getShowSideMenu"
        id="schedule"
        @click.stop="() => {}"
      >
        <!-- 로그인 하기 전 -->
        <div v-show="!logged" class="sidebar_content">
          <div class="sidebar_text">
            <p @click="$router.push('/register').catch(() => {})">회원가입</p>
          </div>
          <div class="arrow">
            <font-awesome-icon icon="far fa-arrow-alt-circle-left" />
          </div>
          <div class="sidebar_text">
            <p @click="$router.push('/login').catch(() => {})">로그인</p>
          </div>
          <div class="arrow">
            <font-awesome-icon icon="far fa-arrow-alt-circle-left" />
          </div>
        </div>
        <!-- 로그인 후 -->
        <div v-show="logged" class="sidebar_content">
          <div class="sidebar_text">
            <p @click="$router.push('/mypage').catch(() => {})">마이페이지</p>
          </div>
          <div class="arrow">
            <font-awesome-icon icon="far fa-arrow-alt-circle-left" />
          </div>
          <div class="sidebar_text">
            <p @click="$router.push('/calendar').catch(() => {})">캘린더</p>
          </div>
          <div class="arrow">
            <font-awesome-icon icon="far fa-arrow-alt-circle-left" />
          </div>
          <div class="sidebar_text">
            <p @click="Logout">로그아웃</p>
          </div>
          <div class="arrow">
            <font-awesome-icon icon="far fa-arrow-alt-circle-left" />
          </div>
        </div>
      </div>
    </transition>
    <div class="side_btn" @click.stop="showSideMenu">
      <span :class="hamburger"></span>
      <span :class="hamburger"></span>
      <span :class="hamburger"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showSideMenu: function () {
      if (this.$store.getters.getAlertData == null) {
        if (this.$store.getters.getShowSideMenu) {
          this.$store.commit("setShowSideMenu", false);
        } else {
          this.$store.commit("setShowSideMenu", true);
        }
      }
    },
    Logout: function () {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    logged() {
      return this.$store.getters.getLogged;
    },
    hamburger() {
      return this.$store.getters.getShowSideMenu ? "sideOn" : "";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap");

.menu_bar {
  position: relative;
}

#schedule {
  position: absolute;
  width: 300px;
  height: 100vh;
  top: -20px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.sidebar_content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 80px;
  text-align: center;
}
.sidebar_text {
  display: inline-block;
  width: 55%;
  height: 50px;
  background-color: transparent;
  transition-duration: 0.5s;
  font-family: "Noto Sans KR", sans-serif;
  cursor: pointer;
}
.sidebar_text:hover {
  transform: translateX(-10px);
  color: white;
}
@keyframes arrow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.sidebar_text:hover + .arrow {
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
.side_btn {
  position: absolute;
  top: 15px;
  right: -250px;
  font-size: 20px;
  width: 30px;
  height: 30px;
  z-index: 10;
}

.side_btn:hover {
  cursor: pointer;
}

.slide-enter-active {
  transition: all 0.5s ease-out;
}
.slide-leave-active {
  transition: all 0.35s ease-in;
}
.slide-enter,
.slide-leave-to {
  left: 300px;
}
.slide-enter-to,
.slide-leave {
  left: 0px;
}

span {
  height: 3px;
  width: 30px;
  border-radius: 30%;
  right: 5px;
  display: block;
  position: absolute;
  background-color: black;
  transition: all 0.6s ease;
}

span:nth-child(1) {
  top: 3px;
}
span:nth-child(2) {
  top: 10px;
}
span:nth-child(3) {
  top: 17px;
}

.sideOn:nth-child(1) {
  transform: rotate(45deg);
  top: 10px;
}
.sideOn:nth-child(2) {
  top: 10px;
  opacity: 0;
}
.sideOn:nth-child(3) {
  transform: rotate(-45deg);
  top: 10px;
}
</style>
