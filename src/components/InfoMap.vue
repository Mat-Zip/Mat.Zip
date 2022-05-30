<template>
    <div class="info_window">
        <h1>{{ id }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        id: Number
    }
}
</script>

<style scoped>
.info_window {
  position: absolute;
  overflow: hidden;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  z-index: 1;
  background-color: white;
}
</style>