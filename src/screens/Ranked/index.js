import React, { useEffect, useState } from "react";
import TopNav from "../../components/TopNav";
import BotNav from "../../components/BotNav";
import Post from "../../components/Post";
import "./ranked.css";

import { firestore } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

function Ranked() {
  const [posts, setPosts] = useState([]);
  async function retrievePosts() {
    const querySnapshot = await getDocs(collection(firestore, "feed"));
    let fireBaseResponse = [];
    querySnapshot.forEach((doc) => {
      var postInfo = doc.data();
      postInfo["docID"] = doc.id;
      fireBaseResponse.push(postInfo);
    });
    fireBaseResponse.sort((a, b) => a.rating - b.rating);
    setPosts(fireBaseResponse);
  }

  useEffect(() => {
    retrievePosts();
  }, []);

  return (
    <React.Fragment>
      <TopNav />
      <div className="container">
        {posts.map((data, idx) => (
          <Post
            key={idx}
            caption={data.caption}
            location={data.location}
            photoLink={data.photo}
            rating={data.rating}
            timestamp={data.timestamp}
            likes={data.likes}
            docID={data.docID}
          />
        ))}
      </div>
      <BotNav />
    </React.Fragment>
  );
}

export default Ranked;
