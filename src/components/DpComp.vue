<template>
  <div class="datepicker">
    <v-date-picker
      mode="dateTime"
      v-model="date"
      is-expanded
      is-dark
      :minute-increment="5"
      class="custom_datepicker"
    >
    </v-date-picker>
    <button @click="addSchedule">addSchedule</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
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
    },
  },
};
</script>

<style scoped>
.custom_datepicker {
  border-radius: 20px 20px 0 0;
}

.dp-box {
  height: 15vh;
}
</style>
