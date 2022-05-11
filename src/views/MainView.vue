<template>
  <div class="home">
    <!-- 받아온 data를 카드로 생성 -->
    <web-card v-for="(place,i) in $store.getters.getPlaces" :key="i" :place="place"></web-card>

      <modal-comp/>
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

.home {
  justify-content: center;
  width: 80vw;
  height: 100vh;
  margin: auto;
}
</style>