import React from "react";
import LocalityCard from "./LocalityCard";

export default function Localities() {
  return (
    <div className="what-we-do-section min-h-screen	">
      <div className="section-title text-center	md:text-left">Localities</div>
      <div className="w-full mb-8">
        <p className="locality-text">
          Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
          tempor incididunt ut labore et.
        </p>
      </div>
      <div className="w-full overflow-auto carousal-container">
        <div className="flex gap-10">
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
        </div>
      </div>
    </div>
  );
}
