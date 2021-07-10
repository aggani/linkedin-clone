// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0UR7NkslQBCIOujUO6sPQwJ2jJaRifWU",
    authDomain: "linkedin-clone-ani.firebaseapp.com",
    projectId: "linkedin-clone-ani",
    storageBucket: "linkedin-clone-ani.appspot.com",
    messagingSenderId: "1063933073047",
    appId: "1:1063933073047:web:9cf0bcdabae6ba9beafbd2",
    measurementId: "G-GDQ457SGB6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};