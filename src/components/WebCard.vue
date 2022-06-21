<template>
  <div class="card">
    <!-- 카드 정보 -->
    <span class="cimg">
      <img
        class="i1"
        :src="require(`@/assets/place/${place.name}/${place.img[0]}`)"
      />
    </span>
    <span class="cinfo">
      <p class="i1">{{ place.category }}</p>
      <p class="i2">{{ place.name }}</p>
    </span>

    <!-- 카드 호버링 시 정보 -->
    <div class="card-hover" @click="showDetail">
      <span class="btn-bar">
        <button class="like-btn" @click.stop="addLikeDB">
          <font-awesome-icon v-show="!check" icon="fa-regular fa-heart" />
          <font-awesome-icon
            v-show="check"
            icon="fa-solid fa-heart"
            style="color: salmon"
          />
        </button>
      </span>
      <span class="hinfo">
        <p class="i1">SIGNATURE : {{ place.signature }}</p>
        <p class="i2">TEL : {{ place.telephone }}</p>
        <p class="i3">OPEN : {{ place.time }}</p>
      </span>
      <span class="readmore">더 보기</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // props로 장소 객체만 전달받아서 출력
    place: Object,
  },
  methods: {
    showDetail: function () {
      // 현재 주소가 / 일 경우 생기는 에러 방지
      let currentPath = this.$route.path == "/" ? "" : this.$route.path;
      this.$router.push(`${currentPath}/detail/${this.place.id}`);
      this.$store.commit("setShowModal", true);
    },
    addLikeDB() {
      if(this.$store.getters.getLogged) {
        if(this.$store.getters.getLiked.some((el) => el.id==this.place.id)) {
          this.$store.dispatch('deleteLikeDB', this.place.id);
        }
        else {
          this.$store.dispatch('addLikeDB', this.place)
        }
      }
      else {
        this.$store.commit("setAlertData", {
          alertText: "로그인이 필요한 서비스입니다",
          buttonText1: "회원가입",
          buttonFunc1: () => {
            this.$router.push("/register");
            this.$store.commit("setShowModal", false);
            this.$store.commit("setAlertData", null);
          },
          buttonText2: "로그인",
          buttonFunc2: () => {
            this.$router.push("/login");
            this.$store.commit("setShowModal", false);
            this.$store.commit("setAlertData", null);
          },
        });
      }
    }
  },
  computed: {
    check() {
      // 좋아요 눌렀는지 체크 -> style 변경
      return this.$store.getters.getLiked.some((el) => el.id==this.place.id);
    },
  },
};
</script>

<style scoped>
@import "./WebCard.css";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap");
</style>
