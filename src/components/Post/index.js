import "./Post.css";
import React from "react";
import ThumbsUp from "./thumb_up.svg";
import ThumbsDown from "./thumb_down.svg";
import Pin from "./pin.svg";
import Flag from "./Flag.svg";
import {ReactComponent as Upvote} from "./upvote.svg";
import {ReactComponent as Downvote} from "./downvote.svg";

import { firestore } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

function Post(props) {
  function timeStamp(props) {
    const date = new Date(props.timestamp.seconds * 1000);
    const hours = (date.getHours() + 24) % 12 || 12;
    const minutes = date.getMinutes();
    var ap = "AM";
    if (hours > 11) {
      ap = "PM";
    }
    var hourZero = "";
    var minuteZero = "";
    if (hours < 10) {
      hourZero = "0"
    }
    if (minutes < 10) {
      minuteZero = '0';
    }
    const timestamp = hourZero + hours + ":" + minuteZero + minutes + " " + ap;
    return timestamp;
  }
  const updateVote = voteType => async (e) => {
    const likesRef = doc(firestore, "feed", props.docID);
    var increment = 1;
    if (voteType === "down") {
      increment = -1;
    }
    await updateDoc(likesRef, {
      likes: props.likes + increment
    });
  }

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
            <Downvote className="downvote" alt="Downvote" onClick={updateVote("down")}/>
          <span className="like-count"> {props.likes} </span>
            <Upvote className="upvote" alt="Upvote" onClick={updateVote("up")} />
        </div>
      </div>
    </div>
  );
}

export default Post;
