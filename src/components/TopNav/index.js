import "./TopNav.css";

function TopNav() {
  return (
    <div className="TopNav">
      <div className="logoWrapper">
        <span className="logo">STANFORD GRUB</span>
        <span>MENU</span>
      </div>
      <div className="buttonsWrapper">
        <div className="buttonWrapper">
          <span className="buttonText">Top</span>
        </div>
        <div className="buttonWrapper">
          <span className="buttonText">New</span>
        </div>
        <div className="buttonWrapper">
          <span className="buttonText">Ranked</span>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
