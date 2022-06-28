<template>
    <div class="profile">
        <img :src="$store.getters.getUser.photoURL" @error="'https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png'" />
        <div>
            <p>{{ $store.getters.getUser.name }} 님 반갑습니다.</p>
            <p>내가 쓴 댓글</p>
            <p>좋아요 한 갯수 {{ $store.getters.getLiked.length }}</p>
            <span @click="$router.push('/calendar').catch(() => {})">캘린더</span> |
            <span @click="logOut">로그아웃</span> |
            <span @click="withdrawalUser">회원탈퇴</span>
        </div>
        <input type="file" @change="handleFile">
    </div>
</template>

<script>
export default {
    methods: {
        handleFile(e) {
            if(e.target.files[0]) {
                this.$store.dispatch('updatePhotoURL', URL.createObjectURL(e.target.files[0]));
            }
        },
        withdrawalUser() {
            this.$store.commit("setAlertData", {
                alertText: "정말 탈퇴 하시겠습니까?",
                buttonText1: "취소",
                buttonFunc1: () => {
                    this.$store.commit("setAlertData", null);
                },
                buttonText2: "탈퇴하기",
                buttonFunc2: () => {
                    this.$store.dispatch("withdrawalUser");
                }
            })
        },
        logOut: function () {
        this.$store.dispatch("logOut").then(() => {
            this.$router.push("/").catch(() => {});
            this.$store.commit("setAlertData", {
            alertText: "로그아웃되었습니다",
            buttonText1: "확인",
            buttonFunc1: () => {
                this.$router.push("/").catch(() => {});
                this.$store.commit("setUser", null);
                this.$store.commit("initLikePlace", []);
                this.$store.commit("initSchedule", []);
                this.$store.commit("setAlertData", null);
            },
            });
        })
    },
    }
}
</script>

<style scoped>
    .profile {
        background-color: #bdbdbd;
        width: 100%;
        height: 250px;
        display: flex;
        margin: 10px;
    }

    .profile img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
</style>