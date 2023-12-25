import React from "react";

export default function Input(props: { type: string; placeholder: string }) {
  return (
    <>
      <input
        type={props.type}
        className="input-field"
        placeholder={props.placeholder}
      />
    </>
  );
}
