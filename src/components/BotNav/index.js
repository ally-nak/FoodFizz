import "./BotNav.css";
import { NavLink } from "react-router-dom";

function BotNav() {
  return (
    <div className="BotNav">
      <div className="buttonsWrapper">
        <NavLink to="/">
          <span className="buttonText">Home</span>
        </NavLink>
        <NavLink to="/post">
          <span className="buttonText">Post</span>
        </NavLink>
        <NavLink to="/check-in">
          <span className="buttonText">Check-In</span>
        </NavLink>
        <div className="buttonWrapper">
          <span className="buttonText">Search</span>
        </div>
      </div>
    </div>
  );
}

export default BotNav;
