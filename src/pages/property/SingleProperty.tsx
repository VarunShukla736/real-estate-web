import React, { useEffect, useState } from "react";
import UpperSection from "../../components/singleProperty/UpperSection";
import CardAndImage from "../../components/singleProperty/CardAndImage";
import Overview from "../../components/singleProperty/Overview";
import SimilarProperties from "../../components/singleProperty/SimilarProperties";
import UsePropertyHook from "../../serviceHandler/PropertyHook";
import { useLocation } from "react-router-dom";

interface property {
  title: string;
  type: string;
  price: number;
  area: string;
  description: string;
  bhk: string;
  ageOfProperty: string;
  status: string;
  lookingTo: string;
  city: string;
  parking: string;
  furnishedStatus: string;
  totalFloor: String;
  propertyOnFloor: string;
  amenities: string;
  images: [string];
}

function SingleProperty() {
  const { state } = useLocation();
  const { id } = state;
  const [property, setProperty] = useState<null | property>(null);
  const { propertyIdHandler } = UsePropertyHook();

  useEffect(() => {
    const getpropertyData = async () => {
      try {
        const propertyInfo = await propertyIdHandler(id);
        setProperty(propertyInfo);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getpropertyData();
  }, []);

  return (
    <div>
      {property ? (
        <>
          <UpperSection
            title={property.title}
            type={property.type}
            price={property.price}
            area={property.area}
          />
          <CardAndImage
            bhk={property.bhk}
            parking={property.parking}
            status={property.status}
            furnishedStatus={property.furnishedStatus}
            lookingTo={property.lookingTo}
            ageOfProperty={property.ageOfProperty}
            city={property.city}
            type={property.type}
            propertyImage={property.images}
          />
          <Overview
            status={property.status}
            amenities={property.amenities}
            area={property.area}
            totalFloor={property.totalFloor}
            propertyOnFloor={property.propertyOnFloor}
            description={property.description}
            ageOfProperty={property.ageOfProperty}
            parking={property.parking}
            furnishedStatus={property.furnishedStatus}
          />
          <SimilarProperties />
        </>
      ) : null}
    </div>
  );
}

export default SingleProperty;
