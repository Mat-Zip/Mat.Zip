<template>
  <div class="detail">
    <div class="img">
      <img src="" alt="">
    </div>
    <div class="intro">
      <h1>{{ $route.params.id }}</h1>
      <h1>title 블라블라</h1>
      <p>intro 블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라</p>
    </div>
  </div>
</template>

<style scoped>
.detail {
  display: flex;
}

.img {
  width: 50%;
}
</style>