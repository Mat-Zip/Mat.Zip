<template>
  <transition name="fade">
    <!-- 전체 모달창 onclick=>모달창 닫기 -->
    <div v-show="$store.getters.getShowModal" class="modal_route" @click.self="backSpace">
      <!-- 모달 컨텐츠 -->
      <div class="modal_content">
        <router-view />
        <!-- 커스텀 버튼 -->
        <div class="modal_btn_box">
          <slot></slot>
          <button class="close_btn" @click="backSpace">X</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    parents: String, // backSpace로 돌아갈 부모컴포넌트 URL
  },
  methods: {
    backSpace() {
      this.$router.push(this.parents).catch(()=>{});
      this.$store.commit("setShowModal", false);
    },
  },
  watch: {
    $route(to) {
      if(to.path=='/' || to.path=='/mypage') {
        this.$store.commit('setShowModal', false);
      }
      else {
        this.$store.commit('setShowModal', true);
      }
    }
  }
};
</script>

<style scoped>


.fade-enter-active,
.fade-leave-active {
  transition: all 0.33s ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}

.modal_route {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(00, 00, 00, 0.5);
}

.modal_content {
  width: 65%;
  height: 70%;
  position: fixed;
  top: 15%;
  left: 17.5%;
  background: white;
  box-shadow: 3px 3px 10px -2px rgba(00, 00, 00, 0.5);
}

.close_btn {
  border: none;
  box-shadow: 0 0;
  position: absolute;
  color: gray;
  right: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 20px;
  background-color: white;
}

.close_btn:hover {
  color: black;
}

.modal_btn_box {
  position: absolute;
  top: -40px;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 2px -1.5px 10px -2px rgba(00, 00, 00, 0.5);
  z-index: 100;
}

@media screen and (max-width: 1200px) {
  .modal_content {
    width: 85%;
    height: 80%;
    top: 11.5%;
    left: 7.5%;
  }
}

@media screen and (max-width: 768px) {
  .modal_content {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }

  .modal_btn_box {
    height: 40px;
    position: relative;
    bottom: 0;
  }
}
</style>
