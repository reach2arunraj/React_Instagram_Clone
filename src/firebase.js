import firebase from "firebase"

const firebaseApp = firebase.initializeApp(  {
    apiKey: "AIzaSyBKGTwebllJPxAmntQO4vR-R9oHMErIxy4",
    authDomain: "instagram-alias.firebaseapp.com",
    databaseURL: "https://instagram-alias.firebaseio.com",
    projectId: "instagram-alias",
    storageBucket: "instagram-alias.appspot.com",
    messagingSenderId: "797578385687",
    appId: "1:797578385687:web:ce6574f7125a7af82ebf52",
    measurementId: "G-V9E58DH1Y9"
  })

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage }