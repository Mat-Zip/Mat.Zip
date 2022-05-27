<template>
  <div id="map"></div>
</template>

<script>
export default {
  mounted() {
    if(!window.kakao||!window.kakao.maps)
    {
      const script=document.createElement('script');
      /* global kakao */
      script.src=`//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;
      script.addEventListener('load', ()=>{
        kakao.maps.load(this.initMap);
      });
      document.head.appendChild(script);
    }
    else
    {
      this.initMap();
    }
  },
  data() {
    return ({
      map: null,
      marker: null,
      lat: 37,
      lng: 127
    })
  },
  methods: {
    initMap() {
      const container=document.getElementById('map');
      const options={
        center: new kakao.maps.LatLng(37,127),
        level: 5
      };
      this.map=new kakao.maps.Map(container, options);
      this.displayMarker(this.lat, this.lng)
    },
    displayMarker(lat, lng) {
      if(this.marker!=null)
      {
        this.marker.setMap(null);
      }
      else{
        const mPosition=new kakao.maps.LatLng(lat, lng)
        this.marker=new kakao.maps.Marker({
          map: this.map,
          position: mPosition
        });
      }
    }
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>