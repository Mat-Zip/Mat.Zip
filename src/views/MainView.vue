<template>
  <div class="home">
    <!-- 받아온 data를 카드로 생성 -->
    <web-card v-for="(place,i) in $store.getters.getPlaces" :key="i" :place="place"></web-card>
    <transition name="fade">
    <div v-if="$store.getters.getShowModal" class="modal-route" @click.self="backSpace">
      <div class="modal-content">
        <router-view/>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import WebCard from '../components/WebCard.vue'

export default {
  name: 'HomeView',
  components: {
    WebCard
  },
  methods: {
    backSpace() {
      this.$router.push('../');
      this.$store.commit('setShowModal', false);
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

.home {
  justify-content: center;
  width: 80vw;
  height: 100vh;
  margin: auto;
}

.modal-route {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(00, 00, 00, 0.7);
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