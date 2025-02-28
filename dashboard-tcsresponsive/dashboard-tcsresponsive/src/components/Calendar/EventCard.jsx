import React from "react";
import styles from "./EventCard.module.css";

const EventCard = ({ title, description, participants, isBlack = false }) => {
  return (
    <div className={isBlack ? `${styles.eventCard + " eventCardContainer"}`  : styles.eventCardWhite}

    >
      <div className={styles.eventInfo}>
        <h4 className={isBlack ? styles.eventTitle : styles.eventTitleWhite}>
          {title}
        </h4>
        <p className={styles.eventDescription}>{description}</p>
      </div>
      <div className={styles.participants}>
        {participants.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="participant"
            className={styles.participantImg}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCard;
