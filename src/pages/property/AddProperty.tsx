import React from "react";
import Add from "../../components/property/Add";
import UsePropertyHook from "../../serviceHandler/PropertyHook";

export default function AddProperty() {
  const { createPropertyHandler } = UsePropertyHook();

  const onSubmit = (data: any) => {
    createPropertyHandler(data);
  };

  return (
    <>
      <Add onSubmit={onSubmit} detail={null} />
    </>
  );
}
