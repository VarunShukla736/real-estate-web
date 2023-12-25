import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function TestimonialsCard(props: {
  Name: string;
  img: string;
  occupation: string;
  ReviewText: string;
}) {
  return (
    <div className="flex justify-center">
      <div className="min-w-full overflow-y-auto p-3 rounded-lg">
        <div className="flex flex-col gap-3 sm:flex-row pb-5">          
          <img
            className="w-full  sm:w-56 h-60 rounded-md object-fill"
            src={props.img}
            alt="client"
          />          
          <div className="flex flex-col justify-between ">
            <div>
            <p className="text-lg sm:text-xl">"{props.ReviewText}"</p>
            </div>           
            <div>
              <p className="text-xl sm:text-2xl text-teal-700">{props.Name}</p>
              <p className="text-xl sm:text-2xl">{props.occupation}</p>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default TestimonialsCard;
