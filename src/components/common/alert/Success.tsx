import React from "react";

export default function Success(props: { msg: string }) {
  return (
    <div className="msg-container success-container">
      <p className="msg-text">{props.msg}</p>
    </div>
  );
}
