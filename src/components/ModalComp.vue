<template>
  <transition name="fade">
    <!-- 전체 모달창 onclick=>모달창 닫기 -->
    <div
      v-show="$store.getters.getShowModal"
      class="modal_route"
      @click.self="backSpace"
    >
      <!-- 커스텀 버튼 -->
      <div class="modal_btn_box">
        <slot></slot>
      </div>
      <button class="close_btn" @click="backSpace">X</button>
      <!-- 모달 컨텐츠 -->
      <div class="modal_content">
        <router-view />
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
      this.$router.push(this.parents);
      this.$store.commit("setShowModal", false);
    },
  },
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

.modal_route > .modal_content {
  width: 65%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  /* border-radius: 20px; */
  box-shadow: 5px 5px 10px #404040;
}

.close_btn {
  border: 0px;
  box-shadow: 0 0;
  background-color: transparent;
  position: fixed;
  color: white;
  top: 9%;
  right: 16.5%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  font-size: 25px;
}

.modal_btn_box {
  position: fixed;
  top: 11%;
  left: 17.5%;
}
</style>
