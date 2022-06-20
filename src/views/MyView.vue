<template>
  <div class="about">
    <div class="blanked" v-if="$store.getters.getLikedPlaces.length == 0">
        <p>좋아요 한 장소가 없습니다</p>
        <button @click="$router.push('/')">보러 가기</button>
    </div>
    <div class="container" v-if="$store.getters.getLikedPlaces.length>0">
      <!-- MainView 주석 참조 -->
      <web-card
        class="web-card"
        v-for="place in $store.getters.getLikedPlaces"
        :key="place.id"
        :place="place"
      ></web-card>
      
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
          @click="
            $router.push(`/mypage/map/${$route.params.id}`).catch(() => {})
          "
        >
          <font-awesome-icon icon="fa-regular fa-map" />
        </button>
        <button class="modal_btn" @click="toDatePicker">
          <font-awesome-icon icon="fa-regular fa-calendar" />
        </button>
      </modal-comp>
    </div>
    <a v-show="isToTop" class="up_btn" @click="toTop"
      ><font-awesome-icon icon="fa-regular fa-square-caret-up"
    /></a>
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
      window.scroll(0, 0);
    },
    scrollEvent() {
      const cards = document.querySelectorAll('.web-card');
      for(const card of cards) {
        if(!card.classList.contains('show')) {
          if(window.innerHeight > card.getBoundingClientRect().top + 200) {
            card.classList.add('show');
          }
        }
      }
    }
  },
  computed: {
    isToTop() {
      return !(
        this.$store.getters.getShowSideMenu || this.$store.getters.getShowModal
      );
    },
  },
  mounted() {
    this.scrollEvent();
    window.addEventListener('scroll', this.scrollEvent);
  },
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
}

.container {
  width: 1560px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.web-card {
  opacity: 0;
  transition: all 0.5s ease;
}

.web-card.show {
  opacity: 1;
}

.blanked {
  margin-top: 11vh;
  width: 350px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.blanked p {
  font-size: 25px;
  text-align: center;
  margin: 15px;
}

.blanked button {
  border: none;
  padding: 10px 20px;
  background-color: lightgray;
  color: black;
}

.blanked button:hover {
  background-color: #bdbdbd;
  color: white;
}

@media screen and (max-width: 1580px) {
  .container {
    width: 1060px;
  }
}

@media screen and (max-width: 1060px) {
  .container {
    width: 540px;
  }
}

.modal_btn {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  background-color: white;
  border: none;
  cursor: pointer;
}

.up_btn {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
}
</style>
