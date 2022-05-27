<template>
  <div class="datepicker">
    <v-date-picker
      mode="dateTime"
      v-model="date"
      is-expanded
      is-dark
      :minute-increment="5"
    />
    <select v-model="selectedPlace">
      <option v-for="p in placeList" :key="p.id">
        {{ p.count }}
        {{ p.id }}
        {{ p.name }}
      </option>
    </select>
    <br />
    <button @click="addSchedule">addSchedule</button>
    <br />
    <button @click="log">console.log</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      placeList: [],
      selectedPlace: "",
    };
  },
  methods: {
    addSchedule() {
      const name = this.selectedPlace.name;
      const year = this.date.getFullYear();
      const month = this.date.getMonth() + 1;
      const date = this.date.getDate();
      const hour = this.date.getHours();
      const minute = this.date.getMinutes();

      const scheInfo = { name, year, month, date, hour, minute };

      return console.log(scheInfo);
    },
    log() {
      return console.log();
    },
  },
  created() {
    const plc = this.$store.state.places;
    for (let i in plc) {
      const place = {
        count: plc.length,
        id: plc[i].id,
        name: plc[i].name,
      };
      this.placeList.push(place);
    }
  },
};
</script>
