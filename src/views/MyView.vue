<template>
  <div class="about">
    <!-- MainView 주석 참조 -->
    <web-card v-show="$store.getters.getLikedPlaces" v-for="place in $store.getters.getLikedPlaces" :key="place.id" :place="place"></web-card>
    <div v-show="$store.getters.getLikedPlaces.length==0">좋아요를 눌러주세요!</div>
    <modal-comp :parents="currentURL">
      <button class="icon_btn" @click="$router.push(`/mypage/detail/${$route.params.id}`).catch(()=>{})"><font-awesome-icon icon="fa-regular fa-chart-bar" /></button>
      <button class="icon_btn" @click="$router.push(`/mypage/map/${$route.params.id}`).catch(()=>{})"><font-awesome-icon icon="fa-regular fa-map" /></button>
      <button class="icon_btn" @click="$router.push(`/datepicker/${$route.params.id}`).catch(()=>{})"><font-awesome-icon icon="fa-regular fa-calendar" /></button>
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
.icon_btn {
    width: 40px;
    height: 40px;
    font-size: 20px;
    background-color: white;
    border: 1px solid black;
    border-radius: 50%;
    box-shadow:  4px 4px 5px #202020;
    margin: 5px 5px;
    color: black;
}
</style>
