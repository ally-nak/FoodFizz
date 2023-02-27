import { signInWithGoogle } from "../../firebase";
import React from "react";
import "./Login.css";

export default function Login() {
    return (
        <React.Fragment>
        <div className="title">
            SIGN-IN BELOW
        </div>
        <button onClick={signInWithGoogle}>Sign in with google</button>
        </React.Fragment>
    )
}