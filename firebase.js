// import firebase from "firebase";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmiabYP2lR_X6x5X9q-IeS6c5YPsQGb_E",
  authDomain: "clone-26e9f.firebaseapp.com",
  projectId: "clone-26e9f",
  storageBucket: "clone-26e9f.appspot.com",
  messagingSenderId: "665908287441",
  appId: "1:665908287441:web:1f289a97d6e00e816932f0",
};

let app;
if (!getApps) app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
