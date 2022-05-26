<template>
  <div class="datepicker">
    <v-date-picker mode="dateTime" v-model="times" />
    <button @click="log">log</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: ""
    }
  },
  methods: {
    log() {
      return console.log(this.times)
    },
  } 
}
</script>