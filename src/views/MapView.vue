<template>
    <!-- in component -->
<naver-map
  :zoom="16"
  :center="markerOptions.imageIconScaledSize.position"
  style="width: 100%; height: 100%;"
  :options="{
        zoomControl: true,
        zoomControlOptions: {
            style: this.$navers.naver.maps.ZoomControlStyle.SMALL,
            position: this.$navers.naver.maps.Position.TOP_RIGHT
        }
    }"
>
  <naver-map-marker :options="markerOptions.imageIconScaledSize" />
</naver-map>
</template>

<script>
// script
export default {
  name: 'App',
  data() {
    return {
      dialogVisible: false,
      markerOptions: {
        imageIconScaledSize: {
          position: { lat: 37.3237362, lng: 126.9431624 },
          icon: {
            url: '/favicon.ico',
            size: { width: 20, height: 20},
            scaledSize: { width: 20, height: 20},
            origin: { x:0, y:0 },
            anchor: { x: 10, y: 20 }
          }
        }
      }
    }
  }
};
</script>

<style scoped>
/* in style scss */
.marker-html {
    width: 30px;
    height: 30px;
    position: relative;
    background: white;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    border-radius: 15px;
    border: 1px solid black;
    transition: 0.5s;
  }

.marker-html:hover {
    background-color: black;
    color: white;
    border-color: red;
}
</style>