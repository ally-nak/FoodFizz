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

    return (
        <React.Fragment>
        <Login />
        </React.Fragment>
    )
}
