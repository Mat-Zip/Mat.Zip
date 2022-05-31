<template>
  <div class="calendar">
    <v-calendar
      :masks="masks"
      :attributes="schedules"
      disable-page-swipe
      is-expanded
      locale="en"
      class="custom_calendar"
    >
      <template v-slot:day-content="{ day, attributes }">
        <span>{{ day.day }}</span>
        <div class="cld_date_box">
          <p v-for="(attr, i) in attributes" :key="i">
            {{ attr.customData.name }}
            {{ attr.customData.date }}
          </p>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: [],
      masks: {
        weekdays: "WWWW",
      },
      schedules: [],
    };
  },
  created() {
    const scd = this.$store.getters.getSchedules;
    for (let i in scd) {
      const schedule = {
        customData: {
          name: scd[i].name,
          date: scd[i].hour + ":" + String(scd[i].minute).padStart(2, "0"),
        },
        dates: new Date(scd[i].year, scd[i].month, scd[i].date),
      };
      this.schedules.push(schedule);
    }
  },
};
</script>

<style scoped>

.custom_calendar {
  height: 100vh;
  border-radius: 20px;
  font-weight : bold;
}

.cld_date_box {
  height: 15vh;
  font-size: 12px;
  font-weight : normal;
}
</style>
