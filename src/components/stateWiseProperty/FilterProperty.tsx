import React, { useState } from "react";
import Label from "../common/form/Label";
import { faFilter, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./propertyCard.css";
import Radio from "../common/form/Radio";
import { useDispatch, useSelector } from "react-redux";
import SearchReducer, {
  SearchingFilter,
  searchingdata,
} from "../../redux/reducer/SearchReducer";

const BHK = [
  { id: 1, bhk: "1 BHK" },
  { id: 2, bhk: "2 BHK" },
  { id: 3, bhk: "3 BHK" },
  { id: 4, bhk: "4 BHK" },
  { id: 5, bhk: "5 BHK" },
];

const BtnData = [
  {
    id: 1,
    name: "Residential",
  },
  {
    id: 2,
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

function FilterProperty() {
  const dispatch = useDispatch();
  const [isopen, setIsOpen] = useState(false);
  const [types, setTypes] = useState("Residential");
  const [value, setValue] = useState(1);
  const [typeTabs, setTypeTabs] = useState(0);
  const [selectBedroom, setSelectBedroom] = useState(0);
  const [selectFurnishing, setSelectFurnishing] = useState(1);
  const { data } = useSelector((state: any) => state.search);
  const [filterData, setFilterData] = useState({
    stateCode: data.stateCode,
    city: data.city,
    status: data.status,
    furnishedStatus: "",
    type: "",
    bhk: "",
    lookingTo: "",
    propertyType: "",
    price: "",
    parking: "",
  });

  console.log(filterData, "hhgghfhfh");

  const handleSubmit = (e: any) => {
    dispatch(searchingdata({ ...e }));
  };

  const handleChange = (e: any) => {
    setFilterData({ ...data });
    const [key, value] = e;
    // dispatch(SearchingFilter({...data, key: value}));
  };

  return (
    <>
      <div className="flex w-full justify-end md:hidden py-3">
        <FontAwesomeIcon
          className="text-2xl text-gray-500 md:hidden "
          onClick={() => (isopen === true ? setIsOpen(false) : setIsOpen(true))}
          icon={faFilter}
        />
      </div>

      <div
        className={
          isopen === true
            ? "w-full md:w-3/6 lg:w-1/3 md:ml-2 lg:ml-10 h-3/6 border rounded-md bg-gray-100 p-5 my-2 "
            : "w-full md:w-3/6 lg:w-1/3 md:ml-2 lg:ml-10 h-3/6 border rounded-md bg-gray-100 p-5 my-2 hidden md:block"
        }
      >
        <div className="font-bold text-teal-600 text-2xl ml-2 pl-2 border-red-600 border-l-4">
          Filters
        </div>
        <form action="">
          <div className="mb-4 mt-4">
            <div className="flex mt-2 flex-wrap">
              {BtnData?.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      typeTabs === item.id
                        ? " font-bold py-1 px-4 lg:py-2 lg:px-7 sm:py-1 sm:px-5 md:px-6 border-b-4 bg-white shadow-2xl border-teal-800 cursor-pointer"
                        : " font-bold py-1 px-4 lg:py-2 lg:px-7 sm:py-1 sm:px-5 md:px-6 cursor-pointer"
                    }
                    onClick={() => {
                      handleChange("type=" + item.name + "-property&");
                      setTypeTabs(item.id);
                      setTypes(item.name);
                      setFilterData({
                        ...filterData,
                        type: "type=" + item.name + "-property&",
                      });
                    }}
                  >
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={types === "Commercial" ? "hidden" : "mb-4 mt-4"}>
            <Label label="Select Bedrooms" required={false} />
            <div className="flex mt-2 flex-wrap gap-2.5">
              {BHK?.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      selectBedroom === item.id
                        ? "cirular-pill active"
                        : "cirular-pill"
                    }
                    onClick={() => {
                      handleChange("bhk=" + item.bhk + "&");
                      setSelectBedroom(item.id);
                      setFilterData({
                        ...filterData,
                        bhk: "bhk=" + item.bhk + "&",
                      });
                    }}
                  >
                    <p>{item.bhk}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-4">
            <Label label="Price Range" required={false} />
            <p>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              {""} 0 to <FontAwesomeIcon icon={faIndianRupeeSign} />
              {""} {value}
            </p>
            <div className="w-full mt-2">
              <input
                type="range"
                defaultValue={value}
                onChange={(e: any) => {
                  setFilterData({
                    ...filterData,
                    price: "price=" + e.target.value + "&",
                  });
                  setValue(e.target.value);
                }}
                min={0}
                max={1000000000}
                step={1000}
                className="slider"
              />
            </div>
          </div>
          <div className="mb-4">
            <Label label="Availability" required={false} />
            <div className="flex mt-2  gap-2 flex-wrap">
              <div>
                <input
                  type="radio"
                  id="readyToMove"
                  name="Availability"
                  value="readyToMove"
                  className="mr-1 cursor-pointer"
                  onChange={(e) =>
                    setFilterData({ ...filterData, status: "status="+e.target.value+"&"})
                  }
                />
                <label className="capitalize" htmlFor="readyToMove">
                  ready To Move
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="underConstruction"
                  name="Availability"
                  value="underConstruction"
                  className="mr-1 cursor-pointer"
                  onChange={(e) =>
                    setFilterData({ ...filterData, status:"status="+e.target.value+"&"})
                  }
                />
                <label className="capitalize" htmlFor="underConstruction">
                  under Construction
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <Label label="Furnishing" required={false} />
            <div className="flex mt-2  flex-wrap gap-2.5">
              {Furnishing?.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className={
                      selectFurnishing === item.id
                        ? "cirular-pill active"
                        : "cirular-pill"
                    }
                    onClick={() => {
                      handleChange("furnishedStatus=" + item.type + "&");
                      setSelectFurnishing(item.id);
                      setFilterData({
                        ...filterData,
                        furnishedStatus: "furnishedStatus=" + item.type + "&",
                      });
                    }}
                  >
                    <p>{item.type}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-4">
            <Label label="Parking" required={false} />
            <div className="flex gap-2 flex-wrap">
              <div>
                <input
                  type="radio"
                  id="yes"
                  name="parking"
                  value="yes"
                  className="mr-1 cursor-pointer"
                  onChange={(e) =>
                    setFilterData({ ...filterData, parking: "parking="+e.target.value+"&"})
                  }
                />
                <label className="capitalize" htmlFor="yes">
                  yes
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="no"
                  name="parking"
                  value="no"
                  className="mr-1 cursor-pointer"
                  onChange={(e) =>
                    setFilterData({ ...filterData, parking: "parking="+e.target.value+"&" })
                  }

                />
                <label className="capitalize" htmlFor="no">
                  no
                </label>
              </div>
            </div>
          </div>
          <input type="submit" onClick={() => handleSubmit(filterData)} />
        </form>
      </div>
    </>
  );
}

export default FilterProperty;
