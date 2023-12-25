import React from "react";
import locaityImage from "../../assets/images/homepage/localityImage.png";

export default function LocalityCard() {
  return (
    <div className="locality-card-container">
      <img src={locaityImage} alt="" />
      <div className="image-detail">
        <p className="location">Bandra</p>
        <p className="specification">sea-facing, spacious</p>
      </div>
    </div>
  );
}
