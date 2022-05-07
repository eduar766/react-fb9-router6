import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBPD4jgiosRW8MZFWoTW91rIgALJj8pBWU",
  authDomain: "react-test-6fbd8.firebaseapp.com",
  projectId: "react-test-6fbd8",
  storageBucket: "react-test-6fbd8.appspot.com",
  messagingSenderId: "739311008907",
  appId: "1:739311008907:web:a2f82596767facf893e88e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }