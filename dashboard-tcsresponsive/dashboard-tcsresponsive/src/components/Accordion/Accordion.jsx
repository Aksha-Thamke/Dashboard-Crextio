import React, { useState } from "react";
import styles from "./Accordion.module.css";
import { FaChevronDown, FaChevronUp, FaEllipsisV } from "react-icons/fa";

const AccordionItem = ({ title, children, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <div
        className={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <div className={styles.icons}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      
      {isOpen && (
        <div className={styles.accordionContent}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {image && <img src={image} alt={title} className={styles.image} />}
            {children}
          </div>
          {image && <FaEllipsisV className={styles.moreIcon} />}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className={styles.accordionContainer}>
      <AccordionItem title="Pension contributions" />
      <AccordionItem
        title="Devices"
        image="https://m.media-amazon.com/images/I/71jG+e7roXL.jpg"
      >
        <p style={{ fontSize: "12px", fontWeight: 700 }}>
          MacBook Air
          <br />
          <span style={{ fontSize: "10px", fontWeight: 300 }}>Version M1</span>
        </p>
      </AccordionItem>
      <AccordionItem title="Compensation Summary" />
      <AccordionItem title="Employee Benefits" />
    </div>
  );
};

export default Accordion;
