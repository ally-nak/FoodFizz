import "./TopNav.css";
import { NavLink } from "react-router-dom";
import TopIcon from "./top.svg";
import NewIcon from "./new.svg";
import RankedIcon from "./ranked.svg";

function TopNav() {
  return (
    <div className="TopNav">
      <div className="logoWrapper">
        <span className="logo">STANFORD GRUB</span>
        <span>MENU</span>
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
      </div>
    </div>
  );
}

export default TopNav;
