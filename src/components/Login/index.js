import { signInWithGoogle, googleSignout } from "../../firebase";
import React from "react";
import "./Login.css";

export default function Login() {
    return (
        <React.Fragment>
        <div className="title">
            SIGN-IN OR SIGN-OUT BELOW
        </div>
        <button onClick={signInWithGoogle}>SIGN-IN WITH GOOGLE</button>
        <button onClick={googleSignout}>SIGN OUT</button>
        </React.Fragment>
    )
}