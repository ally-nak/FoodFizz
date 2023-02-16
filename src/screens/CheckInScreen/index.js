import React, { useState } from "react";
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

  const [location, setLocation] = useState(null);
  const [seating, setSeating] = useState(null);
  const [line, setLine] = useState(null);

  const handleSubmit = (e) => {
    alert("Check-In submitted");
    console.log(location, seating, line);
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <TopNav />
      <div className="check-in-wrapper">
        <form className="check-in-form">
          <span className="check-in-title">CHECK-IN</span>
          <SelectionInput
            label={LOCATION_LABEL}
            options={LOCATIONS}
            selected={location}
            onChange={setLocation}
          />
          <SelectionInput
            label={SEATING_LABEL}
            options={SEATING_OPTIONS}
            selected={seating}
            onChange={setSeating}
          />
          <SelectionInput
            label={LINE_LABEL}
            options={LINE_OPTIONS}
            selected={line}
            onChange={setLine}
          />
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