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
      markers: []
    })
  },
  methods: {
    initMap() {
      const centerId=this.$store.getters.getLocations[this.$route.params.id].position;
      const container=document.getElementById('map');
      const options={
        center: new kakao.maps.LatLng(centerId.lat, centerId.lng),
        level: 3
      };
      this.map=new kakao.maps.Map(container, options);
      this.displayMarker()
    },
    displayMarker() {
      if(this.markers.length>0)
      {
        for(let i in this.markers)
        {
          this.markers[i].setMap(null);
        }
      }
      else
      {
        for(let item of this.$store.getters.getLocations)
        {
          const markerPosition=new kakao.maps.LatLng(item.position.lat, item.position.lng);
          const markerImage=new kakao.maps.MarkerImage('/favicon.ico', new kakao.maps.Size(25,25), {offset: new kakao.maps.Point(12,25)});
          const newMarker=new kakao.maps.Marker({
            map: this.map,
            position: markerPosition,
            image: markerImage
          });
          
          this.markers.push(newMarker);
        }
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