import React from "react";
import "./TimeTracker.css";
import Arrow from "../Arrow";
import PlayIcon from "../PlayIcon";
import PauseIcon from "../PauseIcon";
import AlarmIcon from "../AlarmIcon";

const TimeTracker = () => {
  return (
    <div className="time-tracker">
      <Arrow />
      <h3>Time tracker</h3>
      <div className="progress-container">
        <svg width="200" height="200" className="svg-transform">
          <circle cx="100" cy="100" r="90" className="progress-background" />
          <circle cx="100" cy="100" r="90" className="progress-bar" />
        </svg>
        <div className="time-display">
        <p className="time">02:35</p>
        <p className="work">Work Time</p>
        </div>
      </div>
      
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          left: "10px",
          right: "10px",
          bottom: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <PlayIcon />
          <PauseIcon />
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <AlarmIcon />
        </div>
      </div>
    </div>
  );
};

export default TimeTracker;
