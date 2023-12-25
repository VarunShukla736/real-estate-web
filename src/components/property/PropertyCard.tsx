import React, { useEffect } from "react";
import propertyImage from "../../assets/images/homepage/bannerImage3.png";
import { BsStarFill, BsStar } from "react-icons/bs";
import "./propertyCard.css";

export default function PropertyCard(props: { item: any }) {
  const removeFromFav = (id: string) => {};

  useEffect(() => {}, []);
  return (
    <div className="propertyCardContainer">
      <div className="propertyImageContainer">
        <img src={propertyImage} alt="property" />
        {/* <BsStar fontSize={24} className="starIcon" color="#ffd700" /> */}
        <BsStarFill
          fontSize={24}
          className="starIcon"
          color="#ffd700"
          onClick={() => removeFromFav(props.item.id)}
        />
      </div>
      <div className="propertyCardDetail">
        <p className="title">Property title</p>
        <p className="address">The Raddision hall, Karol Bagh, Delhi</p>
      </div>
    </div>
  );
}
