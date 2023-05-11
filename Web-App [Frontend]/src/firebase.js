import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC-xds4_sD7-2gwSFSmz8tmqaA-jKqeaE",
  authDomain: "automated-payment-reminders.firebaseapp.com",
  projectId: "automated-payment-reminders",
  storageBucket: "automated-payment-reminders.appspot.com",
  messagingSenderId: "996832522071",
  appId: "1:996832522071:web:f7c2aef16d47b2b4311812"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore()

