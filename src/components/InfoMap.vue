<template>
    <div class="info_window">
        <img class="info-img" :src="require(`../assets/카페정보/${place.name}/${place.img[0]}`)">
        <div class="info-text">
            <h1>{{ place.name }}</h1> <br>
            <p>{{ place.address }}</p>
            <p>{{ place.telephone }}</p>
            <p>{{ place.time }}</p>
            <p>{{ place.signature }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        place: Object
    }
}
</script>

<style scoped>
.info_window {
  position: absolute;
  overflow: hidden;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 100%;
  z-index: 1;
  background-color: white;
  border: 1px solid black;
  font-family: 'Noto Sans KR', sans-serif;
}
.info-img {
    object-fit: cover;
    height: 300px;
}
.info-text {
    position: absolute;
    bottom: 50px;
    left: 10px;
}
</style>