import React from "react";
import TopNav from "../components/TopNav";
import BotNav from "../components/BotNav";

function PostScreen() {
  return (
    <React.Fragment>
      <TopNav />
      <div style={{ height: "80vh", backgroundColor: "white" }}>
        <span>MAKE POST HERE</span>
      </div>
      <BotNav />
    </React.Fragment>
  );
}

export default PostScreen;
