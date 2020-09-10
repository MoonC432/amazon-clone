import firebase from "firebase";

const firebaseConfig =firebase.initializeApp ({
    apiKey: "AIzaSyBuZUI3tsNA0eZ15hwTdae9u46B7lcHJOs",
    authDomain: "clone-da177.firebaseapp.com",
    databaseURL: "https://clone-da177.firebaseio.com",
    projectId: "clone-da177",
    storageBucket: "clone-da177.appspot.com",
    messagingSenderId: "741526536508",
    appId: "1:741526536508:web:4177453efd109de4809e39",
    measurementId: "G-YTJTVQXXG3"
  });

const db = firebaseConfig.firestore()
const auth = firebase.auth();

export { db, auth };