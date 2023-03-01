import React, { useEffect, useState } from "react";
import TopNav from "../../components/TopNav";
import BotNav from "../../components/BotNav";
import Post from "../../components/Post";
import "./feed.css";
import LOCATIONS from "../../LOCATIONS";

import { auth, firestore } from "../../firebase";
import { doc, getDocs, collection, getDoc } from "firebase/firestore";

function FeedScreen() {

  const [posts, setPosts] = useState([]);
  const [locationPref, setLocationPref] = useState(LOCATIONS);
  // const [dietaryPref, setDietaryPref] = useState([]);

  // async function retrieveUserPrefs() {
    // const userRef = doc(firestore, "users", auth.currentUser.uid);
    // const userPref = await getDoc(userRef);
    // setLocationPref(userPref.data().locations);
    // setDietaryPref(userPref.data().dietary);
  // }

  // async function retrievePosts() {
  //   console.log("ENTERED RETRIEVE");
  //   const querySnapshot = await getDocs(collection(firestore, "feed"));
  //   let fireBaseResponse = [];
  //   if (!locationPref.length) {
  //     querySnapshot.forEach((doc) => {
  //       var postInfo = doc.data()
  //       console.log("LOCATION PREF", locationPref, locationPref.length);
  //       console.log("LOCAITON", postInfo.location);
  //       postInfo["docID"] = doc.id;
  //       fireBaseResponse.push(postInfo); 
  //     });
  //   } else {
  //     querySnapshot.forEach((doc) => {
  //       var postInfo = doc.data()
  //       console.log("LOCATION PREF", locationPref);
  //       if (locationPref.includes(postInfo.location)) {
  //         console.log("RETRIEEVED", postInfo.location);
  //         postInfo["docID"] = doc.id;
  //         fireBaseResponse.push(postInfo); 
  //       }
  //     });
  //   }
  //   setPosts(fireBaseResponse)
  // }

  async function retrievePosts() {
    console.log("ENTERED RETRIEVE");
    const querySnapshot = await getDocs(collection(firestore, "feed"));
    let fireBaseResponse = [];
    querySnapshot.forEach((doc) => {
      var postInfo = doc.data()
      console.log("LOCATION PREF", locationPref, locationPref.length);
      console.log("LOCAITON", postInfo.location);
      postInfo["docID"] = doc.id;
      fireBaseResponse.push(postInfo); 
    });
    setPosts(fireBaseResponse)
  }

  useEffect(() => {
    retrievePosts();
  }, []);

  return (
    <React.Fragment>
      <TopNav setLocation={setLocationPref}/>
      <div className="container">
        {posts.filter((data, idx) => 
          locationPref.includes(data.location)
        ).map((data, idx) => (
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
