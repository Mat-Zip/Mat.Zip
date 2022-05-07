<template>
  <div class="home">
    <web-card v-for="(place,i) in $store.state.places" :key="i" :place="place"></web-card>
  </div>
</template>

<script>
import WebCard from '../components/WebCard.vue'

export default {
  name: 'HomeView',
  components: {
    WebCard
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 65%;
  margin: auto;
}
</style>