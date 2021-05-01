import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import reportWebVitals from './reportWebVitals';

// const firebase = require('firebase/app');
require('firebase/firestore');


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnrLF6abQSwb67J2yNQvjFNuzMhDUTySQ",
  authDomain: "evernote-clone-d101e.firebaseapp.com",
  projectId: "evernote-clone-d101e",
  storageBucket: "evernote-clone-d101e.appspot.com",
  messagingSenderId: "440625527428",
  appId: "1:440625527428:web:141ccaacc6ed2ee25ae0d1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("bestnote-container")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
