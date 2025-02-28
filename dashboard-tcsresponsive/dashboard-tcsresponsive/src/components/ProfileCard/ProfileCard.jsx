import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <div className={styles.card}
      style={{
        minHeight: "292px"
      }}
    >
      {/* <img
        src="https://www.perfocal.com/blog/content/images/size/w1920/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
        alt="Profile"
        className={styles.image}
      /> */}

      <div className={styles.image}></div>

      <div className={styles.infoContainer}>
        <div>
          <h3 className={styles.name}>Lora Piterson</h3>
          <p className={styles.role}>UX/UI Designer</p>
        </div>
        <button className={styles.button}>$1,200</button>
      </div>
    </div>
  );
};

export default ProfileCard;
