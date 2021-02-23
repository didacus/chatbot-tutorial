import React from "react";

export default function Image(props) {
  return (
    <div className="wrapper-image">
      <img
        src={props.image}
        alt="random"
        className="sticker"
        style={{ width: "100%", borderRadius: "16px" }}
      />
    </div>
  );
}
