<template>
  <div class="resister">
    <div class="resister_container">
      <img
        src="../assets/MAT.ZIP-logo.png"
        alt=""
        width="150px"
        height="130px"
      />
      <form>
        <input
          type="text"
          placeholder="ID(email)"
          v-model="userID"
        />
        <input
          type="password"
          placeholder="password(6자이상)"
          v-model="userPW"
        />
        <p>{{ message }}</p>
        <button @click.prevent="registerUser()">
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
  computed: {
    message() {
      return this.userPW.length>=6 || this.userPW=="" ? "" : "비밀번호를 6자 이상 입력해주세요.";
    }
  }
};
</script>

<style scoped>
.resister {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
}

.resister_container {
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
p {
  height: 50px;
  margin-top: 10px;
  color: rgb(231, 65, 65);
}
button {
  width: 80%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid salmon;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  background-color: salmon;
  margin-top: 50px;
  margin-bottom: 20px;
}
button:hover {
  opacity: 0.7;
  box-shadow: 1px 1px 10px salmon;
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
  .resister_container {
    width: 60vw;
    margin-top: 40px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 768px) {
  .resister_container {
    width: 75vw;
    margin-top: 30px;
    margin-bottom: 20px;
  }
}
</style>
