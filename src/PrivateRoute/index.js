import React from "react";
import { auth } from "../firebase";
import FeedScreen from "../screens/FeedScreen";
import LoginScreen from "../screens/LoginScreen";

const PrivateRoute = ({ children }) => {
    const result = auth.onAuthStateChanged(user => {
            if(user) {
                console.log("USER", user);
                return <FeedScreen />;
                // return children;
            } else {
                return <LoginScreen />;
            }
    });
    return result;
}

export default PrivateRoute;