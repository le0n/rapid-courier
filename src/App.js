import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCXqvu1j3NQ4J303SKtBAcXZ_iFz5LhUdc",
  authDomain: "rapid-87eab.firebaseapp.com",
  databaseURL: "https://rapid-87eab.firebaseio.com",
  projectId: "rapid-87eab",
  storageBucket: "rapid-87eab.appspot.com",
  messagingSenderId: "724929581922",
  appId: "1:724929581922:web:5fa2ed8c80b8e52498d23b",
  measurementId: "G-SN0R0SLVTZ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>this is a test website</h1>
      </header>
    </div>
  )
}

export default App;
