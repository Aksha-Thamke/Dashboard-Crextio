import React from "react";
import styles from "./Calendar.module.css";
import EventCard from "./EventCard";

const Calendar = () => {
  return (
    <div className={styles.calendarContainer}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "13px",
          fontWeight: "500",
          marginBottom: "20px",
        }}
      >
        <div className="month-box" style={{background: "white", borderRadius: "10px", width: "60px", textAlign:"center", padding:"4px"}}>August</div>

        <div style={{fontWeight: 700}}>September 2024</div>

        <div className="month-box" style={{background: "white", borderRadius: "10px", width: "60px", textAlign:"center", padding:"4px"}}>October</div>
      </div>
      <div className={styles.calendarGrid}>
        
        <div className={styles.dayHeader}>Mon</div>
        <div className={styles.dayHeader}>Tue</div>
        <div className={styles.dayHeader} style={{fontWeight: 500}}>Wed</div>
        <div className={styles.dayHeader}>Thu</div>
        <div className={styles.dayHeader}>Fri</div>
        <div className={styles.dayHeader}>Sat</div>
        <div className={styles.day}>22</div>
        <div className={styles.day}>23</div>
        <div className={styles.day} style={{fontWeight: 500}}>24</div>
        <div className={styles.day}>25</div>
        <div className={styles.day}>26</div>
        <div className={styles.day}>27</div>

        {/* <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div> */}
      
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          width: "90%",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            color: "black",
            fontWeight: 400,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "10px 0"
          }}
        >
          <p>08:00 am</p>
          <p>09:00 am</p>
          <p>10:00 am </p>
          <p>11:00 am</p>
        
        </div>


        <div style={{ borderLeft: "0px solid grey" }}>
          <div style={{ marginLeft: "50px" }}>
            <EventCard
              isBlack
              title="Weekly Team Sync"
              description="Discuss progress on projects"
              participants={[
                "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
                "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
                "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
              ]}
            />
          </div>

          <div style={{ marginLeft: "60%", marginTop: "20px" }}>
            <EventCard
              title="Onboarding Session"
              description="Introduction for new hires"
              participants={[
                "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
                "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
                "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
