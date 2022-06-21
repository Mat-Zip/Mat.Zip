<template>
  <div class="home">
    <div class="container">
      <banner-comp class="banner" />
      <!-- 받아온 data를 카드로 생성 -->
      <web-card
        class="web-card"
        v-for="(place, i) in $store.getters.getPlaces"
        :key="i"
        :place="place"
      ></web-card>
      <!-- 모달창 생성(props=현재 주소) -->
      <modal-comp :parents="currentURL">
        <!-- 모달 컴포넌트의 <slot> 자리에 들어갈 버튼 -->
        <button
          class="modal_btn"
          @click="$router.push(`/detail/${$route.params.id}`).catch(() => {})"
          :class="detail"
        >
          <font-awesome-icon icon="fa-regular fa-chart-bar" />
        </button>
        <button
          class="modal_btn"
          @click="$router.push(`/map/${$route.params.id}`).catch(() => {})"
          :class="map"
        >
          <font-awesome-icon icon="fa-regular fa-map" />
        </button>
        <button class="modal_btn" @click="toDatePicker" :class="datepicker">
          <font-awesome-icon icon="fa-regular fa-calendar" />
        </button>
      </modal-comp>
      <a v-show="isToTop" class="up_btn" @click="toTop"
        ><font-awesome-icon icon="fa-regular fa-square-caret-up"
      /></a>
    </div>
  </div>
</template>

<script>
import WebCard from "../components/WebCard.vue";
import ModalComp from "../components/ModalComp.vue";
import BannerComp from "../components/BannerComp.vue";

export default {
  name: "HomeView",
  components: {
    WebCard,
    ModalComp,
    BannerComp,
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
          .push(`/datepicker/${this.$route.params.id}`)
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
      const cards = document.querySelectorAll(".web-card");
      for (const card of cards) {
        if (!card.classList.contains("show")) {
          if (window.innerHeight > card.getBoundingClientRect().top + 200) {
            card.classList.add("show");
          }
        }
      }
    },
  },
  computed: {
    isToTop() {
      return !(
        this.$store.getters.getShowSideMenu || this.$store.getters.getShowModal
      );
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
    this.scrollEvent();
    window.addEventListener("scroll", this.scrollEvent);
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}

.container {
  width: 1560px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.banner {
  margin: 10px;
}

.web-card {
  opacity: 0;
  transition: all 0.5s ease;
  margin: 10px;

  width: 500px;
  height: 500px;
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

  /* .banner {
    } */

  /* .web-card {
  } */
}

.web-card.show {
  opacity: 1;
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

.now {
  color: salmon;
}
</style>
