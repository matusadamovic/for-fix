import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh9HZQPN7SSf96Cd_r9ab-ieU9P00pqds",
  authDomain: "realestateathena-c71c5.firebaseapp.com",
  projectId: "realestateathena-c71c5",
  storageBucket: "realestateathena-c71c5.appspot.com",
  messagingSenderId: "63005437224",
  appId: "1:63005437224:web:8c7d2a1a329e1d6338b41d",
  databaseURL: "https://realestateathena-c71c5.firebaseio.com",
};

// Firebase storage reference
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
