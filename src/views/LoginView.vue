<template>
  <div class="login">
    <div class="login-container">
      <img class="login-image" src="../assets/logo.png" alt="" width="30px" />
      <h2>부산인데</h2>
      <h2>부산인데</h2>
      <h2>부산인데2</h2>
      <form>
        <div class="login-box">
          <input
            class="login-text"
            type="text"
            placeholder="ID"
            v-model="userID"
          />
        </div>
        <div class="login-box">
          <input
            class="login-text"
            type="password"
            placeholder="password"
            v-model="userPW"
          />
        </div>
        <button class="login-btn email" @click.prevent="emailLogin()">
          LOGIN
        </button>
        <button class="login-btn google" @click.prevent="googleLogin()">
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
.login-container {
  position: fixed;
  top: 18%;
  left: 30%;
  width: 40%;
  height: 70%;
  background-color: #e0e0e0;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  border-radius: 20px;
  box-shadow: 8px 8px 10px gray;
}
.login-image {
  margin-top: 10%;
  margin-bottom: 5%;
}
.login-box {
  width: 100%;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-text {
  width: 80%;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  box-shadow: 4px 4px 5px gray;
  border: 1px solid #fcfcfc;
}
.login-btn {
  position: absolute;
  width: 80%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #fcfcfc;
  right: 10%;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  box-shadow: 4px 4px 5px gray;
}
.email {
  background-image: linear-gradient(to bottom, black, green);
  bottom: 25%;
}
.google {
  background-image: linear-gradient(to bottom, black, blue);
  bottom: 15%;
}
</style>