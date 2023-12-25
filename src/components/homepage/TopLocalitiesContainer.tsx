import React, { useEffect, useState } from "react";
import TopLocaltiesCard from "./TopLocaltiesCard";
import UsePropertyHook from "../../serviceHandler/PropertyHook";

const CitiesName = [
  {
    Name: "Delhi",
  },
  {
    Name: "Indore",
  },
  {
    Name: "Mumbai",
  },
  {
    Name: "Pune",
  },
  {
    Name: "Bangalore",
  },
  {
    Name: "Hyderabad",
  },
  {
    Name: "Chennai",
  },
];

interface propertyData {
  id: string;
  images: [string];
  title: string;
  type: string;
  price: number;
  readyToMove: string;
}

function TopLocalitiesContainer() {
  const { searchpropertyHandler } = UsePropertyHook();
  const [city, setCity] = useState("city=Delhi");
  const [citiesTab, setCitiesTab] = useState(1);
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    const GetCityData = async () => {
      try {
        const properties = await searchpropertyHandler(city);
        // const filterProperties = properties.filter(
        //   (properties: propertyData) => properties.readyToMove === "Yes"
        // );
        setPropertyData(properties?.slice(0, 8));
      } catch (error) {
        console.log("Error", error);
      }
    };
    GetCityData();
  }, [city]);

  return (
    <div className="bg-img mt-2">
      <div className="p-3 md:p-4 lg:p-6 my-8 gap-2 ">
        <div className="w-full sm:text-center">
          <p className="text-4xl sm:text-5xl text-white font-bold my-2">Top Localities</p>
          <p className="text-3xl sm:text-4xl text-white my-2">
            Explore the top projects in top cities
          </p>
        </div>
        <div className="my-8 flex flex-wrap gap-4">
          {CitiesName?.map((name, index) => {
            return (
              <div key={index}>
                <button
                  className={
                    citiesTab === index + 1
                      ? "border py-1 px-4 text-teal-700 bg-white hover:bg-white hover:text-teal-700 rounded-3xl border-gray-100"
                      : "border py-1 px-4 text-white hover:bg-white hover:text-teal-700 rounded-3xl border-gray-100"
                  }
                  onClick={() => {
                    setCity("city="+name.Name);
                    console.log(city, "check the city for demo");
                    setCitiesTab(index + 1);
                  }}
                >
                  {name.Name}
                </button>
              </div>
            );
          })}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full ">
          {propertyData?.map((Property: propertyData) => {
            return (
              <TopLocaltiesCard
                key={Property.id}
                Id={Property.id}
                Img={Property.images}
                Name={Property.title}
                Address={Property.type}
                Price={Property.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopLocalitiesContainer;
