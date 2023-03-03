import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FeedScreen from "./screens/FeedScreen";
import NewPostScreen from "./screens/NewPostScreen";
import CheckInScreen from "./screens/CheckInScreen";
import CheckInSummaryScreen from "./screens/CheckInSummaryScreen";

export default function App() {
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
