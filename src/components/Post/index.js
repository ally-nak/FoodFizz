import "./Post.css";
import React from "react";
import ThumbsUp from "./thumb_up.svg";
import ThumbsDown from "./thumb_down.svg";
import Pin from "./pin.svg";
import Flag from "./Flag.svg";
import Favorite from "./Favorite.svg";

function Post(props) {
  function timeStamp(props) {
    const date = new Date(props.timestamp.seconds * 1000);
    const hours = (date.getHours() + 24) % 12 || 12;
    const minutes = date.getMinutes();
    var ap = "AM";
    if (hours > 11) {
      ap = "PM";
    }
    const timestamp = hours + ":" + minutes + " " + ap;
    return timestamp;
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
        <img src={Favorite} style={{ height: 25, width: 30 }} alt="Favorite" />
      </div>
    </div>
  );
}

export default Post;
