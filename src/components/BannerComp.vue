<template>
  <div class="banner">
    <img class="bimg" :src="require(`../assets/banner/ban1.jpg`)" />
    <div class="bintro">
      <p class="title">요즘, 어디가 핫해?</p>
      <p class="detail">
        친구들과 놀던, 연인과 데이트를 하던,<br />
        '뭐 먹지?'라는 고민은 접어두세요.<br />
        mat.zip이 해결해 드릴게요!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getRandom() {
      const num = Math.random();
      
      return console.log(num);
    },
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 250px;
  margin: 10px;
  background-color: #bdbdbd;

  display: flex;
}

.bimg {
  width: 500px;
  height: 100%;
  object-fit: cover;
}

.bintro {
  margin: 20px;
}

.title {
  color: white;
  font-size: 50px;
  margin-bottom: 20px;
}

.detail {
  color: white;
  font-size: 20px;
}

@media screen and (max-width: 1040px) {
  .banner {
    width: 500px;
  }

  .bintro {
    position: absolute;
  }
}
</style>
