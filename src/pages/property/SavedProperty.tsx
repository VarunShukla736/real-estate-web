import React, { useEffect, useState } from "react";
import PropertyCard from "../../components/property/PropertyCard";
import UsePropertyHook from "../../serviceHandler/PropertyHook";

export default function SavedProperty() {
  const { getFavPropertyHandler } = UsePropertyHook();
  const [savedData, setSavedData] = useState([]);

  const getAllData = async () => {
    const res = await getFavPropertyHandler();
    setSavedData(res.rows);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="w-full lg:w-9/12 margin-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-5 gap-5">
        {savedData ? (
          savedData?.map((item, index) => {
            return <PropertyCard item={item} key={index} />;
          })
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </div>
  );
}
