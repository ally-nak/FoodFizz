import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FeedScreen from "./screens/FeedScreen";
import NewPostScreen from "./screens/NewPostScreen";
import CheckInScreen from "./screens/CheckInScreen";

export default function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route index element={<FeedScreen />} />
        <Route path="post" element={<NewPostScreen />} />
        <Route path="check-in" element={<CheckInScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
