import React from "react";
import img1 from "../../assets/images/singleProperty/CategoriesCardImg1.jpg";
import img2 from "../../assets/images/singleProperty/CategoriesCardImg2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import '../../assets/css/style.css';

const cardsData = [
  {
    id: 1,
    img: img1,
    title: "SS Residency Apartments",
    address: "2,3 BHK Apartment in Sector 1 Dwarka, Dwarka Delhi",
    price: 55,
  },
  {
    id: 2,
    img: img2,
    title: "SS Residency Apartments",
    address: "2,3 BHK Apartment in Sector 1 Dwarka, Dwarka Delhi",
    price: 55,
  },
  {
    id: 3,
    img: img1,
    title: "SS Residency Apartments",
    address: "2,3 BHK Apartment in Sector 1 Dwarka, Dwarka Delhi",
    price: 55,
  },
  {
    id: 4,
    img: img2,
    title: "SS Residency Apartments",
    address: "2,3 BHK Apartment in Sector 1 Dwarka, Dwarka Delhi",
    price: 55,
  },
  {
    id: 5,
    img: img1,
    title: "SS Residency Apartments",
    address: "2,3 BHK Apartment in Sector 1 Dwarka, Dwarka Delhi",
    price: 55,
  },
  {
    id: 6,
    img: img2,
    title: "SS Residency Apartments",
    address: "2,3 BHK Apartment in Sector 1 Dwarka, Dwarka Delhi",
    price: 55,
  },
  {
    id: 7,
    img: img1,
    title: "SS Residency Apartments",
    address: "2,3 BHK Apartment in Sector 1 Dwarka, Dwarka Delhi",
    price: 55,
  },
  {
    id: 8,
    img: img2,
    title: "SS Residency Apartments",
    address: "2,3 BHK Apartment in Sector 1 Dwarka, Dwarka Delhi",
    price: 55,
  },
  {
    id: 9,
    img: img1,
    title: "SS Residency Apartments",
    address: "2,3 BHK Apartment in Sector 1 Dwarka, Dwarka Delhi",
    price: 55,
  },
];

function SimilarProperties() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 mx-auto px-1 mb-10">
      <div className="mb-8">
        <p className="border-b-2 border-red-600 w-fit text-xl font-bold">
          Similar Properties
        </p>
      </div>

      <div className="w-full">
        <Slider {...settings}>
          {cardsData.map((item) => {
            return (
              <div
                className="rounded-md   my-2"
                key={item.id}
              >
                <img
                  className="w-11/12 rounded-t-md"
                  src={item.img}
                  alt="logo"
                />
                <div className="flex flex-col gap-2 p-2">
                  <p className="font-bold  text-lg ">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.address}</p>
                  <p className="text-md text-gray-700">
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                    {item.price} lac
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SimilarProperties;
