import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
let fbObj = {
    apiKey: "AIzaSyBgUtWpXgoL2vBxFXlTKRZfOqPo80XNb5s",
    authDomain: "resume-builder-ecd00.firebaseapp.com",
    projectId: "resume-builder-ecd00",
    storageBucket: "resume-builder-ecd00.appspot.com",
    messagingSenderId: "839024801337",
    appId: "1:839024801337:web:2cb10086063fa9b5acffe8"
}
firebase.initializeApp(fbObj);
export default firebase;
