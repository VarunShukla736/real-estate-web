import React, { useEffect, useState } from "react";
import FilterProperty from "../../components/stateWiseProperty/FilterProperty";
import PropertyCard from "../../components/stateWiseProperty/PropertyCard";
import UsePropertyHook from "../../serviceHandler/PropertyHook";
import { useLocation } from "react-router-dom";
import Pagination from "../../components/stateWiseProperty/Pagination";
import "../../components/stateWiseProperty/pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function StateWiseProperty() {
  const { searchpropertyHandler } = UsePropertyHook();
  const [propertyList, setPropertyList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [totalPages, setTotalPages] = useState(0);
  const {data} = useSelector((state: any) => state.search);
  console.log(data, '==>');
  useEffect(() => {
    const getCityData = async () => {
      try {
        const res = await searchpropertyHandler(data.stateCode+data.city+data.status+data.furnishedStatus+data.type+data.bhk+data.lookingTo+data.price+data.parking);
        setPropertyList(res);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getCityData();
  }, [data]);


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = propertyList?.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="px-4 md:mx-0 md:px-1 md:flex  min-h-screen ">
      <FilterProperty />
      {propertyList?.length !== 0 ? (
        <div className="w-full  h-screen overflow-y-auto">
          {currentPosts?.map((rows: any) => {
            return (
              <>
                <PropertyCard
                  key={rows.id}
                  id={rows.id}
                  title={rows.title}
                  description={rows.description}
                  price={rows.price}
                  area={rows.area}
                  parking={rows.parking}
                  bhk={rows.bhk}
                  type={rows.type}
                  status={rows.status}
                  images={rows.images}
                  city={rows.city}
                />
              </>
            );
          })}

          <div className="flex justify-center items-center">
            <button
              className="paginationbtn"
              onClick={() =>
                currentPage === 1
                  ? setCurrentPage(currentPage)
                  : setCurrentPage(currentPage - 1)
              }
            >
              <FontAwesomeIcon icon={faBackward} />
            </button>
            <Pagination
              totalPosts={propertyList?.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              setTotalPages={setTotalPages}
            />
            <button
              className="paginationbtn"
              onClick={() =>
                currentPage === 0 || currentPage === totalPages
                  ? setCurrentPage(currentPage)
                  : setCurrentPage(currentPage + 1)
              }
            >
              <FontAwesomeIcon icon={faForward} />
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-full">
          <p className="no-data-found">No Data Found</p>
        </div>
      )}
    </div>
  );
}

export default StateWiseProperty;
