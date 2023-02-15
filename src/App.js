import "./App.css";
import TopNav from "./components/TopNav";
import BotNav from "./components/BotNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <div style={{ height: "80vh", backgroundColor: "white" }}>
        <span>CONTENT HERE</span>
      </div>
      <BotNav />
    </div>
  );
}

export default App;
