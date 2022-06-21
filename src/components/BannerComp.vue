<template>
  <div class="banner">
    <img class="bimg" :src="require(`../assets/banner/ban1.jpg`)" />
    <div class="bintro">
      <p class="title">요즘, 어디가 핫해?</p>
      <p class="detail">
        친구들과 놀던, 연인과 데이트를 하던,<br />
        '뭐 먹지?'라는 고민은 접어두세요.<br />
        Mat.Zip이 해결해 드릴게요!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getRandomNum() {
      const randomNum = Math.random();

      return console.log(randomNum);
    },
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 250px;
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

@media screen and (max-width: 1060px) {
  .banner {
    justify-content: center;
    width: 500px;
  }

  .bintro {
    position: absolute;
    width: 100%;
    text-align: center;
  }

  .title {
    font-size: 40px;
  }

  .detail {
    font-size: 16px;
  }
}
</style>
