<template>
  <div class="login">
    <div class="login_container">
      <img class="login_image" src="../assets/logo.jpg" width="150px" height="130px" />
      <form>
        <div class="login_box">
          <input
            class="login_text"
            type="text"
            placeholder="ID"
            v-model="userID"
          />
        </div>
        <div class="login_box">
          <input
            class="login_text"
            type="password"
            placeholder="password"
            v-model="userPW"
          />
        </div>
        <button class="login_btn email" @click.prevent="emailLogin()">
          LOGIN
        </button>
        <button class="login_btn google" @click.prevent="googleLogin()">
          Google Login
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
    emailLogin() {
      this.$store.dispatch("emailLogin", {
        userid: this.userID,
        userpw: this.userPW,
      });
    },
    googleLogin() {
      this.$store.dispatch("googleLogin");
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
.login_btn {
  position: absolute;
  width: 80%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid lightgray;
  right: 10%;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
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
.email {
  background-color: salmon;
  bottom: 25%;
}
.google {
  background-color: white;
  color: salmon;
  border: 1px solid salmon;
  bottom: 15%;
}
.login_btn:hover {
  background-color: black;
  color: white;
  border: 0;
}
</style>