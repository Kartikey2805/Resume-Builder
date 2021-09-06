import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
let fbObj = {
  apiKey: "AIzaSyA8mvMEtuN3YmqtViDUBxFLATKGMFjcpI4",
  authDomain: "resume-builder-a483b.firebaseapp.com",
  projectId: "resume-builder-a483b",
  storageBucket: "resume-builder-a483b.appspot.com",
  messagingSenderId: "1007829986765",
  appId: "1:1007829986765:web:ef72a1fdcbdc032b97e884",
};
firebase.initializeApp(fbObj);
export default firebase;
