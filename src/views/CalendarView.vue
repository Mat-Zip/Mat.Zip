<template>
  <div class="text-center section">
    <p>calendar</p>
    <v-calendar
      :masks="masks"
      :schedules="$store.state.schedules"
      disable-page-swipe
      is-expanded
      locale="en"
    >
      <template v-slot:day-content="{day, schedules}">
        <span class="day-label">{{ day.day }}</span>
        <div>
          <p v-for="(sche, i) in schedules" :key="i">
            {{sche.name}}
          </p>
        </div>
      </template>
    </v-calendar>

    <p>date picker</p>
    <v-date-picker mode="dateTime" v-model="times" /><br>
    <button @click="cl">log</button>
  </div>
</template>

<script>
export default {
  data() {
    // const year = $store.state.schedules.year;
    // const month = $store.state.schedules.month;
    // const day = $store.state.schedules.day;
    return {
      times: [],
      masks: {
        weekdays: 'WWWW',
      },
      schedules: []
    };
  },
  methods: {
    cl() {
      return console.log(this.times)
    }
  },
};
</script>