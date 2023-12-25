import React from "react";

export default function Error(props: { msg: string }) {
  return (
    <div className="msg-container error-container">
      <p className="msg-text">{props.msg}</p>
    </div>
  );
}
