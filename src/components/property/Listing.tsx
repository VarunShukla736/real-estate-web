import {
  faCircle,
  faFilter,
  faIndianRupeeSign,
  faPenToSquare,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import UsePropertyHook from "../../serviceHandler/PropertyHook";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tempdemo from "../../assets/images/common/no-picture-available-icon-1.jpg";

function Listing() {
  const dispatch = useDispatch();
  const [userProperties, setUserProperties] = useState([]);
  const { getPropertyByUserIdHandler } = UsePropertyHook();
  const { deletePropertyByIdHandler } = UsePropertyHook();
  const { userInfo } = useSelector((state: any) => state?.user);

  const navigate = useNavigate();

  const handlePropertyId = (propertyById: string) => {
    localStorage.setItem("propertyId", propertyById);
    // dispatch(getPropertyById(propertyById));
    navigate("/update", { state: { propertyById } });
  };

  const handleDetailPage = (id: string) => {
    navigate("/single-property", { state: { id } });
  };

  useEffect(() => {
    const getPropertiesOfUser = async () => {
      try {
        const properties = await getPropertyByUserIdHandler(userInfo.id);
        setUserProperties(properties);
      } catch (error) {
        console.log(error, "properties");
      }
    };
    getPropertiesOfUser();
  }, [userInfo.id]);

  const handleDelete = async (data: any) => {
    try {
      const newProperties = await deletePropertyByIdHandler(data);
      window.location.reload();
    } catch (error) {
      console.log(error, "delete");
    }
  };

  return (
    <div className="lg:w-11/12  min-h-screen overflow-x-auto p-3 lg:mx-auto my-8">
      <div className="h-full mt-5">
        <div className="flex justify-between">
          <p className="text-3xl font-bold">All Listings</p>
          <div>
            <FontAwesomeIcon
              className="text-xl bg-teal-700 text-white rounded-md p-2 mx-2"
              icon={faFilter}
            />
            <FontAwesomeIcon
              onClick={() => navigate("/add-property")}
              className="text-xl bg-teal-700 text-white rounded-md p-2 mx-2 cursor-pointer"
              icon={faPlus}
            />
          </div>
        </div>
        <div className="flex flex-col capitalize  gap-5">
          {userProperties?.length === 0 ? (
            <p className="no-data-found">No Data Found</p>
          ) : (
            userProperties?.map((data: any, index: number) => {
              return (
                <div className="w-full flex flex-col md:flex-row p-3 gap-4 md:gap-10 shadow-2xl rounded-2xl md:mt-6">
                  <img className="w-full md:w-3/12 md:h-56 rounded-md" src={data.images?data.images[0]:Tempdemo} alt="" />
                  <div className="flex w-full md:w-7/12 flex-col justify-between">
                    <p className="text-3xl pb-4 font-bold text-teal-700">
                      {data.title}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-xl">
                        <FontAwesomeIcon
                          className="pr-1 text-teal-700"
                          icon={faIndianRupeeSign}
                        />
                        {data.price}
                      </p>
                      <div className="flex flex-col md:flex-row gap-1 sm:gap-2 text-xl font-semibold">
                        <p>
                        <FontAwesomeIcon
                            className="text-teal-600 text-sm pr-1 pb-1"
                            icon={faCircle}
                          />
                          {data.bhk}</p>
                        <p>
                          <FontAwesomeIcon
                            className="text-teal-600 text-sm pr-1 pb-1"
                            icon={faCircle}
                          />
                          {data.status}
                        </p>
                        <p>
                          <FontAwesomeIcon
                            className="text-teal-600 text-sm pr-1 pb-1"
                            icon={faCircle}
                          />
                          {data.state}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-2/12 flex flex-row-reverse md:flex-col justify-between">
                    <div className="md:text-center ">
                      <button>
                        <FontAwesomeIcon
                          onClick={() => handlePropertyId(data.id)}
                          className="text-2xl shadow-2xl bg-white rounded-md px-2 mx-1"
                          icon={faPenToSquare}
                        />
                      </button>
                      <button
                        onClick={() => handleDelete(data.id)}
                        className="text-2xl shadow-2xl bg-white rounded-md px-2 mx-1"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                    <div>
                      <button className="text-green-500 border-green-400 justify-center sm:text-xl px-5  border-2 py-2 md:w-11/12 bg-green-200 rounded-2xl">
                        Active
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Listing;
