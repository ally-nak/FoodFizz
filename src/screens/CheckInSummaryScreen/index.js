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

  // TODO: fetch averages from backend and fill in
  let seating = "Plenty";
  let lines = "Long";

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
                <div className="a">
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
