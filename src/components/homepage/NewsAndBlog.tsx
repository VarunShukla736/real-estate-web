import React from "react";
import News1 from "../../assets/images/homepage/NewsAndBlogs/news1.jpg";
import News2 from "../../assets/images/homepage/NewsAndBlogs/news2.jpg";
import News3 from "../../assets/images/homepage/NewsAndBlogs/news3.jpg";

const newsData = [
  {
    title: "SWAMIH Investment Fund",
    details:
      "The SWAMIH Fund I has been formed to back construction of brownfield, RERA registered residential developments",
    date: "30 Sep 2022",
    Image: News2,
    url: "/",
    website: "hindustantimes.com",
  },
  {
    title: "Investors Clinic’s Property Show",
    details:
      "Real estate consultancy firm, Investors Clinic organized a two-day Property Fair, showcasing Indian properties in Singapore.",
    date: "30 May 2022",
    Image: News3,
    url: "/",
    website: "hindustantimes.com",
  },
];

function NewsAndBlog() {
  return (
    <div className="w-full lg:px-10 mx-auto py-10 bg-gray-950">
      <div className="my-5 w-9/12 mx-auto sm:text-center">
        <p className="font-bold text-4xl sm:text-5xl mb-5 text-white">
          News, Tips & Articles
        </p>
        <p className="text-2xl text-white">
          Grow your appraisal and real estate career with tips, trends, insights
          and learn more about our expert's advice.
        </p>
      </div>
      <div className="flex flex-col p-2 gap-3 md:gap-5 my-5 ">
        {newsData.map((ND, i) => {
          return (
            <div
              className="w-full bg-white rounded-2xl sm:rounded-3xl h-auto"
              key={i}
            > 
              <div className="flex flex-col sm:flex-row p-3 md:gap-10 sm:gap-2">
                  <div>
                    <img
                      className="h-fill sm:h-64 w-auto rounded-lg"
                      src={ND.Image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="justify-center gap-2 align-middle">
                      <p className="text-3xl font-bold px-2 py-3">{ND.title}</p>
                      <p className="text-xl px-3 font-semibold">{ND.details}</p>
                    </div>
                    <div className="flex justify-between rounded-b-lg p-3  align-bottom">
                      <p className="text-teal-800 text-md  sm:text-xl font-semibold">{ND.date}</p>
                      <p className=" text-teal-800 text-md sm:text-xl font-semibold" >
                        Published On{" "}
                        <a className=" underline" href={ND.url}>
                          {ND.website}
                        </a>
                      </p>
                    </div>
                  </div>
              </div>
              
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center">
        <button className="py-3 sm:py-5 bg-teal-800 rounded-md w-10/12 sm:w-3/12">
          <p className="text-white text-xl font-bold">View More</p>
        </button>
      </div>
    </div>
  );
}

export default NewsAndBlog;
