<template>
  <div class="cld-comp">
    <v-calendar
      :masks="masks"
      :attributes="schedules"
      disable-page-swipe
      locale="kr"
      is-expanded
      class="cld"
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="cld-dates">
          <span>{{ day.day }}</span>
          <div class="cld-sche">
            <div v-for="(attr, i) in attributes" :key="i">
              <h4>{{ attr.customData.name }}</h4>
              <p>{{ attr.customData.date }}</p>
            </div>
          </div>
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
.cld {
  height: 100%;
  border-radius: 0px;
}

.cld-dates {
  width: 16vh;
  height: 12vh;
  overflow: hidden;
}

.cld-sche {
  flex-shrink: 1;
  overflow-x: auto;
  overflow-y: auto;
}
</style>
