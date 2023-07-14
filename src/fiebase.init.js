// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK8aqgrmYO0gZN-71gnMvDiluXrKbFYO8",
  authDomain: "genius-car-23-ba8d2.firebaseapp.com",
  projectId: "genius-car-23-ba8d2",
  storageBucket: "genius-car-23-ba8d2.appspot.com",
  messagingSenderId: "232268965785",
  appId: "1:232268965785:web:5425f146049ddd8bcd5508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export default auth;