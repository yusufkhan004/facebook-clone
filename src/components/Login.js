import React from 'react'
import "./Login.css"
import {auth, provider } from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const Login = () => {

    
    const [state, dispatch] = useStateValue();


    const signIn = () => {
        //sign In...
        auth.signInWithPopup(provider)
        .then((result) =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })

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


            <button onClick={signIn}>
                Sign with Google
            </button>
        </div>
    )
}

export default Login
