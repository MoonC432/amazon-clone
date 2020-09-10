import React from 'react'
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { useState } from 'react';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const login = (event) => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect to homepage
                history.push("/")
            })
            .catch(e => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
                //created a user and loggin in ...
            })
            .catch(e => alert(e.message))
    }
    return (
        <div className="login">
            <Link tp="/">
                <img 
                    className="login__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
                    alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button className="login__signinButton" type="submit" onClick={login}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies and our Interest-Based Ads Notice.
                </p>
                <button className="login__registerButton" onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
