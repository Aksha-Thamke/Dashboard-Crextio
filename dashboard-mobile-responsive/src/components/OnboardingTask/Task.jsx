import React from "react";
import styles from "./OnboardingTask.module.css";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <li className={styles.taskItem}>
      <div className={task.completed ? styles.checkedIcon : styles.icon}>
        {task.icon}
      </div>
      <div className={styles.taskInfo}>
        <p className={styles.taskLabel}>{task.label}</p>
        <span className={styles.taskDate}>{task.date}</span>
      </div>
      {task.completed ? (
        <FaCheckCircle className={styles.completedIcon} />
      ) : (
        <FaRegCircle className={styles.incompleteIcon} />
      )}
    </li>
  );
};

export default Task;
