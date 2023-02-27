import React, {useEffect}  from "react";
import Login from "../../components/Login";
import { auth } from "../../firebase";
import { GoogleAuthProvider, getRedirectResult} from "firebase/auth";

export default function LoginScreen () {
    useEffect(() => {
        console.log("HEREEEEEEEE");
        getRedirectResult(auth)
        .then((result) => {
        const user = result.user;
        console.log("USER", user);
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }, []);

    // useEffect(() => {
    //     console.log("ENTERED SECOND USE EFFECT");
    //     auth.onAuthStateChanged(user => {
    //         if(user) {
    //           window.location = 'home.html'; //After successful login, user will be redirected to home.html
    //         }
    //       });

    // });
    return (
        <React.Fragment>
        <Login />
        <div>
            {auth.currentUser}
        </div>
        </React.Fragment>
    )
}
