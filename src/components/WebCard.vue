<template>
  <div class="container">
    <!-- 카드 앞면 -->
    <div class="front card">
      <img class="card-img" :src="require(`@/assets/카페정보/${place.name}/${place.img[0]}`)" alt="">
      <ul class="frontcard-text">
        <li>{{ place.name }}</li>
      </ul>
    </div>
    <!-- 카드 뒷면 -->
    <div class="back card">
      <div class="button-bar">
        <button class="icon_btn" @click.stop="addLike">
          <font-awesome-icon
            icon="fa-regular fa-heart"
            :class="{ likedplace: check }"
          />
        </button>
      </div>
      <table class="backcard-text">
        <tr>
          <td>시그니쳐 : </td>
          <td>{{ place.signature }}</td>
        </tr>
        <tr>
          <td>TEL : </td>
          <td>{{ place.telephone }}</td>
        </tr>
        <tr>
          <td>OPEN : </td>
          <td>{{ place.time }}</td>
        </tr>
      </table>
      <div class="readmore">
        <a @click="showDetail">READ MORE</a>
      </div>

      <div class="overlay"></div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    // props로 장소 객체만 전달받으면 알아서 출력
    place: Object,
  },
  methods: {
    addLike: function () {
      // Liked에 없다면 장소의 아이디를 유저의 데이터에 추가
      if (!this.$store.getters.getLiked.some((el) => this.place.id == el.id)) {
        this.$store.commit("addLikePlace", {
          id: this.place.id
        });
      }
      // Liked에 있다면 삭제
      else {
        this.$store.commit("deleteLikePlace", this.place.id);
      }
    },
    showDetail: function () {
      // 현재 주소가 / 일 경우 생기는 에러 방지
      let currentPath = this.$route.path == "/" ? "" : this.$route.path;
      this.$router.push(`${currentPath}/detail/${this.place.id}`);
      this.$store.commit("setShowModal", true);
    },
  },
  computed: {
    check() {
      // 좋아요 눌렀는지 체크 -> style 변경
      if (
        this.$store.getters.getLiked.some((item) => item.id == this.place.id)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
@import "./WebCard.css";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap");
</style>