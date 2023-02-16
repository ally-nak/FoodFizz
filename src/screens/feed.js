import React from "react";
import TopNav from "../components/TopNav";
import BotNav from "../components/BotNav";

function FeedScreen() {
  return (
    <React.Fragment>
      <TopNav />
      <div style={{ height: "80vh", backgroundColor: "white" }}>
        <span>POST CONTENT HERE</span>
      </div>
      <BotNav />
    </React.Fragment>
  );
}

export default FeedScreen;
