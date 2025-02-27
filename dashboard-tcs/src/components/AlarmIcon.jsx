import React from "react";
import { CiAlarmOn } from "react-icons/ci";

const AlarmIcon = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "80%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <CiAlarmOn size={20} />
    </div>
  );
};

export default AlarmIcon;
