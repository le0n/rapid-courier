import React, {useState} from "react";
import '../index.css';
import firebase from 'firebase/app';

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
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    //when the sign in button is clicked
    const signInHandler = (event, email, password) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            alert('sign in success');
            //change context
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if (name==='userEmail') {
            setEmail(value);
        } else if (name === 'userPassword') {
            setPassword(value);
        }
    }
    
    return (
        //logic for incorrect log in details not implemented
        <div className='main-container'>
            <h1 className='rapid-courier-title'>{'>'} Rapid Courier</h1>
            <div className='sign-in-border'>
                <form>
                    <input type='email' className='email-input' 
                    name='userEmail' value={email} placeholder='Username'
                    id='userEmail'
                    onChange={(event) => onChangeHandler(event)} />

                    <input type='password' className='password-input' 
                    name='userPassword' value={password} placeholder='Password'
                    id='userPassword'
                    onChange={(event) => onChangeHandler(event)} />

                    <button className='sign-in-button' 
                    onClick={(event) => {signInHandler(event, email, password)}}>
                        SIGN IN</button>

                    <button className='sign-out-button'
                    onClick={(event) => {firebase.auth().signOut().then(alert('signed out'))}}>SIGN OUT</button>
                </form>
            </div>
        </div>
    );
};
export default SignIn;