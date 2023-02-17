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
        <div>
          <img src={Pin} alt="location pin" />
          <span className="post-title">FLOMO</span>
        </div>
        <div>
          <span className="post-time">3 min ago</span>
          <img src={ThumbsUp} alt="thumbs up" />
        </div>
      </div>
      <div className="post-image">
        <p className="post-caption">Food at FloMo is pretty GAS TODAY </p>
        <img src={Flomo} alt="image feed" />
      </div>
      <div className="post-footer">
        <img src={Flag} style={{ height: 25, width: 30 }} alt="Flag" />
          <img src={Favorite} style={{ height: 25, width: 30 }} alt="Favorite" />
      </div>
    </div>
  );
}

export default Post;
