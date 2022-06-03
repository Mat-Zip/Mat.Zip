<template>
  <div class="about">
    <!-- MainView 주석 참조 -->
    <web-card
      v-show="$store.getters.getLikedPlaces"
      v-for="place in $store.getters.getLikedPlaces"
      :key="place.id"
      :place="place"
    ></web-card>
    <div v-if="$store.getters.getLikedPlaces.length == 0">
      좋아요를 눌러주세요!
    </div>
    <modal-comp :parents="currentURL">
      <button
        class="modal_btn"
        @click="
          $router.push(`/mypage/detail/${$route.params.id}`).catch(() => {})
        "
      >
        <font-awesome-icon icon="fa-regular fa-chart-bar" />
      </button>
      <button
        class="modal_btn"
        @click="$router.push(`/mypage/map/${$route.params.id}`).catch(() => {})"
      >
        <font-awesome-icon icon="fa-regular fa-map" />
      </button>
      <button class="modal_btn" @click="toDatePicker">
        <font-awesome-icon icon="fa-regular fa-calendar" />
      </button>
    </modal-comp>
    <a class="up_btn" @click="toTop">맨위로</a>
  </div>
</template>

<script>
import WebCard from "../components/WebCard.vue";
import ModalComp from "../components/ModalComp.vue";

export default {
  components: {
    WebCard,
    ModalComp,
  },
  data() {
    return {
      currentURL: this.$route.path,
    };
  },
  methods: {
    toDatePicker() {
      if (this.$store.getters.getLogged) {
        this.$router
          .push(`/mypage/datepicker/${this.$route.params.id}`)
          .catch(() => {});
      } else {
        this.$store.commit("setAlertData", {
          alertText: "로그인이 필요한 서비스입니다",
          buttonText1: "회원가입",
          buttonFunc1: () => {
            this.$router.push("/resister");
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
    },
    toTop() {
      window.scroll({top: 0, behavior: 'smooth'});
    }
  }
}
</script>

<style scoped>
.about {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.modal_btn {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  background-color: white;
  border: none;
  border-radius: 50%;
}

.up_btn {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: #202020;
}
</style>
