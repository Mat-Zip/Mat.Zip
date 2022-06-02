<template>
  <div class="dp-comp">
    <v-date-picker
      mode="dateTime"
      v-model="date"
      is-dark
      :minute-increment="5"
      is-expanded
      class="dp"
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
.dp {
  height: 100%;
  border-radius: 0;
}

.add-btn {
  z-index: 1;
}
</style>
