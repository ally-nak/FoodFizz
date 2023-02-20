import React, { useEffect, useState } from "react";
import TopNav from "../../components/TopNav";
import BotNav from "../../components/BotNav";
import Post from "../../components/Post";
import "./feed.css";

import { firestore } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

function FeedScreen() {
  const [posts, setPosts] = useState([]);
  async function retrievePosts() {
    const querySnapshot = await getDocs(collection(firestore, "feed"));
    let fireBaseResponse = [];
    querySnapshot.forEach((doc) => fireBaseResponse.push(doc.data()));
    setPosts(fireBaseResponse)
  }

  useEffect(() => {
    retrievePosts();
  }, []);

  return (
    <React.Fragment>
      <TopNav />
      <div className="container">
        {posts.map((data) => (
          <Post />
        ))}
      </div>
      <BotNav />
    </React.Fragment>
  );
}

export default FeedScreen;
