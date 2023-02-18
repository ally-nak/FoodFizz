import React, { useState } from "react";
import TopNav from "../../components/TopNav";
import SelectionInput from "../../components/SelectionInput";
import LOCATIONS from "../../LOCATIONS";
import "./newPost.css";
import PhotoArrow from "./photo_arrow.svg";
import RedTree from "./red_tree.svg";
import WhiteTree from "./white_tree.svg";
import { NavLink } from "react-router-dom";

function NewPostScreen() {
  const PHOTO_LABEL = "UPLOAD A PHOTO";
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

  const [photo, setPhoto] = useState(null);
  const [text, setText] = useState("");
  const [location, setLocation] = useState(null);
  const [related, setRelated] = useState([]);
  const [rating, setRating] = useState(null);

  const handleRelated = (option) => {
    const newRelated = [...related];
    const i = newRelated.indexOf(option);
    if (i === -1) {
      newRelated.push(option);
    } else {
      newRelated.splice(i, 1);
    }
    setRelated(newRelated);
  };

  const determineTree = (i) => {
    if (!rating) return false;
    if (i <= rating) return true;
    return false;
  };

  const hiddenFileInput = React.useRef(null);
  const handleUploadClick = (e) => {
    hiddenFileInput.current.click();
  };

  const handleUpload = (e) => {
    const uploadedPhoto = e.target.files[0];
    setPhoto(uploadedPhoto);
  };

  const handleSubmit = () => {
    alert("Submitting post");
    console.log({ photo, text, location, related, rating });
  };

  return (
    <React.Fragment>
      <TopNav />
      <div className="new-post-wrapper">
        <div className="button-wrapper">
          <NavLink to="/">
            <span className="cancel-button">Cancel</span>
          </NavLink>
          <NavLink onClick={handleSubmit} to="/">
            <span className="post-button">Post!</span>
          </NavLink>
        </div>
        {/* TODO: Figure out how to display uploaded photo */}
        {/* {photo && <img src={photo} alt={"User uploaded"} />} */}
        <div className="photo-wrapper" onClick={handleUploadClick}>
          <img className="photo-arrow" src={PhotoArrow} alt="Arrow Icon" />
          <span>{PHOTO_LABEL}</span>
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
            id="photo"
            name="photo"
            accept="image/png, image/jpeg"
            onChange={handleUpload}
          />
        </div>
        <textarea
          className="post-text"
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
          <span className="rating-label">{RATING_LABEL}</span>
          <div className="trees-wrapper">
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
    </React.Fragment>
  );
}

export default NewPostScreen;
