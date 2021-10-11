import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import * as firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyByOzNqW4954dv3OQpyO3xF4UBYR6MMSHQ",
  authDomain: "cncart-3df11.firebaseapp.com",
  projectId: "cncart-3df11",
  storageBucket: "cncart-3df11.appspot.com",
  messagingSenderId: "979539418714",
  appId: "1:979539418714:web:e7b4071dc00e1461350263",
};
firebase.initializeApp(firebaseConfig);
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
