<template>
  <div class="home">
    <!-- 받아온 data를 카드로 생성 -->
    <web-card v-for="(place,i) in $store.getters.getPlaces" :key="i" :place="place"></web-card>

    <transition name="fade">
      <modal-comp/>
    </transition>
  </div>
</template>

<script>
import WebCard from '../components/WebCard.vue'
import ModalComp from '../components/ModalComp.vue'

export default {
  name: 'HomeView',
  components: {
    WebCard, ModalComp
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
</style>