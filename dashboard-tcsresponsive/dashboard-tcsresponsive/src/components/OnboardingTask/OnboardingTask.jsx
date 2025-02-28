import React from "react";
import styles from "./OnboardingTask.module.css";
import { FaVideo, FaRegClipboard } from "react-icons/fa";
import Task from "./Task";

const OnboardingTask = () => {
  const tasks = [
    {
      icon: <FaVideo />,
      label: "Interviews",
      date: "Sep 1, 10:00 AM",
      completed: true,
    },
    {
      icon: <FaVideo />,
      label: "Zoom Meeting",
      date: "Sep 2, 11:00 AM",
      completed: true,
    },
    {
      icon: <FaRegClipboard />,
      label: "Project Update",
      date: "Sep 3, 10:00 AM",
      completed: false,
    },
    {
      icon: <FaRegClipboard />,
      label: "Discuss Q2 Goals",
      date: "Sep 5, 11:00 AM",
      completed: false,
    },
    {
      icon: <FaRegClipboard />,
      label: "HR Policy Review",
      date: "Sep 6, 10:00 AM",
      completed: false,
    },
  ];

  return (
    <div className={styles.container + " container-c11"}>
      <div className="container-c10">
        <div className={styles.header}>
          <h3 className={styles.title}>Onboarding</h3>
          <span className={styles.percentage}>18%</span>
        </div>

        <div style={{ display: "flex", gap: "0px" }}>
          <div>
            <span style={{ marginLeft: "5px" }}>30%</span>
            <div className={`${styles.status} ${styles.orange}`}>Task</div>
          </div>

          <div
            style={{
              borderRight: "solid 0.5px",
              borderLeft: "solid 0.5px",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              borderColor: "black",
            }}
          >
            <span style={{ marginLeft: "5px" }}>25%</span>
            <div className={`${styles.status} ${styles.black}`}></div>
          </div>

          <div>
            <span style={{ marginLeft: "5px" }}>0%</span>
            <div className={`${styles.status} ${styles.grey}`}></div>
          </div>
        </div>
      </div >


      <div style={{ position: "relative" }}>
        <div
          style={{
            height: "50px",
            position: "relative",
            top: 10,
            backgroundColor: "white",
            zIndex: 50,
            borderRadius: "30px",
            width: "80%",
            left: 0,
            right: 0,
            margin: "auto",
          }}
        ></div>

        <div
          style={{
            height: "50px",
            position: "relative",
            top: -20,
            backgroundColor: "grey",
            zIndex: 50,
            borderRadius: "30px",
            width: "90%",
            left: 0,
            right: 0,
            margin: "auto",
          }}
        ></div>
        <div className={styles.taskContainer}>
          <div className={styles.taskHeader}>
            <h3 className={styles.taskTitle}>Onboarding Task</h3>
            <span className={styles.taskProgress}>2/8</span>
          </div>
          <ul className={styles.taskList + " container-c9"}>
            {tasks.map((task, index) => (
              <Task key={index} task={task} />
            ))}
          </ul>
        </div>
      </div>
    </div >
  );
};

export default OnboardingTask;
