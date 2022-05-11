<template>
  <transition name="fade">
  <div v-if="$store.getters.getShowModal" class="modal-route" @click.self="backSpace">
    <div class="modal-content">
      <router-view/>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  methods: {
    backSpace() {
      this.$store.commit('setShowModal', false);
      this.$router.push('../');
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}

.modal-route {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(00, 00, 00, 0.5);
}

.modal-route>.modal-content {
  width: 80%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
}
</style>