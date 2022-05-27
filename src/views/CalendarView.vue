<template>
  <div class="text-center section">
    <v-calendar
      :masks="masks"
      :attributes="schedules"
      disable-page-swipe
      is-expanded
      locale="en"
      is-dark
    >
      <template v-slot:day-content="{day, attributes}">
        <span>{{ day.day }}</span>
        <div>
          <p v-for="(attr, i) in attributes" :key="i">
            {{attr.customData.name}}
            {{attr.customData.date}}
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
        weekdays: 'WWWW',
      },
      schedules: []
    };
  },
  created() {
    const scd = this.$store.state.scds
    for(let i in scd) {
      const schedule= {
        customData: {
          name: scd[i].name,
          date: scd[i].hour+":"+scd[i].minute
        },
        dates: new Date(scd[i].year, scd[i].month, scd[i].date)
      }
      this.schedules.push(schedule);
    }
  }
};
</script>