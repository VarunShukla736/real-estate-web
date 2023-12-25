import React from "react";
import icon from "../../assets/images/homepage/groupIcon1.png";

export default function WhatWeDoComponent() {
  return (
    <div className="what-we-do-section min-h-screen	">
      <div className="section-title text-center	md:text-left">What We Do</div>
      <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="icon-container p-5">
          <div className="circular-container flex justify-center items-center">
            <img src={icon} alt="" />
          </div>
          <p className="icon-box-heading my-2 text-center">3D Planning</p>
          <p className="icon-box-desc mb-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>
        <div className="icon-container p-5">
          <div className="circular-container flex justify-center items-center">
            <img src={icon} alt="" />
          </div>
          <p className="icon-box-heading my-2 text-center">Web Platform</p>
          <p className="icon-box-desc mb-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>
        <div className="icon-container p-5">
          <div className="circular-container flex justify-center items-center">
            <img src={icon} alt="" />
          </div>
          <p className="icon-box-heading my-2 text-center">Marketing</p>
          <p className="icon-box-desc mb-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>
      </div>
    </div>
  );
}
