<template>
  <div class="datepicker">
    <v-date-picker
      mode="dateTime"
      v-model="date"
      is-expanded
      is-dark
      :minute-increment="5"
      class="custom-datepicker"
    >
    </v-date-picker>

    <select v-model="selectedPlace">
      <option v-for="p in placeList" :key="p.id">
        {{ p.name }}
      </option>
    </select>
    <button @click="addSchedule">addSchedule</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      placeList: [],
      selectedPlace: [],
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
        this.$store.state.scds.push(scheInfo);
        alert("일정이 추가되었습니다");
      } else {
        alert("장소를 선택하세요");
        console.log(this.$route.params.id);
      }
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

<style scoped>
.custom-datepicker {
  border-radius: 0px;
}

.dp-box {
  height: 15vh;
}
</style>
