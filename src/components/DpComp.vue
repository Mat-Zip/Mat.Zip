<template>
  <div class="dp-comp">
    <v-date-picker
      mode="dateTime"
      v-model="date"
      is-dark
      :minute-increment="5"
      is-expanded
      class="dp_view"
    >
    </v-date-picker>
    <button @click="addSchedule" class="add-btn">일정 추가</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      width: 0
    };
  },
  methods: {
    addSchedule() {
      const id = this.$store.getters.getSchedules.length;
      const name = this.$store.getters.getPlaces[this.$route.params.id].name;
      const year = this.date.getFullYear();
      const month = this.date.getMonth();
      const date = this.date.getDate();
      const hour = this.date.getHours();
      const minute = this.date.getMinutes();

      const scheInfo = { id, name, year, month, date, hour, minute };

      this.$store.commit("addSchedule", scheInfo);

      const newAlert = {
        alertText: "일정이 추가되었습니다",
        buttonText1: "돌아가기",
        buttonFunc1: () => {
          this.$store.commit("setAlertData", null);
        },
        buttonText2: "확인하기",
        buttonFunc2: () => {
          this.$router.push("/calendar");
          this.$store.commit("setShowModal", false);
          this.$store.commit("setAlertData", null);
        },
      };

      this.$store.commit("setAlertData", newAlert);
    },
  },
};
</script>

<style scoped>
.dp_view {
  height: 70vh;
  border-radius: 0;
}

.add-btn {
  position: absolute;
  top: 330px;
  left: 33px;
  z-index: 1;

  padding: 8px;
  background-color: rgb(74, 85, 104);
  border-radius: 4px;
  border-style: none;
  color: white;
}
</style>
