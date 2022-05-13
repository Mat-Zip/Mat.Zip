<template>
  <div class="text-center section">
    <p>calendar</p>
    <v-calendar
      :masks="masks"
      :attributes="schedules"
      disable-page-swipe
      is-expanded
      locale="en"
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

    <p>date picker</p>
    <v-date-picker mode="dateTime" v-model="times" />
    <br>
    <button @click="log">log</button>
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
  methods: {
    log() {
      return console.log(this.$store.state.scds[0].year)
    },
  },
  created() {
    const scd = this.$store.state.scds
    for(let i in scd) {
      const schedule= {
        customData: {
          name: scd[i].name,
          date: scd[i].hour+":"+scd[i].minute
        },
        dates: new Date(scd[i].year, scd[i].month, scd[i].day)
      }
      this.schedules.push(schedule);
    }
  }
};
</script>