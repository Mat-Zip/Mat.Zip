<template>
  <transition name="fade">
  <div v-if="$store.getters.getShowModal" class="modal-route" @click.self="backSpace">
    <div class="modal-content">
      <slot></slot>
      <router-view/>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  props: {
    parents: String
  },
  methods: {
    backSpace() {
      this.$router.push(this.parents);
      this.$store.commit('setShowModal', false);
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all .33s ease-in;
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