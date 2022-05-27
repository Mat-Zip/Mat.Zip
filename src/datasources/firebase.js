import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "vue-team-project.firebaseapp.com",
};

export const app = initializeApp(firebaseConfig);
