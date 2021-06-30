import React from 'react'
import "./Login.css"
import {auth, provider } from "./firebase"

const Login = () => {

    const signIn = () => {
        //sign In...
        auth.signInWithPopup(provider).then((result) =>{
            console.log(result);
        })
    };


    return (
        <div className="login">
            <div className="login__logo">   
            <img className="fb_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/1200px-Facebook_f_Logo_%28with_gradient%29.svg.png" 
            alt="" />
            
            <img className="fb_word" src="https://1000logos.net/wp-content/uploads/2016/11/logo-fb.png" 
            alt="" />
            </div>

            <button type="submit" onClick={signIn}>
                SIGN IN
            </button>
        </div>
    )
}

export default Login
