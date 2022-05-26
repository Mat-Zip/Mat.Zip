<template>
    <!-- in component -->
<naver-map
  :zoom="16"
  :center="$store.getters.getLocations[$route.params.id].position"
  style="width: 100%; height: 100%;"
  :options="{
        zoomControl: true,
        zoomControlOptions: {
            style: this.$navers.naver.maps.ZoomControlStyle.SMALL,
            position: this.$navers.naver.maps.Position.TOP_RIGHT
        }
    }"
>
  <naver-map-marker v-for="(option, i) in markerOptions" :key="i" :options="option.imageIconScaledSize"/>
</naver-map>
</template>

<script>
// script
export default {
  name: 'App',
  data() {
    return {
      dialogVisible: false,
      markerOptions: []
    }
  },
  created() {
    for(let i in this.$store.getters.getLocations)
    {
      const markerOption={
        imageIconScaledSize: {
          position: this.$store.getters.getLocations[i].position,
          icon: {
            url: '/favicon.ico',
            size: { width: 20, height: 20},
            scaledSize: { width: 20, height: 20},
            origin: { x:0, y:0 },
            anchor: { x: 10, y: 20 }
          }
        }
      }
      this.markerOptions.push(markerOption);
    }
  }
};
</script>