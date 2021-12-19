import { initializeApp, getApp, getApps } from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyBx21c7vWc7Au5S3iI2PqnF-X5t9Toi_ow",
  authDomain: "acko-7b99f.firebaseapp.com",
  projectId: "acko-7b99f",
  storageBucket: "acko-7b99f.appspot.com",
  messagingSenderId: "379817361229",
  appId: "1:379817361229:web:063636abf4c9b485158104",
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;
