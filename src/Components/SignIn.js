import React, {useState} from "react";
import '../index.css';
import firebase from 'firebase/app';
import faker from 'faker';
import 'fontsource-roboto';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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

faker.locale = 'en_AU';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    //when the sign in button is clicked
    const signInHandler = (event, email, password) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            window.location.href= '/jobs';
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if (name==='user-email') {
            setEmail(value);
        } else if (name === 'user-password') {
            setPassword(value);
        }
    }

    return (
        //logic for incorrect log in details not implemented
        <Container maxWidth='sm'>
            <Box component='div' style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                color: 'black',
                margin:'auto'
            }}>
                <ChevronRightIcon style={{fontSize:70}} display='inline'/>
                <Typography variant='h4' component='h4' display='inline'>
                        Rapid Courier
                </Typography>
            </Box>
            <form className='signin-form'>
                <TextField 
                    fullWidth='true'
                    id='user-email'
                    name='user-email'
                    label='Username'
                    type='email'
                    value={email}
                    onChange={(event) => onChangeHandler(event)}/>
            
                <TextField 
                    fullWidth='true'
                    id='user-password'
                    name='user-password'
                    label='Password'
                    type='password'
                    value={password}
                    onChange={(event) => onChangeHandler(event)}/>
            
                <div className='sign-in-button-container'>
                    <Button 
                    className='sign-in-button' 
                    variant='contained'
                    fullWidth='true'
                    onClick={(event) => {signInHandler(event, email, password)}}>
                            SIGN IN</Button>
                </div>
            </form>
        </Container>
    );
};
export default SignIn;