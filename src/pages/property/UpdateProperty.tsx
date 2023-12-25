import React, { useEffect, useState } from "react";
import UsePropertyHook from "../../serviceHandler/PropertyHook";
import { useLocation } from "react-router-dom";
import Add from "../../components/property/Add";
import { propertyDataByIdInterface } from "../../interface/property";

function UpdateProperty() {
  const { updatePropertyHandler } = UsePropertyHook();
  const { propertyIdHandler } = UsePropertyHook();
  const [propertyIdData, setPropertyIdData] =
    useState<propertyDataByIdInterface | null>(null);
  const { state } = useLocation();
  const { propertyById } = state;

  const onSubmit = (data: any) => {
    updatePropertyHandler(data, propertyById);
  };

  useEffect(() => {
    const getPropertyById = async () => {
      try {
        const property_Id = await propertyIdHandler(propertyById);
        setPropertyIdData(property_Id);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getPropertyById();
  }, []);

  return (
    <>
      {propertyById !== null && (
        <Add onSubmit={onSubmit} detail={propertyIdData} />
      )}
    </>
  );
}

export default UpdateProperty;
