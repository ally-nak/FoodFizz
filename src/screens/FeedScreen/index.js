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
    querySnapshot.forEach((doc) => {
      var postInfo = doc.data()
      postInfo["docID"] = doc.id;
      fireBaseResponse.push(postInfo); 
    });
    setPosts(fireBaseResponse)
  }

  useEffect(() => {
    retrievePosts();
  }, [posts]);

  return (
    <React.Fragment>
      <TopNav />
      <div className="container">
        {posts.map((data, idx) => (
          <Post 
            key = {idx}
            caption = {data.caption}
            location = {data.location}
            photoLink = {data.photo}
            rating = {data.rating}
            timestamp = {data.timestamp}
            likes = {data.likes}
            docID = {data.docID}
          />
        ))}
      </div>
      <BotNav />
    </React.Fragment>
  );
}

export default FeedScreen;
