import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FeedScreen from "./screens/FeedScreen";
import NewPostScreen from "./screens/NewPostScreen";
import CheckInScreen from "./screens/CheckInScreen";
import CheckInSummaryScreen from "./screens/CheckInSummaryScreen";
import LoginScreen from "./screens/LoginScreen";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route index element={<PrivateRoute><FeedScreen /></PrivateRoute>} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="post" element={<PrivateRoute><NewPostScreen /></PrivateRoute>} />
        <Route path="check-in" element={<PrivateRoute><CheckInScreen /></PrivateRoute>} />
        <Route path="check-in-summary" element={<PrivateRoute><CheckInSummaryScreen /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
