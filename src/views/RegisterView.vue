<template>
  <div class="login">
    <div class="login_container">
      <img
        class="login_image"
        src="../assets/MAT.ZIP-logo.png"
        alt=""
        width="150px"
        height="130px"
      />
      <form>
        <input
          class="login_input"
          type="text"
          placeholder="ID(email)"
          v-model="userID"
        />
        <input
          class="login_input"
          type="password"
          placeholder="password(6자이상)"
          v-model="userPW"
        />
        <button class="login_btn" @click.prevent="registerUser()">
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
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
}

.login_container {
  width: 40vw;
  height: 100%;
  padding: 30px 10px;
  margin: auto;
  margin-top: 60px;
  background-color: white;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  border-radius: 10px;
  border: 1px solid lightgray;
}
.login_image {
  margin-top: 5%;
}
.login_input {
  width: 80%;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  border: 1px solid lightgray;
  margin-top: 30px;
}
.login_input::placeholder {
  font-family: "Noto Sans KR", sans-serif;
  color: lightgray;
}
.login_input:focus::placeholder {
  color: salmon;
}
.login_input:focus {
  outline: 1px solid salmon;
}
.login_btn {
  width: 80%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #fcfcfc;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  background-color: salmon;
  margin-top: 60px;
}
.login_btn:hover {
  background-color: #bdbdbd;
}

@media screen and (max-width: 1200px) {
  .login_container {
    width: 60vw;
    margin-top: 50px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 768px) {
  .login_container {
    width: 75vw;
    margin-top: 30px;
    margin-bottom: 20px;
  }
}
</style>
