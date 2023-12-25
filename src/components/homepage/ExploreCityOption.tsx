import React, { useState } from "react";
import Delhi from "../../assets/images/homepage/cities/Delhi.jpg";
import Indore from "../../assets/images/homepage/cities/Indore.jpg";
import Banglore from "../../assets/images/homepage/cities/Banglore.jpg";
import Chennai from "../../assets/images/homepage/cities/Chennai.jpg";
import Hydrabad from "../../assets/images/homepage/cities/Hyderabad.jpg";
import Kolkata from "../../assets/images/homepage/cities/Kolkata.jpg";
import Mumbai from "../../assets/images/homepage/cities/Mumbai.jpg";
import Pune from "../../assets/images/homepage/cities/Pune.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchingdata } from "../../redux/reducer/SearchReducer";

const CitiesData = [
  {
    Img: Indore,
    citieName: "Uttar Pradesh",
    Properties: "115000",
    isoCode: "UP",
  },
  {
    Img: Delhi,
    citieName: "Goa",
    Properties: "16000",
    isoCode: "GA",
  },
  {
    Img: Banglore,
    citieName: "Bangalore",
    Properties: "25000",
    isoCode: "KA",
  },
  {
    Img: Chennai,
    citieName: "Chennai",
    Properties: "125000",
    isoCode: "TN",
  },
  {
    Img: Hydrabad,
    citieName: "Hyderabad",
    Properties: "12000",
    isoCode: "TG",
  },
  {
    Img: Pune,
    citieName: "Chandigarh",
    Properties: "85000",
    isoCode: "CH",
  },
  {
    Img: Kolkata,
    citieName: "Kolkata",
    Properties: "65000",
    isoCode: "WB",
  },
  {
    Img: Mumbai,
    citieName: "Mumbai",
    Properties: "225000",
    isoCode: "MH",
  },
];

function ExploreCityOption() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState({
    stateCode: "",
    city: "",
    status: "",
    furnishedStatus: "",
    type: "",
    bhk: "",
    lookingTo: "",
    propertyType: "",
    price: "",
  });

  console.log(filterData, "explore city");

  const handleCityData = (filterData:any) => {
    if(filterData.city !== ""){
      dispatch(searchingdata({...filterData}));
      navigate(`/state-wise-property`);
    }
   
  };

  return (
    <div className=" p-3 md:p-4 lg:p-6 font-bold">
      <p className="text-2xl text-gray-600 ">Top Cities</p>
      <p className="text-xl mb-8 mt-2">
        Explore Real Estate in Popular Indian Cities
      </p>
      <div className="grid grid-cols-2  md:grid-cols-3  lg:grid-cols-5 lg:gap-5 gap-4 mt-5">
        {CitiesData?.map((d, i) => {
          return (
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => {
                setFilterData({...filterData, city: "city="+d.citieName+"&"});
                handleCityData(filterData);
            }}
              key={i}
            >
              <img
                className="h-20 w-20 rounded-md hover:scale-110"
                src={d.Img}
                alt={d.citieName}
              />
              <div className="flex flex-col justify-center gap-2">
                <p className="text-md md:text-xl">{d.citieName}</p>
                <p className="text-sm text-gray-600">
                  {d.Properties}+ Properties
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreCityOption;
