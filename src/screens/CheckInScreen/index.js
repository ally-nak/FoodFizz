import React from "react";
import TopNav from "../../components/TopNav";
import BotNav from "../../components/BotNav";
import LOCATIONS from "../../LOCATIONS";
import SelectionInput from "../../components/SelectionInput";
import "./checkIn.css";

function CheckInScreen() {
  const LOCATION_LABEL = "Where are you?";
  const SEATING_LABEL = "Is there seating available?";
  const SEATING_OPTIONS = ["None", "Some", "Plenty"];
  const LINE_LABEL = "Are the lines long?";
  const LINE_OPTIONS = ["No", "Kinda", "Yes"];

  const handleSubmit = (e) => {
    alert("Check-In submitted");
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <TopNav />
      <div className="check-in-wrapper">
        <form className="check-in-form">
          <span className="check-in-title">CHECK-IN</span>
          <SelectionInput label={LOCATION_LABEL} options={LOCATIONS} />
          <SelectionInput label={SEATING_LABEL} options={SEATING_OPTIONS} />
          <SelectionInput label={LINE_LABEL} options={LINE_OPTIONS} />
          <div className="submit" onClick={handleSubmit}>
            <span>Submit</span>
          </div>
        </form>
      </div>
      <BotNav />
    </React.Fragment>
  );
}

export default CheckInScreen;
