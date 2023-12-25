import React from "react";
import NoImg from "../../assets/images/common/no-picture-available-icon-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightDots,
  faBed,
  faBuilding,
  faCalendarDays,
  faChair,
  faCircleExclamation,
  faLocationDot,
  faSquareParking,
} from "@fortawesome/free-solid-svg-icons";

function CardAndImage(props: {
  ageOfProperty: string;
  parking: string;
  furnishedStatus: string;
  bhk: string;
  type: string;
  status: string;
  lookingTo: string;
  city: string;
  propertyImage: [string];
}) {
  return (
    <div className="w-11/12 max-h-fullS mx-auto py-4 rounded-md flex flex-col lg:flex-row">
      <div className="lg:w-7/12">
        <img
          className="h-full w-full rounded-md"
          src={props.propertyImage ? props.propertyImage[0]: NoImg}
          alt="logo1"
        />
      </div>
      <div className="lg:w-5/12 border lg:px-2 rounded-md  lg:py-5 lg:ml-2">
        <div className="w-full flex flex-col lg:gap-4">
          <div className="grid grid-cols-2 p-3 gap-4 gap-y-6 border-t border-b md:border rounded-md  ">
            <div className="flex items-center gap-2 lg:gap-3 border-r">
              <div className="text-xl md:text-2xl lg:text-2xl  text-gray-600">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <div>
                <p className="font-bold text-sm md:text-md lg:text-lg capitalize  text-gray-600">
                  {props.type}
                </p>
                <p className="text-xs">Property Type</p>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-3 ">
              <div className="text-xl md:text-2xl lg:text-2xl  text-gray-600">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <div>
                <p className="font-bold text-sm md:text-md lg:text-lg  text-gray-600">
                  {props.ageOfProperty} Years
                </p>
                <p className="text-xs">Age Of Property</p>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-3 border-r">
              <div className="text-xl md:text-2xl lg:text-2xl  text-gray-600">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <p className="font-bold text-sm md:text-md lg:text-lg capitalize text-gray-600">
                  {props.city}
                </p>
                <p className="text-xs">City</p>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
              <div className="text-xl md:text-2xl lg:text-2xl  text-gray-600">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <div>
                <p className="font-bold text-sm md:text-md lg:text-lg  text-gray-600">
                  3
                </p>
                <p className="text-xs">Balcony</p>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-3 border-r">
              <div className="text-xl md:text-2xl lg:text-2xl  text-gray-600">
                <FontAwesomeIcon icon={faSquareParking} />
              </div>
              <div>
                <p className="font-bold text-sm md:text-md lg:text-lg capitalize text-gray-600">
                  {props.parking}
                </p>
                <p className="text-xs">Parking</p>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-3 ">
              <div className="text-xl md:text-2xl lg:text-2xl  text-gray-600">
                <FontAwesomeIcon icon={faBed} />
              </div>

              <div>
                <p className="font-bold text-sm md:text-md lg:text-lg text-gray-600">
                  {props.bhk}
                </p>
                <p className="text-xs">Apartment Type</p>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-3 border-r ">
              <div className="text-xl md:text-2xl lg:text-2xl  text-gray-600">
                <FontAwesomeIcon icon={faChair} />
              </div>
              <div>
                <p className="font-bold text-sm md:text-md lg:text-lg capitalize text-gray-600">
                  {props.furnishedStatus}
                </p>
                <p className="text-xs">Furnished Status</p>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="text-xl md:text-2xl lg:text-2xl  text-gray-600">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
              <div>
                <p className="font-bold text-smmd:text-md capitalize lg:text-lg text-gray-600">
                  {" "}
                  {props.status}
                </p>
                <p className="text-xs">Availability Status</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-around border rounded-md  py-3 bg-slate-100">
            <button className="w-5/12 py-2 font-bold text-xs sm:text-lg text-white bg-teal-500 rounded-md">
              Contact
            </button>
            <button className="w-5/12 py-2 font-bold text-xs sm:text-lg text-white bg-teal-500 rounded-md">
              Schedule Visit
            </button>
          </div>
          <div className="w-full flex justify-between px-3 items-center flex-wrap rounded-md  border py-3 bg-slate-100">
            <div className="flex gap-2">
              <FontAwesomeIcon
                className="text-2xl text-purple-400"
                icon={faArrowUpRightDots}
              />
              <p>Price trends by NBEstimate</p>
            </div>
            <button className="w-3/12 py-2 text-xs sm:text-lg font-bold text-white bg-teal-500 rounded-md">
              Check Now
            </button>
          </div>
          <div className="w-full pl-2 flex-wrap border rounded-md  py-3 bg-slate-100">
            <p className="pb-2">
              <FontAwesomeIcon
                className="text-xl font-bold  text-teal-500"
                icon={faCircleExclamation}
              />{" "}
              Report what was not correct in this property
            </p>
            <div className="flex gap-1 pl-3 w-5/6">
              <button className="w-4/12 text-xs sm:text-sm font-bold rounded-md py-2 bg-white border  border-black">
                Listed By Broker
              </button>
              <button className="w-4/12 text-xs sm:text-sm font-bold rounded-md py-2 bg-white border  border-black">
                Sold Out
              </button>
              <button className="w-4/12 text-xs sm:text-sm font-bold rounded-md py-2 bg-white border  border-black">
                Wrong Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAndImage;
