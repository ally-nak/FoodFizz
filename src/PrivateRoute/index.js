import React, {useState} from "react";
import { auth } from "../firebase";
import FeedScreen from "../screens/FeedScreen";
import LoginScreen from "../screens/LoginScreen";

const PrivateRoute = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    auth.onAuthStateChanged(user => {
            if(user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
    });
    console.log("AUTH USER", authUser);
    return authUser ? children : <LoginScreen />;
}

export default PrivateRoute;