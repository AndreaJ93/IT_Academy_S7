// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWXkjWDou3K3hPnPcaNriqjcrxAtYEvLw",
  authDomain: "starwars-s7-58bb5.firebaseapp.com",
  projectId: "starwars-s7-58bb5",
  storageBucket: "starwars-s7-58bb5.appspot.com",
  messagingSenderId: "31086489045",
  appId: "1:31086489045:web:e3797a18ebcc736fdc215c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);