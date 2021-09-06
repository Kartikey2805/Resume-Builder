import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance,
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";

// Ye extension hame yaad rakni hai
import { composeWithDevTools } from "redux-devtools-extension";
var firebaseConfig = {
  apiKey: "AIzaSyA8mvMEtuN3YmqtViDUBxFLATKGMFjcpI4",
  authDomain: "resume-builder-a483b.firebaseapp.com",
  projectId: "resume-builder-a483b",
  storageBucket: "resume-builder-a483b.appspot.com",
  messagingSenderId: "1007829986765",
  appId: "1:1007829986765:web:ef72a1fdcbdc032b97e884",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase) // redux bindings for firestore,
  )
);
ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
