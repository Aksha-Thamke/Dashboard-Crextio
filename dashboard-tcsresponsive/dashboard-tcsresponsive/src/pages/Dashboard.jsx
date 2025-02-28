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
import "./index.css"

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
            flexWrap: "wrap",
          }}
        >
          <StatusBar />
          <StatsDisplay />
        </div>


        <div style={{ display: "flex", gap: "5px" }}>
          <div style={{ flex: 0.8 }} className="container-c3">
            <div
              style={{
                display: "flex",
                gap: "5px",
                // height: "300px",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              <ProfileCard />
              <ProgressBar />
              <TimeTracker />
            </div>
            <div className="container-c1">
              <div className="container-c5">
                <div className="container-c7">
                  <Accordion />
                </div>
                <Calendar />
              </div>


              <div className="container-c4">
                <OnboardingTask />
                <div className="container-c8">
                  <Accordion />
                </div>
              </div>

            </div>
          </div>


          <div className="container-c2">
            <OnboardingTask />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
