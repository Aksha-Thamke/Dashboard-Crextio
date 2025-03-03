import React from "react";
import styles from "./StatsDisplay.module.css";
import { FaUser, FaUserCheck, FaBriefcase } from "react-icons/fa";

const StatsDisplay = () => {
  const stats = [
    { icon: <FaUser size={10} />, value: 78, label: "Employee" },
    { icon: <FaUserCheck size={10} />, value: 56, label: "Hirings" },
    { icon: <FaBriefcase size={10} />, value: 203, label: "Projects" },
  ];

  return (
    <div className={styles.container}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <div className={styles.icon}>{stat.icon}</div>
            <div className={styles.value}>{stat.value}</div>
          </div>
          <div className={styles.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsDisplay;
