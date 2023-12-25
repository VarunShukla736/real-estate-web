import React, { useState } from "react";
import {
  faArrowUpRightFromSquare,
  faSquareParking,
  faBed,
  faBuilding,
  faCalendarDays,
  faFlag,
  faHeart,
  faIndianRupeeSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import NoImg from "../../assets/images/common/no-picture-available-icon-1.jpg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function PropertyCard(props: {
  id: string;
  title: string;
  description: string;
  price: string;
  parking: string;
  area: string;
  bhk: string;
  type: string;
  status: string;
  city: string;
  images: [string];
}) {
  const [fav, Setfav] = useState(false);
  const navigate = useNavigate();

  const handleCityId = (id: string) => {
    navigate("/single-property", { state: { id } });
  };

  return (
    <div
      className="md:w-11/12 lg:w-10/12 mx-auto border overflow-y-auto max-h-full mb-3 capitalize"
      key={props.id}
    >
      <div
        className="border p-2 bg-slate-50 cursor-pointer"
        onClick={() => handleCityId(props.id)}
      >
        <p className="font-bold text-md hover:text-teal-700">
          {props.title} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </p>
        <p className="text-sm text-gray-600">
          {props.description} <FontAwesomeIcon icon={faLocationDot} />
          {""}
          {""} Explore Nearby
        </p>
      </div>
      <div className="hidden md:flex w-full py-4 items-center justify-evenly  border">
        <div className="border-r  justify-center">
          <p className="pr-3 md:pr-24 text-gray-700">
            <FontAwesomeIcon icon={faIndianRupeeSign} /> {props.price}
          </p>
          <p className="text-gray-500 ">Buy</p>
        </div>
        <div className="border-r">
          <p className="pr-3 md:pr-24 text-gray-700">{props.area}</p>
          <p className="text-gray-500">Area</p>
        </div>
        <div>
          <p className="text-gray-700">{props.area}</p>
          <p className="text-gray-500">Area</p>
        </div>
      </div>
      <div className="md:flex">
        <div className="w-full mt-2 h-2/4 md:w-2/5">
          <AwesomeSlider>
            {props?.images?.map((data: any) => {
              return (
                <div>
                  <img
                    className="m-auto md:my-4 w-full md:h-40 md:max-h-full md:w-full rounded-md"
                    src={props?.images ? data : NoImg}
                    alt="Houses"
                  />
                </div>
              );
            })}
          </AwesomeSlider>
        </div>
        <div className="h-full w-full gap-3 mt-3">
          <div className="grid grid-cols-2 p-3 gap-4 border-t border-b md:border md:mr-3 ">
            <div className="flex items-center gap-2 lg:gap-5 border-r">
              <div className="text-xl md:text-2xl lg:text-4xl  text-gray-700">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <div>
                <p className="font-bold text-sm md:text-md capitalize lg:text-lg  text-gray-700">
                  {props.type}
                </p>
                <p className="text-xs">Property Type</p>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-5 ">
              <div className="text-xl md:text-2xl lg:text-3xl  text-gray-700">
                <FontAwesomeIcon icon={faBed} />
              </div>

              <div>
                <p className="font-bold text-sm md:text-md lg:text-lg text-gray-700">
                  {props.bhk}
                </p>
                <p className="text-xs">Apartment Type</p>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-5 border-r ">
              <div className="text-xl md:text-2xl lg:text-4xl  text-gray-700">
                <FontAwesomeIcon icon={faSquareParking} />
              </div>
              <div>
                <p className="font-bold text-sm md:text-md lg:text-lg text-gray-700">
                  {props.parking}
                </p>
                <p className="text-xs">Parking</p>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-5">
              <div className="text-xl md:text-2xl lg:text-4xl  text-gray-700">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
              <div>
                <p className="font-bold text-smmd:text-md lg:text-lg font capitalize  text-gray-700">
                  {props.status}
                </p>
                <p className="text-xs">Availability Status</p>
              </div>
            </div>
          </div>
          <div className="mx-2 md:mx-5 py-1 md:py-4 flex gap-3">
            <button className="border font-bold w-3/5  rounded-md md:py-2 text-white bg-teal-600 hover:bg-teal-700">
              Get Owner Details
            </button>
            <button
              className={
                fav === true
                  ? "border w-1/6 text-2xl rounded-md text-red-700"
                  : "border w-1/6 text-2xl rounded-md text-gray-500"
              }
            >
              <FontAwesomeIcon
                onClick={() => (fav === false ? Setfav(true) : Setfav(false))}
                icon={faHeart}
              />
            </button>
            <button className="border w-1/6 text-2xl rounded-md text-gray-500">
              <FontAwesomeIcon icon={faFlag} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
