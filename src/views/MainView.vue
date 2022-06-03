<template>
  <div class="home">
<<<<<<< HEAD
    <div class="container">
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
        >
          <font-awesome-icon icon="fa-regular fa-chart-bar" />
        </button>
        <button
          class="modal_btn"
          @click="$router.push(`/map/${$route.params.id}`).catch(() => {})"
        >
          <font-awesome-icon icon="fa-regular fa-map" />
        </button>
        <button class="modal_btn" @click="toDatePicker">
          <font-awesome-icon icon="fa-regular fa-calendar" />
        </button>
      </modal-comp>
    </div>
=======
    <!-- 받아온 data를 카드로 생성 -->
    <web-card v-for="(place,i) in $store.getters.getPlaces" :key="i" :place="place"></web-card>
    <!-- 모달창 생성(props=현재 주소) -->
    <modal-comp :parents="currentURL">
      <!-- 모달 컴포넌트의 <slot> 자리에 들어갈 버튼 -->
      <button class="modal_btn" @click="$router.push(`/detail/${$route.params.id}`).catch(()=>{})"><font-awesome-icon icon="fa-regular fa-chart-bar" /></button>
      <button class="modal_btn" @click="$router.push(`/map/${$route.params.id}`).catch(()=>{})"><font-awesome-icon icon="fa-regular fa-map" /></button>
      <button class="modal_btn" @click="toDatePicker"><font-awesome-icon icon="fa-regular fa-calendar" /></button>
    </modal-comp>
    <a class="up_btn" @click="toTop">맨위로</a>
>>>>>>> 58fae9480452dc7c519f3b2a5408d8530f192fa3
  </div>
</template>

<script>
import WebCard from "../components/WebCard.vue";
import ModalComp from "../components/ModalComp.vue";

export default {
  name: "HomeView",
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
<<<<<<< HEAD
  },
};
=======
    toTop() {
      window.scroll({top: 0, behavior: 'smooth'});
    }
  }
}
>>>>>>> 58fae9480452dc7c519f3b2a5408d8530f192fa3
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
  justify-content: left;
}

.modal_btn {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  background-color: white;
  border: none;
  /* border-radius: 50%;
  opacity: 0.7; */
}
<<<<<<< HEAD
</style>
=======

.up_btn {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: #202020;
}
</style>
>>>>>>> 58fae9480452dc7c519f3b2a5408d8530f192fa3
