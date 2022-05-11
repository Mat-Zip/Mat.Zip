<template>
  <div class="about">
    <web-card v-for="place in $store.getters.getLikedPlaces" :key="place.id" :place="place"></web-card>
    <modal-comp/>
  </div>
</template>

<script>
import WebCard from '../components/WebCard.vue'
import ModalComp from '@/components/ModalComp.vue'

export default {
  components: {
    WebCard, ModalComp
  }
}
</script>

<style scoped>
.about {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 65%;
  margin: auto;
}
</style>
