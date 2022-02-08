import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDoIsTgKG5krtVJ_HXyW4yq2VHvaJHj0qc",
    authDomain: "linkedin-clone-yt-3d7c5.firebaseapp.com",
    projectId: "linkedin-clone-yt-3d7c5",
    storageBucket: "linkedin-clone-yt-3d7c5.appspot.com",
    messagingSenderId: "542121845268",
    appId: "1:542121845268:web:6ee13daf2354a80f443d01"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }