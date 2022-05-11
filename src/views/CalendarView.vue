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
          </p>
        </div>
      </template>
    </v-calendar>

    <p>date picker</p>
    <v-date-picker mode="dateTime" v-model="times" /><br>
    <button @click="log">log</button>
  </div>
</template>

<script>
export default {
  data() {
    // const name = this.$store.state.scds
    // const year = this.$store.state.scds.year
    // const month = this.$store.state.scds.month
    // const day = this.$store.state.scds.day
    return {
      times: [],
      masks: {
        weekdays: 'WWWW',
      },
      schedules: [
        {
          customData: {
            name: "test",
          },
          dates: new Date(2022, 4, 1)
        },
        {
          customData: {
            name: "test",
          },
          dates: new Date(2022, 4, 2)
        },
      ]
    };
  },
  computed: {
    
  },
  methods: {
    log() {
      return console.log(this.$store.state.scds[0].year)
    }
  },
};
</script>