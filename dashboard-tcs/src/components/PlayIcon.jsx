import React from "react";
import { CiPlay1 } from "react-icons/ci";

const PlayIcon = () => {
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
      <CiPlay1 size={20} />
    </div>
  );
};

export default PlayIcon;
