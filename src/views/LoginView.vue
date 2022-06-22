<template>
  <div class="login">
    <div class="login_container">
      <img
        class="login_image"
        src="../assets/MAT.ZIP-logo.png"
        width="150px"
        height="130px"
      />
      <form>
        <input
          type="text"
          placeholder="ID"
          v-model="userID"
        />
        <input
          type="password"
          placeholder="password"
          v-model="userPW"
          />
        <p>{{ message }}</p>
        <button class="email" @click.prevent="emailLogin()">
          LOGIN
        </button>
        <button class="google" @click.prevent="googleLogin()">
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
      message: ""
    };
  },
  methods: {
    emailLogin() {
      this.$store.dispatch("emailLogin", {
        userid: this.userID,
        userpw: this.userPW,
      }).catch(() => {
        this.message="아이디 혹은 비밀번호가 틀렸습니다."
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
img {
  margin-top: 5%;
}
input {
  width: 80%;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  border: 1px solid lightgray;
  margin-top: 30px;
}
input::placeholder {
  font-family: "Noto Sans KR", sans-serif;
  color: lightgray;
}
input:focus::placeholder {
  color: salmon;
}
input:focus {
  outline: 1px solid salmon;
}
button {
  width: 80%;
  height: 50px;
  border-radius: 10px;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
}
.email {
  background-color: salmon;
  border: 1px solid salmon;
  margin-top: 60px;
}
.google {
  background-color: white;
  color: salmon;
  border: 1px solid salmon;
  margin-top: 15px;
  margin-bottom: 40px;
}
button:hover {
  opacity: 0.7;
  box-shadow: 1px 1px 10px salmon;
  cursor: pointer;
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
