<template>
    <div class="alert_wrap">
        <div class="alert_box">
            <button class="alert_close" @click="$store.commit('setAlertData', null)">X</button>
            <h2 class="alert_text">{{ alertData.alertText }}</h2>
            <div class="alert_btnbox">
                <button class="alert_btn" v-if="alertData.buttonFunc1" @click="alertData.buttonFunc1">{{ alertData.buttonText1 }}</button>
                <button class="alert_btn" v-if="alertData.buttonFunc2" @click="alertData.buttonFunc2">{{ alertData.buttonText2 }}</button>
            </div>
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

.alert_box {
    position: absolute;
    top: 200px;
    left: 40%;
    width: 350px;
    height: 200px;
    background-color: white;
    border: 1px solid black;
    border-radius:20px;
    color: black;
}
.alert_close {
    position: absolute;
    top : 5px;
    right: 5px;
    border : none;
    background-color: white;
    border-radius:20px;
}
.alert_text {
    position: absolute;
    top : 30%;
    font-family: 'Noto Sans KR', sans-serif;
    left: 5%;
}

.alert_btnbox {
    position: absolute;
    bottom: 5px;
    right: 10px;
}
.alert_btn {
    margin-right: 10px;
}
</style>