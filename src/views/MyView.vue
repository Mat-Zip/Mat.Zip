<template>
  <div class="about">
    <profile-comp></profile-comp>
    <div class="blanked" v-if="$store.getters.getLiked.length == 0">
        <p>좋아요 한 장소가 없습니다</p>
        <button @click="$router.push('/')">보러 가기</button>
    </div>
    <div class="container" v-if="$store.getters.getLiked.length>0">
      <!-- MainView 주석 참조 -->
      <web-card
        class="web-card"
        v-for="place in $store.getters.getLiked"
        :key="place.id"
        :place="place"
      ></web-card>
      
      <modal-comp :parents="currentURL">
        <button
          class="modal_btn"
          @click="
            $router.push(`/mypage/detail/${$route.params.id}`).catch(() => {})
          "
          :class="detail"
        >
          <font-awesome-icon icon="fa-regular fa-chart-bar" />
        </button>
        <button
          class="modal_btn"
          @click="
            $router.push(`/mypage/map/${$route.params.id}`).catch(() => {})
          "
          :class="map"
        >
          <font-awesome-icon icon="fa-regular fa-map" />
        </button>
        <button class="modal_btn" @click="toDatePicker" :class="datepicker">
          <font-awesome-icon icon="fa-regular fa-calendar" />
        </button>
      </modal-comp>
    </div>
    <transition name="slide">
      <div v-show="isToTop" class="up_btn" @click="toTop">
        <font-awesome-icon icon="fa-regular fa-arrow-alt-circle-up"/>
      </div>
    </transition>
  </div>
</template>

<script>
import WebCard from "../components/WebCard.vue";
import ModalComp from "../components/ModalComp.vue";
import ProfileComp from '@/components/ProfileComp.vue';

export default {
  components: {
    WebCard,
    ModalComp,
    ProfileComp
  },
  data() {
      return {
        currentURL: this.$route.path,
        scrolled: false
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
    showUpBtn() {
      if(window.scrollY>400) {
        this.scrolled=true;
      }
      else {
        this.scrolled=false;
      }
    }
  },
  computed: {
    isToTop() {
      return !(
        this.$store.getters.getShowSideMenu || this.$store.getters.getShowModal
      ) && this.scrolled;
    },
    detail() {
      return this.$route.path.includes("detail") ? "now" : "";
    },
    map() {
      return this.$route.path.includes("map") ? "now" : "";
    },
    datepicker() {
      return this.$route.path.includes("datepicker") ? "now" : "";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.showUpBtn);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.showUpBtn);
  }
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.container {
  width: 1560px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.web-card {
  transition: all 0.5s ease;
  margin: 10px;

  width: 500px;
  height: 500px;
}


.blanked {
  margin-top: 11vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.blanked p {
  width: 100%;
  font-size: 25px;
  text-align: center;
  margin: 15px;
}

.blanked button {
  border: none;
  padding: 10px 20px;
  background-color: lightgray;
  color: black;
  cursor: pointer;
}

.blanked button:hover {
  background-color: #bdbdbd;
  color: white;
}

@media screen and (max-width: 1580px) {
  .container {
    width: 1040px;
  }
}

@media screen and (max-width: 1060px) {
  .home {
    overflow: hidden;
  }

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
  bottom: 0;
  right: 0;
  margin: 20px;
  font-size: 30px;
  cursor: pointer;
  color: #bdbdbd;
}

.up_btn:hover {
  color: gray;
}

.slide-enter-active {
  transition: all 0.5s ease-out;
}
.slide-leave-active {
  transition: all 0.35s ease-in;
}
.slide-enter,
.slide-leave-to {
  bottom: -40px;
}
.slide-enter-to,
.slide-leave {
  bottom: 0;
}

.now {
  color: salmon;
}
</style>
