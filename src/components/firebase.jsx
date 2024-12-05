// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGoXrjiqhzFH2xfbjNjF2Blibjqqu6aKc",
  authDomain: "foodapp-e0284.firebaseapp.com",
  projectId: "foodapp-e0284",
  storageBucket: "foodapp-e0284.appspot.com",
  messagingSenderId: "384116941731",
  appId: "1:384116941731:web:7fd743ea4cd6a9985e3016",
  measurementId: "G-DQ7M2MZXVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore(app)
export default app
