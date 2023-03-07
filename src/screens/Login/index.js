import { signInWithGoogle } from "../../firebase";
import React from "react";
import "./Login.css";
import Burger from "./Burger.svg";

export default function Login() {
    return (
        <div className="login-container">
            <img className="login-burger" src={Burger}/>
            <div className="login-logo-text">
                STANFORD GRUB
            </div>
            <div className="login-sub-text">
            Hangry? Find the best eats around campus
            </div>
            <div className="login-button" onClick={signInWithGoogle}>
                <span className="login-button-text">
                    SIGN IN
                </span>
            </div>
        </div>
    )
}