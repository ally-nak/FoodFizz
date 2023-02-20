import "./BotNav.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "./home.svg";
import PostIcon from "./post.svg";
import SearchIcon from "./search.svg";
import checkin from "./checkin.svg";

function BotNav() {
  return (
    <div className="BotNav">
      <div className="buttonsWrapper-botnav">
        <NavLink to="/">
          <img src={HomeIcon} alt="Home Icon" />
        </NavLink>
        <NavLink to="/post">
          <img src={PostIcon} alt="Post Icon" />
        </NavLink>
        <NavLink to="/check-in">
          <img src={checkin} alt="Check In" style={{width:'27px', height:'27px'}}/>
        </NavLink>
      </div>
    </div>
  );
}

export default BotNav;
