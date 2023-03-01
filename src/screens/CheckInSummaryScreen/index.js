import React, { useState } from "react";
import TopNav from "../../components/TopNav";
import BotNav from "../../components/BotNav";
import LOCATIONS from "../../LOCATIONS";
import SelectionInput from "../../components/SelectionInput";
import "./checkInSummary.css";

function CheckInSummaryScreen() {
  const LOCATION_LABEL = "Select a dining hall:";
  const [location, setLocation] = useState(null);
  const SEATING_LABEL = "Seating availability:";
  const LINES_LABEL = "Line length:";

  // Calculates average seating availability & line length from check in data
  function calculateAverageCheckIn() {
    const SEATING_DATA = {"Plenty": 3, "Some": 2, "None": 1};
    const LINES_DATA = {"Yes": 3, "Kinda": 2, "No": 1};

    // TODO: fetch averages from backend and fill in
    let seatingData = ["Plenty", "Plenty", "Some", "Plenty"];
    let linesData = ["Yes", "Yes", "No", "Kinda"];

    seatingData = seatingData.map((val) => {
      return SEATING_DATA[val];
    });

    linesData = linesData.map((val) => {
      return LINES_DATA[val];
    });

    const average = array => array.reduce((a, b) => a + b) / array.length;
    const seatingAverage = Math.round(average(seatingData));
    const seating = Object.keys(SEATING_DATA).find(key => SEATING_DATA[key] === seatingAverage);
    const linesAverage = Math.round(average(linesData));
    const lines = Object.keys(LINES_DATA).find(key => LINES_DATA[key] === linesAverage);
    return [seating, lines];
  }

  let [seating, lines] = calculateAverageCheckIn();

  // Handler for updating selection and fetching check-in averages
  const handleSelect = (e) => {
    setLocation(e);
  }

  return (
    <React.Fragment>
      <TopNav />
      <div className="check-in-summary-wrapper">
        <div className="check-in-summary">
          <span className="check-in-summary-title">CHECK-IN SUMMARY</span>
          <SelectionInput
            label={LOCATION_LABEL}
            options={LOCATIONS}
            selected={location}
            onChange={handleSelect}
          />
        </div>
        <div>
          {(() => {
            if (location) {
              return (
                <div>
                  <div className="check-in-summary-header">
                    {SEATING_LABEL}
                  </div>
                  <div className="check-in-summary-info">
                    {seating}
                  </div>
                  <div className="check-in-summary-header">
                    {LINES_LABEL}
                  </div>
                  <div className="check-in-summary-info">
                    {lines}
                  </div>
                </div>
              )
            }
          })()}
        </div>
      </div>
      <BotNav />
    </React.Fragment>
  );
}

export default CheckInSummaryScreen;
