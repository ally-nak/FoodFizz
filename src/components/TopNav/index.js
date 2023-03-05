import "./TopNav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import TopIcon from "./top.svg";
import NewIcon from "./new.svg";
import RankedIcon from "./ranked.svg";
import PopupFilter from "../Filter/index.js";
import Settings from "../Settings/index.js";

function TopNav({ fetchRankedPost, fetchTopPosts, retrievePosts, setLocation }) {
  const [ranked, setRanked] = useState(false);
  const [top, setTop] = useState(false);

  return (
    <div className="TopNav">
      <div className="logoWrapper">
        <span className="logo">STANFORD GRUB</span>
        <Settings />
      </div>
      <div className="buttonsWrapper">
        <div
          onClick={() => {
            top ? retrievePosts() : fetchTopPosts();
            setTop(!top);
            setRanked(false);
          }}
          className={top ? "buttonWrapper-clicked" : "buttonWrapper"}
        >
          <img src={TopIcon} alt="Top Icon" />
          <span className="buttonText">Top</span>
        </div>
        <NavLink className="buttonWrapper" to="/new">
          <img src={NewIcon} alt="New Icon" />
          <span className="buttonText">New</span>
        </NavLink>
        <div
          onClick={() => {
            ranked ? retrievePosts() : fetchRankedPost();
            setRanked(!ranked);
            setTop(false);
          }}
          className={ranked ? "buttonWrapper-clicked" : "buttonWrapper"}
        >
          <img src={RankedIcon} alt="Ranked Icon" />
          <span className="buttonText">Ranked</span>
        </div>
        <PopupFilter setLocation={setLocation} />
      </div>
    </div>
  );
}

export default TopNav;
