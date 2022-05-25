<template>
  <div class="detail">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(img, i) in $store.state.places[$route.params.id].img" :key="i">
        <img :src="require(`@/assets/카페정보/${$store.state.places[$route.params.id].name}/${img}`)"/>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="intro">
      <h1>{{ $route.params.id }}</h1>
      <h1>title 블라블라</h1>
      <p>intro 블라블라블라블라블라블라블라블라블라블라블라</p>
      <button @click="cl">console.log</button>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: { swiper, swiperSlide },
  data() {
    return {
      index: 0,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    cl() {
      console.log(this.place[this.$route.params.id].img);
    },
  }
};
</script>

<style scoped>
.detail {
  display: flex;
}

.swiper {
  width: 50%;
  height: 109.3vh;
}

/* .swiper .swiper-slide {
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.intro {
  width: 50%;
}
</style>
