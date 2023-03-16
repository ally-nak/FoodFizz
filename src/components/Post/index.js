import "./Post.css";
import React, { useState } from "react";
import Pin from "./pin.svg";
import { ReactComponent as Upvote } from "./upvote.svg";
import { ReactComponent as Downvote } from "./downvote.svg";
import { BsTreeFill } from "react-icons/bs";
import { firestore } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

function Post(props) {
  const [likesCount, setLikesCount] = useState(props.likes);

  function timeStamp(props) {
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
        </div>
      </div>
      <div className="post-content">
        <p className="post-caption">{props.caption}</p>
        {props.photoLink && (
          <img className="post-image" src={props.photoLink} alt="post" />
        )}
      </div>
      <div className="post-footer">
        <div className="post-rating">
          {new Array(props.rating).fill(null).map(() => (
            <BsTreeFill size={20} color={"#c41200"} />
          ))}
        </div>
        <div>
          <Downvote
            className="downvote"
            alt="Downvote"
            onClick={updateVote("down")}
          />
          <span className="like-count">
            {" "}
            {props.ranked || props.top ? props.likes : likesCount}{" "}
          </span>
          <Upvote className="upvote" alt="Upvote" onClick={updateVote("up")} />
        </div>
      </div>
    </div>
  );
}

export default Post;
