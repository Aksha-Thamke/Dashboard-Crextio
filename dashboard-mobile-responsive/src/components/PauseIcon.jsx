import React from "react";
import { CiPause1 } from "react-icons/ci";

const PauseIcon = () => {
  return (
    <div
      style={{
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
      <CiPause1 size={20} />
    </div>
  );
};

export default PauseIcon;
