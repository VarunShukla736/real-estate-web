import React from "react";
import houseImage from "../../assets/images/homepage/houseImage1.png";

export default function RecentProject() {
  return (
    <div className="what-we-do-section min-h-screen	 bg-white">
      <div className="section-title text-center	md:text-left">
        Check Our Recent Project
      </div>
      <div className="w-full">
        <p className="about-project">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velita.
        </p>
        <img className="about-image" src={houseImage} alt="" />
      </div>
    </div>
  );
}
