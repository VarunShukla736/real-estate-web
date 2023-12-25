import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import UsePropertyHook from "../../serviceHandler/PropertyHook";
import { useNavigate } from "react-router-dom";
import noImg from "../../assets/images/common/no-picture-available-icon-1.jpg"

const className = {
  relative: "relative categoriesHW cursor-pointer",
  absoulte:
    "absolute top-0 left-0 h-full w-full flex flex-col justify-between p-2.5 imgcol rounded-xl",
};

function CategoriesCard(props: {
  bgImg: string;
  title: string;
  btnText: string;
  id: string;
}) {
  const navigate = useNavigate();

  const handleDetailPage = (id: string) => {
    navigate("/single-property", { state: { id } });
  };
  return (
    <>
      <div className={className.relative}>
        <div className={className.relative}>
          <img
            src={props.bgImg?props.bgImg:noImg}
            className="rounded-xl h-full w-full  text-indigo-800  object-cover "
            alt=""
          />
          <div className={className.absoulte}> 
              <p
                className="text-white text-end font-bold text-xl right-0"
                onClick={() => handleDetailPage(props.id)}
              >
                View
              </p>
            <h2 className="font-bold text-white">{props.title}</h2>           
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesCard;
