import React, { useEffect, useState } from "react";
import "./homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UsePropertyHook from "../../serviceHandler/PropertyHook";
import { faAsterisk, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { errorMessage } from "../../constant/constant";
import { useDispatch } from "react-redux";
import { searchingdata } from "../../redux/reducer/SearchReducer";
const BtnData = [
  {
    name: "Residential",
  },
  {
    name: "Commercial",
  },
];

const Furnishing = [
  {
    id: "1",
    type: "fully-furnished",
  },
  {
    id: "2",
    type: "unfurnished",
  },
  {
    id: "3",
    type: "semi-furnished",
  },
];

const BHK = [
  { id: 1, bhk: "1 BHK" },
  { id: 2, bhk: "2 BHK" },
  { id: 3, bhk: "3 BHK" },
  { id: 4, bhk: "4 BHK" },
  { id: 5, bhk: "5 BHK" },
];

const status = [
  { id: 1, name:"Ready To Move" ,status: "readyToMove" },
  { id: 2, name:"Under Construction" ,status: "underConstruction" },
];

export default function Banner() {
  const { stateByCountryCodeHandler } = UsePropertyHook();
  const { cityByStateCodeHandler } = UsePropertyHook();
  const { getPropertyTypeHandler } = UsePropertyHook();
  const dispatch = useDispatch();
  const [searchTabs, setSearchTabs] = useState(1);
  const [state, setState] = useState([]);
  const [city, setcity] = useState([]);
  const [stateCode, setStateCode] = useState("DL");
  const [type, setType] = useState("Residential");
  const [typeOfProperty, setTypeOfProperty] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [filterData, setFilterData] = useState({
    stateCode: "",
    city: "",
    status: "",
    furnishedStatus: "",
    type: "type=Residential-property&",
    bhk: "",
    lookingTo: "",
    propertyType: "",
    price: "",
    parking: "",
  });

  console.log(filterData);

  const handleClick = (filterData: any) => {
    if (filterData.stateCode?.length !== 0) {
      window.scrollTo(0, 0);
      setError(true);
    } else {
      dispatch(searchingdata({ ...filterData }));
      navigate("/state-wise-property");
    }
  };

  useEffect(() => {
    const getStateData = async () => {
      try {
        const res = await stateByCountryCodeHandler("IN");
        setState(res);
      } catch (error) {
        console.log("Error", error);
      }
    };
    const getCityData = async () => {
      try {
        const res = await cityByStateCodeHandler(stateCode);
        setcity(res);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getCityData();
    getStateData();
  }, [stateCode]);

  return (
    <div>
      <div className="bannerContainer ">
        <div className="banner flex flex-col justify-center items-center gap-4 bg-center backdrop-saturate-200 backdrop-opacity-60 bg-no-repeat bg-cover  lg:gap-5">
          <div className="font-bold text-3xl md:text-4xl text-center lg:text-5xl text-white">
            <b>
              Discover a place you'll<br />  love to live
            </b>
          </div>
          <div className="flex gap-3">
            {BtnData?.map((item, index) => {
              return (
                <button
                  className={
                    searchTabs === index + 1
                      ? "border font-bold py-1 px-4 bg-teal-800 lg:py-3 lg:px-14 sm:py-1 sm:px-5 md:px-6 rounded-lg text-white  hover:bg-teal-800 "
                      : "border font-bold py-1 px-4 lg:py-3 lg:px-14 sm:py-1 sm:px-5 md:px-6 rounded-lg text-white bg-transparent hover:bg-teal-800"
                  }
                  key={index}
                  onClick={() => {
                    setSearchTabs(index + 1);
                    setType(item.name);
                    setFilterData({
                      ...filterData,
                      type: "type=" + item.name + "-property&",
                    });
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <div className="md:w-9/12 p-1 sm:p-2 md:p-3 flex flex-col gap-3  lg:w-8/12 sm:w-11/12 setState mb-0 bg-white rounded-xl">
            <div className="w-full flex flex-col gap-2 sm:flex-row">
              <select
                className="lg:w-4/12 sm:w-2/6  h-12 pl-2 shadow-none border border-gray-950 bg-teal-50 sm:rounded-md rounded-t-xl"
                name="state"
                id="state"
                onChange={(isoCode: any) => {
                  setStateCode(isoCode.target.value);
                  state?.map((state: any) => {
                    if (state.isoCode === isoCode.target.value) {
                      setFilterData({
                        ...filterData,
                        stateCode: "State=" + state.name + "&",
                      });
                    }
                  });
                 
                }}
              >
                <option value="">--Select State--</option>
                {state?.map((item: any, index: any) => {
                  return (
                    <option key={index} value={item.isoCode}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              
              <select
                className="lg:w-6/12 pl-2 sm:w-3/6 h-12 border shadow-none border-gray-950 sm:rounded-md bg-teal-50"
                name="city"
                id="city"
                onChange={(city: any) => {
                  setFilterData({
                    ...filterData,
                    city: "city=" + city.target.value + "&",
                  });
                }}
              >
                <option value="">--Select City--</option>
                {stateCode !== "" ? (
                  city?.map((item: any, index: any) => {
                    return (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })
                ) : (
                  <option value="">Please Select Any State</option>
                )}
              </select>
            <button
              className="w-1/6 md:2/12 sm:w-1/6  lg:w-2/12 hidden shadow-none sm:inline text-white text-2xl h-12 border justify-center rounded-md bg-teal-700"
              onClick={() => handleClick(filterData)}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            </div>
            <div className="w-full bg-white items-center flex flex-col rounded-b-xl  sm:flex-row">
              <div className="mb-2 w-full sm:w-4/12 my-2 sm:my-0 md:3/12 lg:w-3/12 lg:flex lg:flex-col h-full">
                <div className="flex gap-2 w-full sm:flex-wrap  justify-center lg:justify-start  lg:ml-1">
                  <div>
                    <input
                      type="radio"
                      id="Rent/Lease"
                      name="select"
                      value="Rent/Lease"
                      className="mr-1 cursor-pointer"
                      onChange={(lookingTo: any) => {
                        setFilterData({
                          ...filterData,
                          lookingTo:
                            "lookingTo=" + lookingTo.target.value + "&",
                        });
                      }}
                    />
                    <label htmlFor="Rent/Lease">Rent/Lease</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="PG"
                      name="select"
                      value="PG"
                      className={
                        type === "Residential"
                          ? "mr-1 shadow-none cursor-pointer"
                          : "hidden"
                      }
                      onChange={(lookingTo: any) => {
                        setFilterData({
                          ...filterData,
                          lookingTo:
                            "lookingTo=" + lookingTo.target.value + "&",
                        });
                      }}
                    />
                    <label
                      className={
                        type === "Residential" ? "shadow-none cursor-pointer" : "hidden"
                      }
                      htmlFor="PG"
                    >
                      PG
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row w-full sm:w-11/12 gap-2">
                <select
                  className={type === "Residential" ? "shadow-none border border-gray-950 sm:rounded-md bg-teal-50 pl-2" : "hidden"}
                  name="bhk"
                  id="bhk"
                  onChange={(bhk: any) => {
                    setFilterData({
                      ...filterData,
                      bhk: "bhk=" + bhk.target.value + "&",
                    });
                  }}
                >
                  <option value="">--Select Bedrooms--</option>
                  {BHK?.map((item: any) => {
                    return (
                      <option key={item.id} value={item.bhk}>
                        {item.bhk}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="pl-2 border shadow-none border-gray-950 sm:rounded-md bg-teal-50"
                  name="status"
                  id="status"
                  onChange={(status: any) => {
                    setFilterData({
                      ...filterData,
                      status: "status=" + status.target.value + "&",
                    });
                  }}
                >
                  <option value="">--Status--</option>
                  {status?.map((item: any) => {
                    return (
                      <option key={item.id} value={item.status}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="pl-2 border mb-2 shadow-none sm:mb-0 border-gray-950 sm:rounded-md bg-teal-50"
                  name="Furnishing"
                  id="Furnishing"
                  onChange={(furnishedStatus: any) => {
                    setFilterData({
                      ...filterData,
                      furnishedStatus:
                        "furnishedStatus=" + furnishedStatus.target.value + "&",
                    });
                  }}
                >
                  <option value="">--Furnishing--</option>
                  {Furnishing?.map((item: any) => {
                    return (
                      <option key={item.id} value={item.type}>
                        {item.type}
                      </option>
                    );
                  })}
                </select>
                {/* <select
                  className={type === "Residential" ? "hidden" : "w-full mb-1 sm:mb-0"}
                  name="propertyType"
                  id="propertyType"
                  onChange={(propertyType: any) => {
                    setFilterData({
                      ...filterData,
                      propertyType:
                        "propertyType=" + propertyType.target.value + "&",
                    });
                  }}
                >
                  <option value="">--Select Property Type--</option>
                  {typeOfProperty?.map((item: any, index: any) => {
                    return (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select> */}
              </div>
              <button
                className="w-full md:2/12 sm:hidden shadow-none  lg:w-2/12 sm:w-2/12   text-white text-2xl h-12 border justify-center rounded-md bg-teal-500"
                onClick={() => handleClick(filterData)}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
              </button>
            </div>
            {/* {error && filterData.stateCode.length === 0 ? (
              <div
                className="bg-orange-100  border-l-4 border-orange-500 relative rounded-md text-orange-700 p-4"
                role="alert"
              >
                <p className="font-bold">Required Fields</p>
                <p>Please Fill The State Field</p>
              </div>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
