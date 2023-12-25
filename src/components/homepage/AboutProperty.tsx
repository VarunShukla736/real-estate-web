import React from "react";

export default function AboutProperty() {
  return (
    <div className="property-container">
      <div className="property-overlay">
        <div className="property-detail flex flex-col gap-3">
          <p className="name">Lodha Miracles</p>
          <p className="address">Andheri East, Mumbai</p>
          <p className="price">450K - 680K</p>
          <div className="flex flex-wrap gap-5 pill-container">
            <p className="pill">1BHK</p>
            <p className="pill">2BHK</p>
            <p className="pill">Rental</p>
          </div>
        </div>
      </div>
    </div>
  );
}
