import React from "react";

export default function Normal(props: { msg: string }) {
  return (
    <div className="msg-container normal-container">
      <p className="msg-text">{props.msg}</p>
    </div>
  );
}
