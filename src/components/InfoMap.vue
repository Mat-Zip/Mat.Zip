<template>
    <div class="info_window">
        <h1>{{ place.name }}</h1>
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
  top: 10px;
  left: 10px;
  width: 300px;
  height: 100%;
  z-index: 1;
  background-color: white;
}
</style>