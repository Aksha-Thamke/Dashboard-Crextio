import React from "react";
import "./ProgressBar.css";
import Arrow from "../Arrow";

const ProgressBar = () => {
  return (
    <div className="card">
      <Arrow />
      <h3>Progress</h3>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <h1>6.1h</h1>
        <div className="subtext"><p>Work Time </p><p>this week</p></div>
      </div>
      <div className="chart">
        <div className="bar-group">
          <div className="bar bar1 faded"></div>
          <div className="dot dot1 faded"></div>
          <span>S</span>
        </div>
        <div className="bar-group">
          <div className="bar bar2"></div>
          <div className="dot dot2 "></div>
          <span>M</span>
        </div>
        <div className="bar-group">
          <div className="bar bar3"></div>
          <div className="dot dot3 "></div>
          <span>T</span>
        </div>
        <div className="bar-group">
          <div className="bar bar4"></div>
          <div className="dot dot4"></div>
          <span>W</span>
        </div>
        <div className="bar-group">
          <div className="bar bar5"></div>
          <div className="dot dot5"></div>
          <span>T</span>
        </div>
        <div className="bar-group">
          <div className="bar bar6 highlight">
            <div className="tooltip">5h 25m</div>
          </div>
          <div className="dot dot6 highlight"></div>
          <span>F</span>
        </div>
        <div className="bar-group">
          <div className="bar bar7 faded"></div>
          <div className="dot dot7 faded"></div>
          <span>S</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
