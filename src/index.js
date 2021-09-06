import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore ,createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';

// Ye extension hame yaad rakni hai 
import { composeWithDevTools} from 'redux-devtools-extension'
var firebaseConfig = {
  apiKey: "AIzaSyBgUtWpXgoL2vBxFXlTKRZfOqPo80XNb5s",
    authDomain: "resume-builder-ecd00.firebaseapp.com",
    projectId: "resume-builder-ecd00",
    storageBucket: "resume-builder-ecd00.appspot.com",
    messagingSenderId: "839024801337",
    appId: "1:839024801337:web:2cb10086063fa9b5acffe8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()
const reduxStore = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
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
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);