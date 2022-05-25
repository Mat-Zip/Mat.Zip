<template>
  <div class="home">
    <!-- 받아온 data를 카드로 생성 -->
    <web-card v-for="(place,i) in $store.getters.getPlaces" :key="i" :place="place"></web-card>
    <!-- 모달창 생성(props=현재 주소) -->
    <modal-comp :parents="currentURL">
      <!-- 모달 컴포넌트의 <slot> 자리에 들어갈 버튼 -->
      <div class="modal-btn">
        <button @click="$router.push(`/detail/${$route.params.id}`).catch(()=>{})"><font-awesome-icon icon="fa-regular fa-chart-bar" /></button>
        <button @click="$router.push(`/map/${$route.params.id}`).catch(()=>{})"><font-awesome-icon icon="fa-regular fa-map" /></button>
        <button><font-awesome-icon icon="fa-regular fa-calendar" /></button>
      </div>
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

.modal-btn {
  position: fixed;
  top:7%;
  left: 10%;
}

</style>