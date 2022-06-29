<template>
    <div class="profile">
        <div class="imgBox">
            <img :src="$store.getters.getUser.photoURL" @error="'https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png'" />
            <div class="filebox">
                <label for="file">Edit</label>
                <input id="file" type="file" @change="handleFile" accept=".gif, .jpg, .png, .jpeg">
            </div>
        </div>
        
        <div class="textBox">
            <h1>{{ $store.getters.getUser.name }} 님 반갑습니다.</h1>
            <p>&emsp;내가 쓴 댓글</p>
            <p>&emsp;좋아요 한 갯수 {{ $store.getters.getLiked.length }}</p>
            <span @click="$router.push('/calendar').catch(() => {})">&emsp;캘린더</span> |
            <span @click="$store.dispatch('logOut')">로그아웃</span> |

            <span @click="withdrawalUser">회원탈퇴</span>
        </div> 
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
        position: relative;
        background-color: #bdbdbd;
        width: 1540px;
        height: 250px;
        display: flex;
        margin: 10px;
    }

    .imgBox {
        position: relative;
        width: 250px;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .profile img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }

    .filebox {
        position: absolute;
        display: block;
        width: 60px;
        height: 30px;
        background-color: #f0f0f0;
        z-index: 200;
        bottom: 25px;
        right: 25px;
        text-align: center;
        line-height: 30px;
        border: 1px solid lightgrey;
        border-radius: 10px;
        font-size: 15px;
    }

    #file {
        display: none;
    }

    .textBox {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 50px;
        text-align: center;
    }

    span {
        cursor: pointer;
    }

    span:hover {
        color : white;
    }

    @media screen and (max-width: 1580px) {
        .profile {
            width: 1020px;
        }
    }

    @media screen and (max-width: 1060px) {
        .profile {
            width: 500px;
        }
    }
</style>