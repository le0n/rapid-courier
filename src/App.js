import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import React, {useState} from 'react';
import SignIn from './Components/SignIn';
import JobList from './Components/JobList';
import {Route, Switch} from 'react-router-dom';


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


const firestore = firebase.firestore();


const App = () => {
  const [user, setUser] = useState(null);
  return (
    <main className='main'>
      <Switch>
        <Route path='/' component={SignIn} exact />
        <Route path='/jobs' component={JobList} />
      </Switch>
    </main>
  )
}

export default App;
