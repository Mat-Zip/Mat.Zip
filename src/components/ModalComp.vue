<template>
  <div v-if="$store.getters.getShowModal" class="modal-route" @click.self="backSpace">
    <div class="modal-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backSpace() {
      this.$router.push('../');
      this.$store.commit('setShowModal', false);
    }
  }
}
</script>

<style scoped>
.modal-route {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
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