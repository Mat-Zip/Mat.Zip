<template>
  <div class="home">
    <!-- 받아온 data를 카드로 생성 -->
    <web-card v-for="(place,i) in $store.getters.getPlaces" :key="i" :place="place"></web-card>
    <modal-comp :parents="currentURL">
      <button @click="$router.push(`/detail/${$route.params.id}`).catch(()=>{})"><font-awesome-icon icon="fa-regular fa-chart-bar" /></button>
      <button @click="$router.push(`/map/${$route.params.id}`).catch(()=>{})"><font-awesome-icon icon="fa-regular fa-map" /></button>
      <button><font-awesome-icon icon="fa-regular fa-calendar" /></button>
    </modal-comp>
  </div>
</template>

<script>
import WebCard from '../components/WebCard.vue'
import ModalComp from '../components/ModalComp.vue'

export default {
  name: 'HomeView',
  components: {
    WebCard, ModalComp
  },
  data() {
    return ({
      currentURL: this.$route.path
    })
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