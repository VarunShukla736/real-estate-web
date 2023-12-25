import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import testimonial1 from "../../assets/images/homepage/image 15.png";
import testimonial2 from "../../assets/images/homepage/image 16.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homepage.css"

const testimonialData = [
  {
    Name: "Rahika Binani",
    occupation:"Chief Product Officer at The Cut Shop",
    img: testimonial1,
    ReviewText:
      "Firstly the passion is very evident. The quality of people in this team arevery high caliber. The level of ownership from start to finish was tremendous.",
  },
  {
    Name: "Susain Brigash",
    img: testimonial2,
     occupation:"Consultant at P&G Company",
    ReviewText:
      "The team's varied skillset and capability to handle a wide range of problems are a huge plus point.",
  },
];

function TestimonialsCardContainer() {
  return (
    <>
      <div className="w-full p-5">
        <div className="my-3">
              <p className="font-sans text-3xl md:text-3xl lg:text-4xl text-teal-800">Let’s hear it from our</p>
              <p className="font-sans text-3xl md:text-3xl lg:text-4xl">esteemed clients <b className="text-teal-800">.</b></p>
        </div>
        <div>
            {testimonialData?.map((item, index) => {
                return (
                  <TestimonialsCard
                  key={index}
                  Name={item.Name}
                  img={item.img}
                  ReviewText={item.ReviewText}
                  occupation={item.occupation}
                  />
                );
              })}
        </div>
        <div className="w-full flex justify-center">
          <button className="py-3 sm:py-5 bg-teal-800 rounded-md w-10/12 sm:w-3/12" >
           <p className="text-white text-xl font-bold">View More</p>
          </button>
        </div>
        
      </div>
    </>
  );
}

export default TestimonialsCardContainer;
