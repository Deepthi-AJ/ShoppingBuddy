import firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDxB0ACjLFeqpBt8H-NV5KCwvzKRaajN5g",
    authDomain: "shopping-buddy-c210b.firebaseapp.com",
    projectId: "shopping-buddy-c210b",
    storageBucket: "shopping-buddy-c210b.appspot.com",
    messagingSenderId: "725509303181",
    appId: "1:725509303181:web:0bc76e80989a4d0786abc4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore();