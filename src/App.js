import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FeedScreen from "./screens/feed";
import PostScreen from "./screens/post";
import CheckInScreen from "./screens/CheckInScreen";

export default function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route index element={<FeedScreen />} />
        <Route path="post" element={<PostScreen />} />
        <Route path="check-in" element={<CheckInScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
