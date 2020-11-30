import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import React from 'react';
import { Router } from "@Reach/router";

const config = {
  apiKey: "AIzaSyCXqvu1j3NQ4J303SKtBAcXZ_iFz5LhUdc",
  authDomain: "rapid-87eab.firebaseapp.com",
  databaseURL: "https://rapid-87eab.firebaseio.com",
  projectId: "rapid-87eab",
  storageBucket: "rapid-87eab.appspot.com",
  messagingSenderId: "724929581922",
  appId: "1:724929581922:web:5fa2ed8c80b8e52498d23b",
  measurementId: "G-SN0R0SLVTZ"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">
      <h1>hi i'm a react app11</h1>
      <Title/>
    </div>
    
  )
}

export default App;

function Title() {
  return (
    <div className="Title">
      <h1> {">"} Rapid Courier</h1>
    </div>
  )
}
