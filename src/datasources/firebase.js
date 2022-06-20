import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "mat-zip-a7f69.firebaseapp.com",
  databaseURL: "https://mat-zip-a7f69-default-rtdb.asia-southeast1.firebasedatabase.app"
};

export const app = initializeApp(firebaseConfig);
