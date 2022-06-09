<template>
  <div class="login">
    <div class="login_container">
      <img class="login_image" src="../assets/MAT.ZIP-logo.png" alt="" width="150px" height="130px" />
      <form>
        <div class="login_box">
          <input
            class="login_text"
            type="text"
            placeholder="ID(email)"
            v-model="userID"
          />
        </div>
        <div class="login_box">
          <input
            class="login_text"
            type="password"
            placeholder="password(6자이상)"
            v-model="userPW"
          />
        </div>
        <button class="login_btn email" @click.prevent="registerUser()">
          회원가입
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userID: "",
      userPW: "",
    };
  },
  methods: {
    registerUser() {
      this.$store.dispatch("registerUser", {
        userid: this.userID,
        userpw: this.userPW,
      });
    },
  },
};
</script>

<style scoped>
.login {
  width: 80vw;
  height: 80vh;
}

.login_container {
  position: fixed;
  top: 18%;
  left: 30%;
  width: 40%;
  height: 70%;
  background-color: white;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  border-radius: 10px;
  border: 1px solid lightgray;
}
.login_image {
  margin-top: 5%;
}
.login_box {
  width: 100%;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_text {
  width: 80%;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  border: 1px solid lightgray;
}
.login_text::placeholder {
  font-family: "Noto Sans KR", sans-serif;
  color: lightgray;
}
.login_text:focus::placeholder {
  color : salmon;
}
.login_text:focus {
  outline: 1px solid salmon;
}
.login_btn {
  position: absolute;
  width: 80%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #fcfcfc;
  right: 10%;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
}
.email {
  background-color: salmon;
  bottom: 25%;
}
.login_btn:hover {
  background-color: black;
}
</style>