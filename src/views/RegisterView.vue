<template>
  <div class="login">
    <div class="login_container">
      <img class="login_image" src="../assets/logo.png" alt="" width="30px" />
      <h2>회원가입인데</h2>
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
  background-color: #e0e0e0;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  border-radius: 20px;
  box-shadow: 8px 8px 10px gray;
}
.login_image {
  margin-top: 10%;
  margin-bottom: 5%;
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
  box-shadow: 4px 4px 5px gray;
  border: 1px solid #fcfcfc;
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
  box-shadow: 4px 4px 5px gray;
}
.email {
  background-image: linear-gradient(to bottom, black, green);
  bottom: 25%;
}
</style>