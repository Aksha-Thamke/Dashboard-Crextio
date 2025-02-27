import React from "react";
import styles from "./Header.module.css";
import { CiSettings } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  const menuItems = [
    "Dashboard",
    "People",
    "Hiring",
    "Devices",
    "Apps",
    "Salary",
    "Calendar",
    "Review",
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>Crextio</span>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <ul className={styles.menu}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${styles.menuItem} ${
                item === "Dashboard" ? styles.active : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className={styles.menu}>
          <div className={`${styles.menuItem}`}>
            <CiSettings size={20} />
            Setting
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "80%",
            height: "40px",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div className={`${styles.menuItem}`}>
            <IoMdNotificationsOutline size={20} />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "70%",
            height: "40px",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div className={`${styles.menuItem}`}>
            <GoPerson size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
