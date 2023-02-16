import "./SelectionInput.css";
import React from "react";

function SelectionInput(props) {
  function checkSelection(option) {
    if (props.multiselect) {
      return props.selected.some((e) => e === option);
    } else {
      return option === props.selected;
    }
  }
  return (
    <React.Fragment>
      <div className="question-wrapper">
        <span className="question-label">{props.label}</span>
        <div className="selections-wrapper">
          {props.options.map((option) => (
            <div
              key={option}
              className={
                checkSelection(option) ? "selection selected" : "selection"
              }
              onClick={() => props.onChange(option)}
            >
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SelectionInput;
