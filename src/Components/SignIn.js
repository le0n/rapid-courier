import React, {useState} from "react";
import '../index.css';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    const signInHandler = (event, email, password) => {
        event.preventDefault();
        alert(email + password);
        //handle auth here
    };

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
                </form>
            </div>
        </div>
    );
};
export default SignIn;