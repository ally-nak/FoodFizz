
import React, { useState } from "react";
import Popup from 'reactjs-popup';
import LOCATIONS from "../../LOCATIONS";
import SelectionInput from "../../components/SelectionInput";
import FilterIcon from "./filter_icon.svg";
import 'reactjs-popup/dist/index.css';
import './Filter.css';
import "../../screens/CheckInScreen/checkIn.css";

function PopupFilter() {
  const LOCATION_LABEL = "Where do you usually eat?";
  const DIETARY_LABEL = "Any dietary restrictions?";
  const DIETARY_OPTIONS = ["Vegetarian", "Vegan", "Gluten-Free"];
  const [location, setLocation] = useState([]);
  const [dietary, setDietary] = useState([]);

  const handleSubmit = (e) => {
    /* TODO: Save user preferences to firebase */
    alert("Preferences filter submitted");
    e.preventDefault();
  };

  const handleLocation = (option) => {
    const newLocation = [...location];
    const i = newLocation.indexOf(option);
    if (i === -1) {
        newLocation.push(option);
    } else {
        newLocation.splice(i, 1);
    }
    setLocation(newLocation);
 };

 const handleDietary = (option) => {
    const newDietary = [...dietary];
    const i = newDietary.indexOf(option);
    if (i === -1) {
        newDietary.push(option);
    } else {
        newDietary.splice(i, 1);
    }
    setDietary(newDietary);
 };

 return (
    <Popup className="my-popup"
        trigger={<button className='button-style'> <img src={FilterIcon} alt="Filter"/><span className="white-text">Filter</span></button>}
            modal>
            {
            close => (
                <React.Fragment>
                    <div className="check-in-wrapper" style={{backgroundColor: 'transparent'}}>
                        <div className="check-in-form">
                        <span className="check-in-title">PREFERENCES</span>
                        <SelectionInput
                            multiselect
                            label={LOCATION_LABEL}
                            options={LOCATIONS}
                            selected={location}
                            onChange={handleLocation}
                        />
                        <SelectionInput
                            multiselect
                            label={DIETARY_LABEL}
                            options={DIETARY_OPTIONS}
                            selected={dietary}
                            onChange={handleDietary}
                        />
                        <div className="submit" onClick={(e) => {handleSubmit(e); close();}}>
                            <span>Save</span>
                        </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    </Popup>
  );
}

export default PopupFilter;
