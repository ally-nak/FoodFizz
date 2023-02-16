import React, { useState } from "react";
import TopNav from "../components/TopNav";
import BotNav from "../components/BotNav";
import SelectionInput from "../components/SelectionInput";
import LOCATIONS from "../LOCATIONS";

function PostScreen() {
  const LOCATION_LABEL = "Select a dining hall:";
  const RELATED_LABEL = "Select all related fields:";
  const RELATED_OPTIONS = [
    "Meat",
    "Vegan",
    "Gluten-free",
    "Dessert",
    "Vegetarian",
  ];
  const RATING_LABEL = "Give it a rating:";

  const [location, setLocation] = useState(null);
  const [related, setRelated] = useState([]);
  const [rating, setRating] = useState(null);

  return (
    <React.Fragment>
      <TopNav />
      <div style={{ height: "80vh", backgroundColor: "white" }}>
        <span>MAKE POST HERE</span>
        <div>
          <span>Cancel</span>
          <span>Post!</span>
        </div>
        <div>
          <span>UPLOAD A PHOTO</span>
        </div>
        <input type="text" />
        <SelectionInput
          label={LOCATION_LABEL}
          options={LOCATIONS}
          selected={location}
          onChange={setLocation}
        />
        <SelectionInput
          label={RELATED_LABEL}
          options={RELATED_OPTIONS}
          selected={related}
          onChange={setRelated}
        />
      </div>
      <BotNav />
    </React.Fragment>
  );
}

export default PostScreen;
