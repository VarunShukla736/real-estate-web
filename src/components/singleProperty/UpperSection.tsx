import React, { useState } from 'react'
import Logo from "../../assets/images/singleProperty/resale_logo_2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

function UpperSection(props: {
  title: string;
  type: string;
  price: number;
  area: string;
}) {
  const [fav, Setfav] = useState(false);

  return (
    <>
      <div className="w-11/12 mx-auto sm:hidden">
        <p className="font-bold text-sm  text-gray-700 capitalize">{props.title}</p>
        <p className="text-xs  text-gray-500 capitalize">{props.type}</p>
      </div>

      <div className="hidden sm:flex w-11/12 justify-stretch mx-auto border h-24">
        <div className="flex flex-col border sm:w-2/12 lg:w-1/12 justify-center content-center  flex-wrap">
          <img className="h-8 w-10" src={Logo} alt="logo" />
          <p className="text-sm text-gray-500 capitalize">Sale</p>
        </div>
        <div className="flex flex-col border w-8/12 lg:w-5/12 justify-center content-center flex-wrap gap-1">
          <p className="font-bold text-sm lg:text-md text-gray-700 capitalize">
            {props.title}
          </p>
          <p className="text-xs lg:text-sm text-gray-500 capitalize">{props.type}</p>
        </div>
        <div className="hidden lg:flex flex-col border w-1/12 justify-center content-center flex-wrap gap-1">
          <p className="font-bold text-md text-gray-700">
            <FontAwesomeIcon icon={faIndianRupeeSign} /> {props.price}
          </p>
          <p className="text-sm text-gray-500">Negotiable</p>
        </div>
        <div className="hidden lg:flex flex-col border w-1/12 justify-center content-center flex-wrap gap-1">
          <p className="font-bold text-md text-gray-700">{props.area}</p>
          <p className="text-sm text-gray-500">Sq.ft.</p>
        </div>
        <div className="hidden lg:flex flex-col border w-3/12 justify-center content-center flex-wrap gap-1">
          <p className="font-bold text-md text-gray-700">Need a Home Loan ?</p>
          <button className="w-6/12 py-1 font-bold rounded-sm text-white bg-teal-500">
            Apply Loan
          </button>
        </div>
        <div className="flex flex-col border sm:w-2/12 lg:w-1/12 justify-center content-center">
          <FontAwesomeIcon
            className={fav===true?"font-bold text-2xl text-red-700":"font-bold text-2xl text-gray-700"} onClick={() =>fav===false? Setfav(true) : Setfav(false) } icon={faHeart} 
          />
        </div>
      </div>
    </>
  );
}

export default UpperSection;
