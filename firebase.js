// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBW_YXcfXTWiKRitkSnorfJuBY5oyuaolo",
  authDomain: "proyecto-crossfit.firebaseapp.com",
  databaseURL: "https://proyecto-crossfit-default-rtdb.firebaseio.com",
  projectId: "proyecto-crossfit",
  storageBucket: "proyecto-crossfit.appspot.com",
  messagingSenderId: "195403392442",
  appId: "1:195403392442:web:cd26435a5cd96d1c3ca983",
  measurementId: "G-65MM20L76F",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebaseConfig, db };
