<template>
  <div class="about">
    <web-card v-for="place in $store.getters.getLikedPlaces" :key="place.id" :place="place"></web-card>
    <modal-comp :parents="currentURL">
      <button @click="$router.push(`/mypage/detail/${$route.params.id}`).catch(()=>{})"><font-awesome-icon icon="fa-regular fa-chart-bar" /></button>
      <button @click="$router.push(`/mypage/map/${$route.params.id}`).catch(()=>{})"><font-awesome-icon icon="fa-regular fa-map" /></button>
      <button><font-awesome-icon icon="fa-regular fa-calendar" /></button>
    </modal-comp>
  </div>
</template>

<script>
import WebCard from '../components/WebCard.vue'
import ModalComp from '@/components/ModalComp.vue'

export default {
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
.about {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80vw;
  height: 100vh;
  margin: auto;
}
</style>
