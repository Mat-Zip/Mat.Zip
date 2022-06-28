<template>
  <div class="alert_wrap" @click.self="$store.commit('setAlertData', null)">
    <div class="alert_box">
      <h2 class="alert_text">{{ alertData.alertText }}</h2>
      <div class="alert_btnbox">
        <button
          class="alert_btn"
          v-if="alertData.buttonFunc1"
          @click="alertData.buttonFunc1"
        >
          {{ alertData.buttonText1 }}
        </button>
        <button
          class="alert_btn"
          v-if="alertData.buttonFunc2"
          @click="alertData.buttonFunc2"
        >
          {{ alertData.buttonText2 }}
        </button>
      </div>
    </div>
    <button class="alert_close" @click="$store.commit('setAlertData', null)">
        X
    </button>
  </div>
</template>

<script>
export default {
  props: {
    alertData: Object,
  },
};
</script>

<style scoped>
.alert_wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2.5px);
  background-color: rgba(0, 0, 0, 0.35);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.alert_box {
  width: 350px;
  height: 200px;
  background-color: white;
  border: 1px solid black;
  color: black;
  border: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: -60px;
}
.alert_close {
  position: relative;
  top: -115px;
  right: 25px;
  border: none;
  background-color: white;
  color: #bdbdbd;
  font-size: 18px;
  cursor: pointer;
}
.alert_close:hover {
  color: black;
}
.alert_text {
  font-family: "Noto Sans KR", sans-serif;
  left: 5%;
  width: 100%;
  text-align: center;
  margin-top: 15px;
  word-break: normal;
}

.alert_btnbox {
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
}
.alert_btn {
  border: none;
  background-color: lightgray;
  color: black;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
}

.alert_btn:hover {
  background-color: #bdbdbd;
  color: white;
}
</style>
