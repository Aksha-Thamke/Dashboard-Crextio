import React from "react";
import styles from "./Dashboard.module.css";
import Header from "../components/Header/Header";
import StatusBar from "../components/StatusBar/StatusBar";
import StatsDisplay from "../components/StatsDisplay/StatsDisplay";
import TimeTracker from "../components/TimeTracker/TimeTracker";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import OnboardingTask from "../components/OnboardingTask/OnboardingTask";
import Accordion from "../components/Accordion/Accordion";
import Calendar from "../components/Calendar/Calendar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.heading}>Welcome in, Nixtio</h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",

            fontFamily: "'Outfit', serif",
            fontOpticalSizing: "auto",
            fontWeight: 200,
            fontStyle: "normal",
          }}
        >
          <StatusBar />
          <StatsDisplay />
        </div>

        
        <div style={{ display: "flex", gap: "5px" }}>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                gap: "5px",
                height: "300px",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              <ProfileCard />
              <ProgressBar />
              <TimeTracker />
            </div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                flex: 1,
                height: "300px",
                flexWrap: "wrap",
              }}
            >
              <Accordion />
              <Calendar />
            </div>
          </div>
          <OnboardingTask />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
