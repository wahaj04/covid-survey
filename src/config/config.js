import {initializeApp } from "firebase/app";
import { getAuth } from '@firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAlggGccmlkesAsFfab98J3N3CyLGf3QuQ",
    authDomain: "covid-19-survey-a78e1.firebaseapp.com",
    projectId: "covid-19-survey-a78e1",
    storageBucket: "covid-19-survey-a78e1.appspot.com",
    messagingSenderId: "18928258937",
    appId: "1:18928258937:web:353f7f1db2a4a3cbb1a9a8",
    measurementId: "G-10P434CCWJ"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


