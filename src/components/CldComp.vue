<template>
  <div class="cld-comp">
    <v-calendar
      :masks="masks"
      :attributes="schedules"
      disable-page-swipe
      locale="kr"
      is-expanded
      :class="currentClass"
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
  props: {
    isRoutingDpView: Boolean,
  },
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
  computed: {
    currentClass() {
      return this.isRoutingDpView ? "cld_dpview" : "cld_view";
    },
  },
};
</script>

<style scoped>
.cld_dpview {
  height: 70vh;
  border-radius: 0 20px 20px 0;
}

.cld_view {
  border-radius: 20px;
}

.cld-dates {
  width: 12vh;
  height: 12vh;
  overflow: auto;
}

.cld-dates::-webkit-scrollbar {
  display: none;
}

.cld-sche {
  overflow: hidden;
}
</style>
