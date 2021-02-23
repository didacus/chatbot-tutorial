import React from "react";

import "./Options.css";


const Options = (props) => {
  const options = props.options

  const buttonsMarkup = options.map((option) => {
    if(option.secondary) {
      return(
        <button key={option.id} onClick={option.handler} className="option-button-secondary">
          {option.text}
        </button>
      )
    } else {
      return(
        <button key={option.id} onClick={option.handler} className="option-button">
          {option.text}
        </button>
      )
    }
});
  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
