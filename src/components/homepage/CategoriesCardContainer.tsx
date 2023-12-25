import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import cardImage from "../../assets/images/homepage/CategoriesCard.jpg";
import cardImage1 from "../../assets/images/homepage/CategoriesCardImg1.jpg";
import cardImage2 from "../../assets/images/homepage/CategoriesCardImg2.jpg";
import cardImage3 from "../../assets/images/homepage/CategoriesCardImg3.jpg";
import { popularProperty } from "../../service/Property";

const categoriesData = [
  {
    id: 1,
    className: "cardSpan1row2",
    bgImage: cardImage,
    title: "Atlanta, GA",
    url: "/",
    btntext: "View Homes",
  },
  {
    id: 2,
    className: "cardSpan1row1",
    bgImage: cardImage1,
    title: "Atlanta, GA",
    url: "/",
    btntext: "View Homes",
  },
  {
    id: 3,
    className: "cardSpan1row1",
    bgImage: cardImage2,
    title: "Atlanta, GA",
    url: "/",
    btntext: "View Homes",
  },
  {
    id: 4,
    className: "cardSpan1row2",
    bgImage: cardImage3,
    title: "Boston, MA",
    url: "/",
    btntext: "View Homes",
  },
  {
    id: 5,
    className: "cardSpan1row1",
    bgImage: cardImage,
    title: "Atlanta, GA",
    url: "/",
    btntext: "View Homes",
  },
  {
    id: 6,
    className: "cardSpan1row1",
    bgImage: cardImage1,
    title: "Atlanta, GA",
    url: "/",
    btntext: "View Homes",
  },
  {
    id: 7,
    className: "cardSpan1row1",
    bgImage: cardImage2,
    title: "Atlanta, GA",
    url: "/",
    btntext: "View Homes",
  },
  {
    id: 8,
    className: "cardSpan1row0",
    bgImage: cardImage3,
    title: "Atlanta, GA",
    url: "/",
    btntext: "View Homes",
  },
];

function CategoriesCardContainer() {
  const [popularData, setPopularData] = useState([]);

  const popularRandomProperty = async () => {
    const res = await popularProperty();
    setPopularData(res.data.result.Data);
  };

  useEffect(() => {
    popularRandomProperty();
  }, []);

  console.log(popularData, "populardata");
  return (
    <div>
      <div className="pl-6">
        <p className="text-3xl">Best Choice</p>
        <h3 className="font-extrabold text-4xl my-3 text-teal-800">Popular Properties .</h3>
        <p className="sm:w-1/2 text-lg font-sans md:w-2/3 2xl:w-2/5 w-fit">
          Take a deep dive and browse homes for sale, original neighbourhood
          photos, resident reviews and local insights to find what is right for
          you.
        </p>
      </div>

      <div className="card-container overflow-auto mr-5">
          <div className="flex gap-3 md:gap-7">
            {popularData?.map((item: any, index: number) => {
              return (                
                      <CategoriesCard
                      key={index}
                        bgImg={item.images[0]}
                        btnText={"view"}
                        title={item.title}
                        id={item.id}
                      />            
              )
            })}
          </div>
      </div>
  </div>
    
  );
}

export default CategoriesCardContainer;
