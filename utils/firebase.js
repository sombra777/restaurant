import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwhrAOSiCA-dAT5tv9d1M9my05tqMTAG4",
  authDomain: "restaurants-64da2.firebaseapp.com",
  projectId: "restaurants-64da2",
  storageBucket: "restaurants-64da2.appspot.com",
  messagingSenderId: "1049904528121",
  appId: "1:1049904528121:web:e717fa14a2acacf9208028",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
