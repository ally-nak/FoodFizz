import React from "react";
import TopNav from "../../components/TopNav";
import BotNav from "../../components/BotNav";
import Post from "../../components/Post";

function FeedScreen() {
  return (
    <React.Fragment>
      <TopNav />
        <Post />
        <Post />
      <BotNav />
    </React.Fragment>
  );
}

export default FeedScreen;
