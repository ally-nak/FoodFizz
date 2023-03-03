import React, { useEffect, useState } from "react";
import TopNav from "../../components/TopNav";
import BotNav from "../../components/BotNav";
import Post from "../../components/Post";
import "./feed.css";
import LOCATIONS from "../../LOCATIONS";
import { firestore } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

function FeedScreen() {
  const [posts, setPosts] = useState([]);
  const [locationPref, setLocationPref] = useState(LOCATIONS);
  const [ranked, setRanked] = useState(false);

  async function retrievePosts() {
    const querySnapshot = await getDocs(collection(firestore, "feed"));
    let fireBaseResponse = [];
    querySnapshot.forEach((doc) => {
      var postInfo = doc.data();
      postInfo["docID"] = doc.id;
      fireBaseResponse.push(postInfo);
    });
    setPosts(fireBaseResponse);
  }

  async function fetchRankedPosts() {
    const querySnapshot = await getDocs(collection(firestore, "feed"));
    let fireBaseResponse = [];
    querySnapshot.forEach((doc) => {
      var postInfo = doc.data();
      postInfo["docID"] = doc.id;
      fireBaseResponse.push(postInfo);
    });
    fireBaseResponse.sort((a, b) => b.likes - a.likes);
    setPosts(fireBaseResponse);
    setRanked(!ranked);
  }

  useEffect(() => {
    retrievePosts();
  }, []);

  return (
    <React.Fragment>
      <TopNav
        fetchPost={fetchRankedPosts}
        retrievePosts={retrievePosts}
        setLocation={setLocationPref}
      />
      <div className="container">
        {posts
          .filter((data, idx) => locationPref.includes(data.location))
          .map((data, idx) => (
            <Post
              key={idx}
              caption={data.caption}
              location={data.location}
              photoLink={data.photo}
              rating={data.rating}
              timestamp={data.timestamp}
              likes={data.likes}
              docID={data.docID}
              ranked={ranked}
            />
          ))}
      </div>
      <BotNav />
    </React.Fragment>
  );
}

export default FeedScreen;
