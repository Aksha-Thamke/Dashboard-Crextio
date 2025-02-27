import React from "react";
import styles from "./StatusBar.module.css";

const StatusBar = () => {
  return (
    <div className={styles.container}>

      <div className={styles.statusSection}>
        <span>Interviews</span>
        <div className={` ${styles.status} ${styles.interviews}`}>15%</div>
      </div>

      <div className={styles.statusSection}>
        <span>Hired</span>
        <div className={`${styles.status} ${styles.hired}`}>15%</div>
      </div>

    <div className={styles.statusSection}>
      <span>Project Time</span>
        <div className={`${styles.status} ${styles.project}`}>60%</div>
    </div>


      {/* <div className={styles.outputSection}>
        <span>Output</span>
        <button className={styles.outputButton}>10%</button>
      </div> */}

      <div className={styles.statusSection}>
      <span>Output</span>
        <div className={`${styles.status} ${styles.output}`}>10%</div>
    </div> 

    </div>
  );
};

export default StatusBar;
