import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const Arrow = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        right: 20,
        backgroundColor: "white",
        borderRadius: "80%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RiArrowRightUpLine size={20} />
    </div>
  );
};

export default Arrow;
