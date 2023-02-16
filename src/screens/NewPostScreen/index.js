import React, { useState } from "react";
import TopNav from "../../components/TopNav";
import BotNav from "../../components/BotNav";
import SelectionInput from "../../components/SelectionInput";
import LOCATIONS from "../../LOCATIONS";
import "./newPost.css";
import RedTree from "./red_tree.svg";
import WhiteTree from "./white_tree.svg";

function NewPostScreen() {
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
  const REVIEW_PLACEHOLDER = "Is the food good? Write about it...";

  const [text, setText] = useState("");
  const [location, setLocation] = useState(null);
  const [related, setRelated] = useState([]);
  const [rating, setRating] = useState(null);

  function handleRelated(option) {
    const newRelated = [...related];
    const i = newRelated.indexOf(option);
    if (i === -1) {
      newRelated.push(option);
    } else {
      newRelated.splice(i, 1);
    }
    setRelated(newRelated);
  }

  function determineTree(i) {
    if (!rating) return false;
    if (i <= rating) return true;
    return false;
  }

  return (
    <React.Fragment>
      <TopNav />
      <div className="new-post-wrapper">
        <div className="button-wrapper">
          <span className="cancel-button">Cancel</span>
          <span className="post-button">Post!</span>
        </div>
        <div className="photo-wrapper">
          <span>UPLOAD A PHOTO</span>
        </div>
        <input
          className="post-text"
          type="text"
          placeholder={REVIEW_PLACEHOLDER}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <SelectionInput
          label={LOCATION_LABEL}
          options={LOCATIONS}
          selected={location}
          onChange={setLocation}
        />
        <SelectionInput
          multiselect
          label={RELATED_LABEL}
          options={RELATED_OPTIONS}
          selected={related}
          onChange={handleRelated}
        />
        <div className="rating-wrapper">
          <span>{RATING_LABEL}</span>
          <div>
            {[...Array(5)].map((e, i) => {
              return (
                <img
                  key={i + 1}
                  src={determineTree(i + 1) ? RedTree : WhiteTree}
                  alt="Tree Icon"
                  onClick={() => setRating(i + 1)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <BotNav />
    </React.Fragment>
  );
}

export default NewPostScreen;
