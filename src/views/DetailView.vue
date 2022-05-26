<template>
  <div class="detail">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(img, i) in place.img" :key="i">
        <img :src="require(`@/assets/카페정보/${place.name}/${img}`)" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="intro">
      <h1>{{ place.title }}</h1>
      <p>{{ place.intro }}</p>
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
      place: this.$store.state.places[this.$route.params.id],
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

.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.intro {
  width: 50%;
}
</style>
