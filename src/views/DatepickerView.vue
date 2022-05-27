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
      const id = this.$store.state.scds.length;
      const name = this.selectedPlace;
      const year = this.date.getFullYear();
      const month = this.date.getMonth();
      const date = this.date.getDate();
      const hour = this.date.getHours();
      const minute = this.date.getMinutes();

      const scheInfo = { id, name, year, month, date, hour, minute };

      if (name != "") {
        return this.$store.state.scds.push(scheInfo);

      } else {
        alert("장소 선택하셈여");
      }
    },
    log() {
      return console.log(this.$store.state.scds.length);
    },
  },
  created() {
    const plc = this.$store.state.places;
    for (let i in plc) {
      const place = {
        id: plc[i].id,
        name: plc[i].name,
      };
      this.placeList.push(place);
    }
  },
};
</script>
