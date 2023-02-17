import "./Post.css";
import React from "react";
import ThumbsUp from "./thumb_up.svg";
import ThumbsDown from "./thumb_down.svg";
import Pin from "./pin.svg";
import Flag from "./Flag.svg";
import Favorite from "./Favorite.svg";
import Flomo from "./flomo_sample.png";

function Post() {
  return (
    <div className="post-wrapper">
      <div className="post-header">
        <div className="location-wrapper">
          <img src={Pin} alt="location pin" />
          <span className="post-title">FLOMO</span>
        </div>
        <div className="time-wrapper">
          <span className="post-time">3 min ago</span>
          <img src={ThumbsUp} alt="thumbs up" />
        </div>
      </div>
      <div className="post-content">
        <p className="post-caption">Food at FloMo is pretty GAS TODAY </p>
        <img className="post-image" src={Flomo} alt="post" />
      </div>
      <div className="post-footer">
        <img src={Flag} style={{ height: 25, width: 30 }} alt="Flag" />
        <img src={Favorite} style={{ height: 25, width: 30 }} alt="Favorite" />
      </div>
    </div>
  );
}

export default Post;
