<template>
    <div class="alert">
        <h1>{{ alertData.text }}</h1>
        <button v-if="alertData.func1" @click="alertData.func1">{{ alertData.funcName1 }}</button>
        <button v-if="alertData.func2" @click="alertData.func2">{{ alertData.funcName2 }}</button>
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
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    text-align: center;
    background-color: black;
    color: white;
}
</style>