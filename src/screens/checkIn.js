import React from "react";
import TopNav from "../components/TopNav";
import BotNav from "../components/BotNav";

function CheckInScreen() {
  return (
    <React.Fragment>
      <TopNav />
      <div style={{ height: "80vh", backgroundColor: "white" }}>
        <span>CHECK IN</span>
      </div>
      <BotNav />
    </React.Fragment>
  );
}

export default CheckInScreen;
