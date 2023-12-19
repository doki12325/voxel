import React from "react";
import { MdClose } from "react-icons/md";

import "./Popup.css";

function Popup(props) {
  return (
    <div className="popup-wrapper">
      <div className="popup-main">
        <img className="popup-image" src={props.imageUrl} />
        <div className="popup-text-container">
          <span className="popup-name">{props.StartupName}</span>
          <span className="popup-subtext">{props.SubVertical}</span>
          <span className="popup-smalltext">{props.Domain}</span>
          <span className="popup-smalltext">{props.City}</span>
          <span className="popup-smalltext">{props.Date}</span>
          <span className="popup-smalltext">{props.InvestorsName}</span>
          <span className="popup-smalltext">{props.InvestmentType}</span>
          <span className="popup-smalltext">${props.AmountInUSD}</span>
        </div>
        <div
          className="popup-close-button"
          onClick={() => props.setPopup(false)}
        >
          <MdClose color="white" size={"1.5rem"} />
        </div>
      </div>
    </div>
  );
}

export default Popup;
