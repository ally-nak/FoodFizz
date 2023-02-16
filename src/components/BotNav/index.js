import "./BotNav.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "./home.svg";
import PostIcon from "./post.svg";
import SearchIcon from "./search.svg";

function BotNav() {
  return (
    <div className="BotNav">
      <div className="buttonsWrapper">
        <NavLink to="/">
          <img src={HomeIcon} alt="Home Icon" />
        </NavLink>
        <NavLink to="/post">
          <img src={PostIcon} alt="Post Icon" />
        </NavLink>
        <NavLink to="/search">
          <img src={SearchIcon} alt="Search Icon" />
        </NavLink>
        <NavLink to="/check-in">
          <span className="buttonText">Check-In</span>
        </NavLink>
      </div>
    </div>
  );
}

export default BotNav;
