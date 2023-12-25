import React from "react";

export default function Label(props: { label: string; required: boolean }) {
  return (
    <>
      <p className="label">
        {props.label}{" "}
        {props.required && <span className="text-red-500">*</span>}
      </p>
    </>
  );
}
