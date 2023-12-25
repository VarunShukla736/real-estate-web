import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { errorMessage } from "../../constant/constant";
import Error from "../common/alert/Error";
import Success from "../common/alert/Success";
import Label from "../common/form/Label";
import UsePropertyHook from "../../serviceHandler/PropertyHook";
import { propertyDataByIdInterface } from "../../interface/property";
import { useNavigate } from "react-router-dom";
import { getAmenitiesData } from "../../service/Property";
import { RxCross2 } from "react-icons/rx";

const lookingForResidential = [
  { id: 1, type: "Sell" },
  { id: 2, type: "Rent/Lease" },
  { id: 3, type: "PG" },
];
const lookingForCommercial = [
  { id: 1, type: "Sell" },
  { id: 2, type: "Rent/Lease" },
];

const parking = [
  { id: 1, status: "Yes" },
  { id: 2, status: "No" },
];

const BHK = [
  { id: 1, bhk: "1 BHK" },
  { id: 2, bhk: "2 BHK" },
  { id: 3, bhk: "3 BHK" },
  { id: 4, bhk: "4 BHK" },
  { id: 5, bhk: "5 BHK" },
];

const propertyTypeData = [
  {
    id: 1,
    name: "Residential",
    type: "Residential-property",
  },
  {
    id: 2,
    name: "Commercial",
    type: "Commercial-property",
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

export default function Add(props: {
  onSubmit: any;
  detail: propertyDataByIdInterface | null;
}) {
  const { detail } = props;
  const navigate = useNavigate();
  const { uploadImagesHandler } = UsePropertyHook();
  const { stateByCountryCodeHandler } = UsePropertyHook();
  const { cityByStateCodeHandler } = UsePropertyHook();
  const { getPropertyTypeHandler } = UsePropertyHook();
  const [propertyTypeActive, setPropertyTypeActive] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectBedroom, setSelectBedroom] = useState(1);
  const [isParking, setIsParking] = useState(1);
  const [error, setError] = useState(false);
  const [validNumberOnFloor, setValidNumberOnFloor] = useState(true);
  const [validNumberTotalFloor, setValidNumberTotalFloor] = useState(true);
  const [validNumberAge, setValidNumberAge] = useState(true);
  const [floorError, setFloorError] = useState(false);
  const [state, setState] = useState([]);
  const [city, setcity] = useState([]);
  const [stateCode, setStateCode] = useState("");
  const [type, setType] = useState("Residential-property");
  const [typeOfProperty, setTypeOfProperty] = useState([]);
  const [amenitiesData, setAmenitiesData] = useState([]);
  const { propertyErrorMsg, propertySuccessMsg } = useSelector(
    (state: any) => state.common
  );
  const [propertyData, setPropertyData] = useState<propertyDataByIdInterface>({
    id: "",
    title: "",
    userId: "",
    type: "Residential-property",
    propertyType: "",
    description: "",
    state: "",
    city: "",
    images: [],
    area: "",
    price: "",
    amenities: "",
    lookingTo: "Sell",
    furnishedStatus: "",
    totalFloor: "",
    propertyOnFloor: "",
    ageOfProperty: "",
    bhk: "1 BHK",
    status: "",
    parking: "Yes",
  });
  const { userInfo } = useSelector((state: any) => state?.user);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  const validateFloor = (e: any) => {
    if (
      propertyData.totalFloor < propertyData.propertyOnFloor &&
      propertyData.totalFloor.length !== 0
    ) {
      setFloorError(true);
    } else {
      setFloorError(false);
    }
  };

  const validateNumberOnFloor = (number: any) => {
    if (
      String(number)
        .toLowerCase()
        .match(/^\d{1,3}$/)
    ) {
      setValidNumberOnFloor(true);
    } else {
      setValidNumberOnFloor(false);
    }
  };
  const validateNumberTotalFloor = (number: any) => {
    if (
      String(number)
        .toLowerCase()
        .match(/^\d{1,3}$/)
    ) {
      setValidNumberTotalFloor(true);
    } else {
      setValidNumberTotalFloor(false);
    }
  };
  const validateNumberAge = (number: any) => {
    if (
      String(number)
        .toLowerCase()
        .match(/^\d{1,3}$/)
    ) {
      setValidNumberAge(true);
    } else {
      setValidNumberAge(false);
    }
  };

  const getAllAmenitiesData = async () => {
    const res = await getAmenitiesData();
    setAmenitiesData(res.data.result);
  };

  //Image Upload Function

  const handleImageChange = async (event: any) => {
    let data = new FormData();
    data.append("file", event.target.files[0]);
    const res = await uploadImagesHandler(data);
    const url = res.baseUrl + res.imagePath;
    setPropertyData({ ...propertyData, images: [...propertyData.images, url] });
  };

  // const handleImageChange = async (event: any) => {
  //   const data = new FormData();
  //   data.append("file", event.target.files[0]);
  //   const res = await uploadImagesHandler(data);
  //   const url = res.baseUrl + res.imagePath;
  //   setPropertyData({ ...propertyData, images: [...propertyData.images, url] });
  // };

  const removeImage = (id: any) => {
    const newArr = propertyData.images.filter((item, index) => index !== id);
    setPropertyData({
      ...propertyData,
      images: [...newArr],
    });
  };

  const getStateData = async () => {
    if (detail) {
      setPropertyData({ ...detail });
      setSelectBedroom(0);
      setActiveIndex(0);
      setIsParking(0);
      setPropertyTypeActive(0);
      state.map((state: any) => {
        if (state.name === detail.state) {
          setStateCode(state.isoCode);
        }
      });
    }
    try {
      const res = await stateByCountryCodeHandler("IN");
      setState(res);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const getPropertyType = async () => {
    try {
      const res = await getPropertyTypeHandler(propertyData.type);
      setTypeOfProperty(res);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const getCityData = async () => {
    try {
      const res = await cityByStateCodeHandler(stateCode);
      if (res.length) {
        setcity(res);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      propertyData.title?.length === 0 ||
      propertyData.propertyType?.length === 0 ||
      propertyData.type?.length === 0 ||
      propertyData.description?.length === 0 ||
      propertyData.state?.length === 0 ||
      propertyData.city?.length === 0 ||
      propertyData.area?.length === 0 ||
      propertyData.price?.length === 0 ||
      propertyData.lookingTo?.length === 0 ||
      propertyData.furnishedStatus?.length === 0 ||
      propertyData.totalFloor?.length === 0 ||
      propertyData.propertyOnFloor?.length === 0 ||
      propertyData.status?.length === 0
    ) {
      window.scrollTo(0, 0);
      setError(true);
    } else {
      if (
        validNumberOnFloor ||
        validNumberTotalFloor ||
        validNumberAge ||
        floorError
      ) {
        const formData = {
          title: propertyData.title,
          userId: userInfo.id,
          type: propertyData.type,
          propertyType: propertyData.propertyType,
          description: propertyData.description,
          images: propertyData.images,
          state: propertyData.state,
          city: propertyData.city,
          area: propertyData.area,
          price: propertyData.price,
          bhk: propertyData.bhk,
          amenities: propertyData.amenities,
          ownerName: userInfo.name,
          ownerPhoneNumber: userInfo.phoneNumber,
          lookingTo: propertyData.lookingTo,
          furnishedStatus: propertyData.furnishedStatus,
          totalFloor: propertyData.totalFloor,
          propertyOnFloor: propertyData.propertyOnFloor,
          ageOfProperty: propertyData.ageOfProperty,
          status: propertyData.status,
          parking: propertyData.parking,
        };
        props.onSubmit(formData);
        window.scrollTo(0, 0);
        navigate("/listing");
      }
    }
  };

  useEffect(() => {
    getPropertyType();
  }, [propertyData.type]);

  useEffect(() => {
    getAllAmenitiesData();
    getCityData();
    getStateData();
  }, [detail, stateCode]);

  console.log(propertyData.type, "propertyData");
  console.log(detail?.type, "detail");
  return (
    <>
      <div className="w-full p-5">
        <div className="form-container">
          <p className="form-title mb-2">Add Property</p>
          {propertyErrorMsg ? (
            <Error msg={propertyErrorMsg} />
          ) : propertySuccessMsg ? (
            <Success msg={propertySuccessMsg} />
          ) : (
            ""
          )}
          <form action="" className="py-5">
            <div className="flex flex-col sm:flex-row item-start md:items-center">
              <div className="p-2.5 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 w-1/2">
                <Label label="Looking for?" required={false} />
                {propertyData.type === "Residential-property" && (
                  <div className="flex gap-2.5">
                    {lookingForResidential?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            activeIndex === item.id ||
                            propertyData.lookingTo === item.type
                              ? "cirular-pill active"
                              : "cirular-pill"
                          }
                          onClick={(e: any) => {
                            setActiveIndex(item.id);
                            setPropertyData({
                              ...propertyData,
                              lookingTo: item.type,
                            });
                          }}
                        >
                          <p>{item.type}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
                {propertyData.type === "Commercial-property" && (
                  <div className="flex gap-2.5">
                    {lookingForCommercial?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            activeIndex === item.id ||
                            propertyData.lookingTo === item.type
                              ? "cirular-pill active"
                              : "cirular-pill"
                          }
                          onClick={(e: any) => {
                            setActiveIndex(item.id);
                            setPropertyData({
                              ...propertyData,
                              lookingTo: item.type,
                            });
                          }}
                        >
                          <p>{item.type}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="p-2.5 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 w-1/2">
                <Label label="Property Type" required={false} />
                <div className="flex gap-2.5 flex-col xl:flex-row">
                  {propertyTypeData?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          // propertyTypeActive === item.id ||
                          propertyData.type === item.type
                            ? "cirular-pill active"
                            : "cirular-pill"
                        }
                        onClick={() => {
                          // setPropertyTypeActive(item.id);
                          // setType(item.type);
                          setPropertyData({
                            ...propertyData,
                            type: item.type,
                          });
                        }}
                      >
                        <p>{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 p-2.5">
              <div className="mb-2">
                <Label label="Property Title" required={true} />
                <input
                  type="text"
                  name="title"
                  value={propertyData.title}
                  placeholder="Enter Property Title"
                  onChange={handleChange}
                />
                {error && propertyData.title.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-2">
                <Label label="Select Property Type" required={true} />
                <select
                  name="propertyType"
                  id="propertyType"
                  value={propertyData.propertyType}
                  onChange={handleChange}
                >
                  <option value="">--Select Property Type--</option>
                  {typeOfProperty?.map((item: any, index: number) => {
                    return (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                {error && propertyData.propertyType.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-2">
                <Label label="Description" required={true} />
                <input
                  type="text"
                  name="description"
                  autoComplete="off"
                  value={propertyData.description}
                  placeholder="Enter Description"
                  onChange={handleChange}
                />
                {error && propertyData.description.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-2">
                <Label label="Select State" required={true} />
                <select
                  name="state"
                  id="state"
                  value={stateCode}
                  onChange={(isoCode: any) => {
                    setStateCode(isoCode.target.value);
                    state?.map((state: any) => {
                      if (state.isoCode === isoCode.target.value) {
                        setPropertyData({
                          ...propertyData,
                          state: state.name,
                        });
                      }
                    });
                  }}
                >
                  <option value="">--Select State--</option>
                  {state?.map((item: any, index: number) => {
                    return (
                      <option key={index} value={item.isoCode}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                {error && propertyData.state.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-2">
                <Label label="Select City" required={true} />
                <select
                  name="city"
                  id="city"
                  value={propertyData.city}
                  onChange={(e) => {
                    setPropertyData({ ...propertyData, city: e.target.value });
                  }}
                >
                  <option value="">--Select City--</option>
                  {stateCode !== "" ? (
                    city?.map((item: any, index: number) => {
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
                {error && propertyData.city.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-2">
                <Label label="Price" required={true} />
                <input
                  type="text"
                  name="price"
                  autoComplete="off"
                  value={propertyData.price}
                  placeholder="Enter Price"
                  onChange={handleChange}
                />
                {error && propertyData.price.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-2">
                <Label label="Area In Sq.Ft." required={true} />
                <input
                  type="text"
                  name="area"
                  autoComplete="off"
                  value={propertyData.area}
                  placeholder="Enter Area In Sq.Ft"
                  onChange={handleChange}
                />
                {error && propertyData.area.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-2">
                <Label label="Total Floor In Building" required={true} />
                <input
                  type="text"
                  name="totalFloor"
                  maxLength={3}
                  autoComplete="off"
                  value={propertyData.totalFloor}
                  placeholder="Enter Total Floor In Building"
                  onChange={(e) => {
                    validateNumberTotalFloor(e.target.value);
                    handleChange(e);
                  }}
                />
                {error && propertyData.totalFloor.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : !validNumberTotalFloor &&
                  propertyData.totalFloor.length !== 0 ? (
                  <p className="errorMsg">{errorMessage.floor}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-2">
                <Label label="Property On Floor" required={true} />
                <input
                  type="text"
                  name="propertyOnFloor"
                  maxLength={3}
                  autoComplete="off"
                  value={propertyData.propertyOnFloor}
                  placeholder="Enter Property Floor"
                  onChange={(e) => {
                    validateFloor(e);
                    validateNumberOnFloor(e.target.value);
                    handleChange(e);
                  }}
                />
                {error && propertyData.propertyOnFloor.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : !validNumberOnFloor &&
                  propertyData.propertyOnFloor.length !== 0 ? (
                  <p className="errorMsg">{errorMessage.floor}</p>
                ) : (
                  ""
                )}
                {floorError &&
                propertyData.totalFloor < propertyData.propertyOnFloor ? (
                  <p className="errorMsg">Enter Valid Floor Number</p>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-2">
                <Label label="Age Of Property" required={true} />
                <input
                  type="text"
                  name="ageOfProperty"
                  maxLength={3}
                  autoComplete="off"
                  pattern="[0-9]*"
                  value={propertyData.ageOfProperty}
                  placeholder="Age Of Property"
                  onChange={(e) => {
                    validateNumberAge(e.target.value);
                    handleChange(e);
                  }}
                />
                {error && propertyData.ageOfProperty.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : !validNumberAge &&
                  propertyData.ageOfProperty.length !== 0 ? (
                  <p className="errorMsg">{errorMessage.age}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-2">
                <Label label="Amenities" required={true} />
                <select
                  name="amenities"
                  id="amenities"
                  value={propertyData.amenities}
                  onChange={handleChange}
                >
                  <option value="">--Select Amenities--</option>
                  {amenitiesData?.map((item: any, index: any) => {
                    return (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                {/* <input
                  type="text"
                  name="amenities"
                  autoComplete="off"
                  value={propertyData.amenities}
                  placeholder="Enter Amenities"
                  onChange={handleChange}
                /> */}
                {error && propertyData.amenities.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-2">
                <Label label="Furnishing" required={true} />
                <select
                  name="furnishedStatus"
                  id="furnishingStatus"
                  value={propertyData.furnishedStatus}
                  onChange={handleChange}
                >
                  <option value="">--Select Furnishing--</option>
                  {Furnishing?.map((item, index) => {
                    return (
                      <option key={index} value={item.type}>
                        {item.type}
                      </option>
                    );
                  })}
                </select>
                {error && propertyData.furnishedStatus.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : (
                  ""
                )}
              </div>
              {propertyData.type === "Residential-property" && (
                <div className="mb-2">
                  <Label label="Select Bedrooms" required={false} />
                  <div className="flex flex-wrap gap-2.5">
                    {BHK?.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className={
                            selectBedroom === item.id ||
                            propertyData?.bhk === item.bhk
                              ? "cirular-pill active"
                              : "cirular-pill"
                          }
                          onClick={() => {
                            setSelectBedroom(item.id);
                            setPropertyData({
                              ...propertyData,
                              bhk: item.bhk,
                            });
                          }}
                        >
                          <p>{item.bhk}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mb-2">
                <Label label="Parking" required={false} />
                <div className="flex flex-wrap gap-2.5">
                  {parking?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          isParking === item.id ||
                          propertyData.parking === item.status
                            ? "cirular-pill active"
                            : "cirular-pill"
                        }
                        onClick={() => {
                          setIsParking(item.id);
                          setPropertyData({
                            ...propertyData,
                            parking: item.status,
                          });
                        }}
                      >
                        <p>{item.status}</p>
                      </div>
                    );
                  })}
                </div>
                {error && propertyData.parking.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-2">
                <Label label="Status" required={true} />
                <div className="flex gap-2 flex-wrap">
                  <div>
                    {detail?.status === "readyToMove" ? (
                      <input
                        type="radio"
                        id="readyToMove"
                        name="status"
                        value="readyToMove"
                        className="mr-1 cursor-pointer"
                        onChange={handleChange}
                        checked
                      />
                    ) : (
                      <input
                        type="radio"
                        id="readyToMove"
                        name="status"
                        value="readyToMove"
                        className="mr-1 cursor-pointer"
                        onChange={handleChange}
                      />
                    )}
                    <label htmlFor="readyToMove">Ready To Move</label>
                  </div>
                  <div>
                    {detail?.status === "underConstruction" ? (
                      <input
                        type="radio"
                        id="underConstruction"
                        name="status"
                        value="underConstruction"
                        className="mr-1 cursor-pointer"
                        onChange={handleChange}
                        checked
                      />
                    ) : (
                      <input
                        type="radio"
                        id="underConstruction"
                        name="status"
                        value="underConstruction"
                        className="mr-1 cursor-pointer"
                        onChange={handleChange}
                      />
                    )}
                    <label htmlFor="underConstruction">
                      Under Construction
                    </label>
                  </div>
                </div>
                {error && propertyData.status.length === 0 ? (
                  <p className="errorMsg">{errorMessage.required}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="p-2.5">
              <p className="my-3 form-subheading">Owner Detail</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="mb-2">
                  <Label label="Name" required={false} />
                  <input
                    type="text"
                    name={userInfo.name}
                    id={userInfo.name}
                    defaultValue={userInfo.name}
                    placeholder={
                      userInfo.name ? userInfo.name : "Enter owner name"
                    }
                    disabled
                  />
                </div>
                <div className="mb-2">
                  <Label label="Mobile number" required={false} />
                  <input
                    type="text"
                    name={userInfo.phoneNumber}
                    id={userInfo.phoneNumber}
                    defaultValue={userInfo.phoneNumber}
                    placeholder={
                      userInfo.phoneNumber
                        ? userInfo.phoneNumber
                        : "Enter owner number"
                    }
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="mb-2 p-2.5">
              <Label label="Add Images" required={false} />
              <input
                type="file"
                className="block w-full self-center text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-teal-50 file:text-teal-700
                      hover:file:bg-teal-100
                    "
                accept="image/png, image/gif, image/jpeg"
                onChange={handleImageChange}
              />
            </div>
            {propertyData?.images && (
              <div className="flex gap-5 flex-wrap">
                {propertyData?.images?.map((item, index) => {
                  return (
                    <div key={index} className="relative">
                      <img
                        className="w-20 h-20 rounded-lg object-contain	lightBorder"
                        src={item}
                        alt="not Uploaded any Images"
                      />
                      <RxCross2
                        className="crossIcon"
                        onClick={() => removeImage(index)}
                      />
                    </div>
                  );
                })}
              </div>
            )}
            <input type="submit" onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </>
  );
}
