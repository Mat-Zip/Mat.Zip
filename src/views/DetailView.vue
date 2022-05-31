<template>
  <div class="detail">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(img, i) in place.img" :key="i">
        <img class="slide-img" :src="require(`@/assets/카페정보/${place.name}/${img}`)" />
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
      place: this.$store.getters.getPlaces[this.$route.params.id],
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
  height: 100%;
  width: 100%;
}

.swiper {
  width: 45%;
  height: 92.3%;
  border-radius: 20px;
  left: 0.5%;
  top: 2.5%;
}

.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.slide-img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.intro {
  margin-top: 3%;
  width: 50%;
}
</style>
