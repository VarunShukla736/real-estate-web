import React from "react";
import logo from "../../assets/images/homepage/companyLogo.png";

export default function CardComponent() {
  return (
    <div className="box-shadow rounded-3xl">
      <div className="inner-padding">
        <img src={logo} alt="" />
        <div className="mt-2.5 flex flex-col gap-2.5">
          <p className="card-name">Lodha Group</p>
          <p className="card-experience">35+ years of experience</p>
          <p className="card-years">270+ Project Done</p>
          <button className="check-button">Check profile</button>
        </div>
      </div>
    </div>
  );
}
