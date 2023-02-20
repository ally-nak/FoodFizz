import React, { useEffect } from "react";
import TopNav from "../../components/TopNav";
import BotNav from "../../components/BotNav";
import Post from "../../components/Post";
import "./feed.css";

import { firestore } from "../../firebase";
import { getDocs, collection } from "firebase/firestore"

async function retrievePosts() {
  const querySnapshot = await getDocs(collection(firestore, "feed"));
  querySnapshot.forEach((doc) => {
    var data = doc.data()
    
    // This is everything you need to make a post
    var allergyList = data.allergy;
    var caption = data.caption;
    var location = data.location;
    var photoLink = data.photo;
    var rating = data.rating;
  })
}

function FeedScreen() {

  useEffect(() => {
    console.log("im here")
    retrievePosts()
  }, [])

  return (
    <React.Fragment>
      
      <TopNav />
      <div className="container">
        <Post />
        <Post />
      </div>
      <BotNav />
      
    </React.Fragment>
  );
}

export default FeedScreen;
