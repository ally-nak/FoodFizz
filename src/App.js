import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FeedScreen from "./screens/FeedScreen";
import NewPostScreen from "./screens/NewPostScreen";
import CheckInScreen from "./screens/CheckInScreen";
import CheckInSummaryScreen from "./screens/CheckInSummaryScreen";
import Login from "./screens/Login";
import { auth } from "./firebase";

function onAuthStateChange(setUserAuth) {
  console.log("ENTERED AUTH CHANGE");
  return auth.onAuthStateChanged(user => {
    let val = null;
    if (user) {
      setUserAuth(user.uid);
    } else {
      setUserAuth(null);
    }
  })
}

export default function App() {

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    console.log("ENTERED USE EFFECT");
    const loggedIn = onAuthStateChange(setAuthUser);
    return () => {
      loggedIn();
    };
  }, []);

  if(!authUser) {
    return <Login/>
  }
  
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route index element={<FeedScreen/>} />
        <Route path="post" element={<NewPostScreen />} />
        <Route path="check-in" element={<CheckInScreen />} />
        <Route path="check-in-summary" element={<CheckInSummaryScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
