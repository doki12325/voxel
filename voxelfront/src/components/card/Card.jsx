import React, { useEffect, useState } from "react";

import "./Card.css";
import Popup from "../popup/Popup";

function Card(props) {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(
    `https://picsum.photos/500/600?random=${props.SNo}`
  );
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div
        className="card-main"
        onClick={() => {
          setPopup(true);
        }}
      >
        <img
          alt="Startup Image"
          className="card-image"
          src={imageUrl}
          loading="lazy"
          onLoad={() => {
            setLoading(false);
          }}
        />
        {loading ? (
          <div className="loading-indicator"></div>
        ) : (
          <>
            <div className="card-text">
              <span className="card-name">{props.StartupName}</span>
              <span className="card-city">{props.City}</span>
              <span className="card-subtext">{props.Date}</span>
              <span className="card-subtext">${props.AmountInUSD}</span>
            </div>
          </>
        )}
      </div>
      {popup && <Popup imageUrl={imageUrl} {...props} setPopup={setPopup} />}
    </>
  );
}

export default Card;
