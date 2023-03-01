import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./TopNav.css";
import { NavLink } from "react-router-dom";
import TopIcon from "./top.svg";
import NewIcon from "./new.svg";
import RankedIcon from "./ranked.svg";
import PopupFilter from "../Filter/index.js";
import Settings from "../Settings/index.js";

function TopNav(props) {
  return (
      <div className="TopNav">
        <div className="logoWrapper">
          <span className="logo">STANFORD GRUB</span>
          <Settings />
        </div>
        <div className="buttonsWrapper">
          <NavLink className="buttonWrapper" to="/top">
            <img src={TopIcon} alt="Top Icon" />
            <span className="buttonText">Top</span>
          </NavLink>
          <NavLink className="buttonWrapper" to="/new">
            <img src={NewIcon} alt="New Icon" />
            <span className="buttonText">New</span>
          </NavLink>
          <NavLink className="buttonWrapper" to="/ranked">
            <img src={RankedIcon} alt="Ranked Icon" />
            <span className="buttonText">Ranked</span>
          </NavLink>
          <PopupFilter />
        </div>
      </div>
  );
}

export default TopNav;
