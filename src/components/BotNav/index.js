import "./BotNav.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "./home.svg";
import PostIcon from "./post.svg";
import SearchIcon from "./search.svg";
import checkIn from "./checkIn.svg";
import checkInSummary from "./checkInSummary.svg";

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
          <img src={checkIn} alt="Check In" style={{width:'27px', height:'27px'}}/>
        </NavLink>
        <NavLink to="/check-in-summary">
          <img src={checkInSummary} alt="Check In Summary" style={{width:'27px', height:'27px'}}/>
        </NavLink>
      </div>
    </div>
  );
}

export default BotNav;
