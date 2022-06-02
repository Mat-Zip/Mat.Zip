<template>
    <div class="alert">
        <button class="alert_close" @click="$store.commit('setAlertData', null)">X</button>
        <h2 class="alert_text">{{ alertData.alertText }}</h2>
        <button v-if="alertData.buttonFunc1" @click="alertData.buttonFunc1">{{ alertData.buttonText1 }}</button>
        <button v-if="alertData.buttonFunc2" @click="alertData.buttonFunc2">{{ alertData.buttonText2 }}</button>
    </div>
</template>

<script>
export default {
    props: {
        alertData: Object
    }
}
</script>

<style scoped>
.alert {
    position: fixed;
    top: 35%;
    left: 35%;
    width: 35%;
    height: 25%;
    text-align: center;
    background-color: white;
    border: 1px solid black;
    border-radius:20px;
    color: black;
}
.alert_close {
    position: absolute;
    right: 0;
    border : none;
    background-color: white;
    border-radius:20px;
}
.alert_text {
    position: absolute;
    top : 30%;
    font-family: 'Noto Sans KR', sans-serif;
    white-space: pre-line;
}
</style>