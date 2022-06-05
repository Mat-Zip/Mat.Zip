<template>
    <div class="alert_wrap" @click.self="$store.commit('setAlertData', null)">
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
    backdrop-filter: blur(2.5px);
    background-color: rgba(0,0,0,0.35);
    border: none;
}

.alert_box {
    position: absolute;
    top: 30%;
    left: 40%;
    width: 350px;
    height: 200px;
    background-color: white;
    border: 1px solid black;
    color: black;
    border: none;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.35);
}
.alert_close {
    position: absolute;
    top : 8px;
    right: 8px;
    border : none;
    background-color: white;
    font-size: 16px;
}
.alert_text {
    position: absolute;
    top : 30%;
    font-family: 'Noto Sans KR', sans-serif;
    left: 5%;
}

.alert_btnbox {
    position: absolute;
    width: 250px;
    bottom: 20px;
    left: 50px;
    display: flex;
    justify-content: center;
}
.alert_btn {
    border: none;
    background-color: lightgray;
    color: black;
    padding: 10px 20px;
    margin: 5px;
}

.alert_btn:hover {
    background-color: black;
    color: white;
}
</style>