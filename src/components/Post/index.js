import "./Post.css";
import React, { useState } from "react";
import ThumbsUp from "./thumb_up.svg";
import ThumbsDown from "./thumb_down.svg";
import Pin from "./pin.svg";
import Flag from "./Flag.svg";
import { ReactComponent as Upvote } from "./upvote.svg";
import { ReactComponent as Downvote } from "./downvote.svg";

import { firestore } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

function Post(props) {
  const [likesCount, setLikesCount] = useState(props.likes);

  function timeStamp(props) {
    console.log(props.caption);
    console.log(props.timestamp);
    const date = props.timestamp.toDate();

    let hours = date.getHours();
    const ap = hours > 11 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const hourZero = hours < 10 ? "0" : "";

    const minutes = date.getMinutes();
    const minuteZero = minutes < 10 ? "0" : "";

    const timestamp = hourZero + hours + ":" + minuteZero + minutes + " " + ap;
    return timestamp;
  }

  const updateVote = (voteType) => async (e) => {
    const likesRef = doc(firestore, "feed", props.docID);
    const increment = voteType === "up" ? 1 : -1;
    await updateDoc(likesRef, {
      likes: likesCount + increment,
    });
    setLikesCount(likesCount + increment);
  };

  return (
    <div className="post-wrapper">
      <div className="post-header">
        <div className="location-wrapper">
          <img src={Pin} alt="location pin" />
          <span className="post-title">{props.location}</span>
        </div>
        <div className="time-wrapper">
          <span className="post-time">{timeStamp(props)}</span>
          {props.rating > 2.5 ? (
            <img src={ThumbsUp} alt="thumbs up" />
          ) : (
            <img src={ThumbsDown} alt="thumbs down" />
          )}
        </div>
      </div>
      <div className="post-content">
        <p className="post-caption">{props.caption}</p>
        {props.photoLink && (
          <img className="post-image" src={props.photoLink} alt="post" />
        )}
      </div>
      <div className="post-footer">
        <img src={Flag} style={{ height: 25, width: 30 }} alt="Flag" />
        <div>
          <Downvote
            className="downvote"
            alt="Downvote"
            onClick={updateVote("down")}
          />
          <span className="like-count"> {likesCount} </span>
          <Upvote className="upvote" alt="Upvote" onClick={updateVote("up")} />
        </div>
      </div>
    </div>
  );
}

export default Post;
