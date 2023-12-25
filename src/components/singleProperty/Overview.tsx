import React from "react";



function Overview(props: {
  description: string;
  ageOfProperty: string;
  parking: string;
  furnishedStatus: string;
  totalFloor: String;
  propertyOnFloor: string;
  area: string;
  status: string;
  amenities: string;
}) {
  const details = [
    {
      id: 1,
      title: "Age of Building",
      Description: props.ageOfProperty,
    },
    // {
    //   id: 2,
    //   title: "Ownership Type",
    //   Description: "Self",
    // },
    {
      id: 3,
      title: "Status",
      Description: props.status,
    },
    {
      id: 4,
      title: "Flooring",
      Description: "Vitrified Tiles",
    },
    {
      id: 5,
      title: "Builtup Area",
      Description: props.area+"Sq.Ft",
    },
    {
      id: 6,
      title: "Carpet Area",
      Description: "2000 Sq.Ft",
    },
    {
      id: 7,
      title: "Furnishing Status",
      Description: props.furnishedStatus,
    },
    {
      id: 8,
      title: "Total Floor",
      Description: props.totalFloor,
    },
    {
      id: 9,
      title: "Property On Floor",
      Description: props.propertyOnFloor,
    },
    {
      id: 10,
      title: "Parking",
      Description: props.parking,
    },
    {
      id: 11,
      title: "Amenities",
      Description: props.amenities,
    },
  ];
  return (
    <>
      <div className="w-11/12 mx-auto my-5 border-2 p-8">
        <div className="mb-8">
          <p className="border-b-2 border-red-600 w-fit text-xl font-bold">
            Overview
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-16">
          {details.map((item) => {
            return (
              <div
                className="flex lg:px-10 justify-between border-b-2 border-dotted"
                key={item.id}
              >
                <p className="text-gray-500 capitalize">{item.title}</p>
                <p className="font-bold text-sm sm:text-md capitalize">{item.Description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-11/12 mx-auto my-5 border-2 p-8">
        <div className="mb-8">
          <p className="border-b-2 border-red-600 w-fit text-xl font-bold">
            Description
          </p>
        </div>
        <div>
          <p className="text-gray-700">
           {props.description}
          </p>
          {/* <br />
          <p className="text-gray-700">
            With community centre, play area, gym, park & swimming pool
            available in this home, you will always have something to do here.
            With amenities such as intercom facility, security, elevator & Wi-Fi
            access this home offers you a lot of convenience. With premium
            amenities such as parking for visitors, fire safety, sewage
            treatment plant & gas pipeline this home provides you with many
            added benefits.
          </p>
          <br />
          <p className="text-gray-700">
            Shemrock Happy Minds, Maple Bear Canadian PreSchool Sector 141,
            Noida and NEURO CARE- a holistic child and neuro development center
            are well known educational institutes in town & are very close to
            this home. Being situated near Guru Clinic, Felix Hospital and
            Apollo Pharmacy, emergency care is very easily available at any
            time.
          </p> */}
        </div>
      </div>
    </>
  );
}

export default Overview;
