import React from "react";
import CardComponent from "./CardComponent";

export default function CardComponentContainer() {
  return (
    <div className="card-container overflow-auto">
      <div className="flex gap-5 md:gap-10">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}
