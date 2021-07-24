import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2inopUGl5nXOOgIFsJlz81zIUSOW2iVY",
  authDomain: "linkedin-clone-1d396.firebaseapp.com",
  projectId: "linkedin-clone-1d396",
  storageBucket: "linkedin-clone-1d396.appspot.com",
  messagingSenderId: "746186145835",
  appId: "1:746186145835:web:d2fd5346068db7ca866a6e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
