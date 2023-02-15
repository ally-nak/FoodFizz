import "./BotNav.css";

function BotNav() {
  return (
    <div className="BotNav">
      <div className="buttonsWrapper">
        <div className="buttonWrapper">
          <span className="buttonText">Home</span>
        </div>
        <div className="buttonWrapper">
          <span className="buttonText">Search</span>
        </div>
        <div className="buttonWrapper">
          <span className="buttonText">Post</span>
        </div>
      </div>
    </div>
  );
}

export default BotNav;
