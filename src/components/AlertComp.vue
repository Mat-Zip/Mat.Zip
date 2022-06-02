<template>
    <div class="alert_wrap">
        <div class="alert">
        <button @click="$store.commit('setAlertData', null)">X</button>
        <h1>{{ alertData.alertText }}</h1>
        <button v-if="alertData.buttonFunc1" @click="alertData.buttonFunc1">{{ alertData.buttonText1 }}</button>
        <button v-if="alertData.buttonFunc2" @click="alertData.buttonFunc2">{{ alertData.buttonText2 }}</button>
    </div>
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
.alert_wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(2px);
}

.alert {
    position: absolute;
    top: 35%;
    left: 35%;
    width: 30%;
    height: 30%;
    text-align: center;
    background-color: black;
    color: white;
}
</style>