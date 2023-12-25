import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import NoImg from "../../assets/images/common/no-picture-available-icon-1.jpg";

function TopLocaltiesCard(props: {
  Id: string;
  Name: string;
  Img: [string];
  Address: string;
  Price: number;
}) {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate("/single-property", { state: { id } });
  };

  return (
    <div
      className="relative cursor-pointer h-56 w-full hover:scale-105"
      key={props.Id}
      onClick={() => handleClick(props.Id)}
    >
      <img
        className="rounded-xl h-full w-full object-cover "
        src={props?.Img ? props.Img[0] : NoImg}
        alt="Site"
      />
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between topLocalties p-2.5 rounded-xl">
        <div>
          <p className="text-end font-sans text-lg text-white">View</p>
        </div>
        <div> 
          <div className="text-white font-bold">{props.Name}</div>
          {/* <div className="text-white">{props.Address}</div> */}
          <div className="text-white font-bold">
            <FontAwesomeIcon icon={faIndianRupeeSign} />
            {props.Price}
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default TopLocaltiesCard;
