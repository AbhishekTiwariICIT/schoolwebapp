import React from "react";
import styles from '../../css/schResultsUpdate/sectioncard.module.css';

const Section = ({title}) => {
    const boxes = [1, 2, 3, 4];
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>
        <span>{title}</span>
      </div>
      <div className={styles.grid}>
         {boxes.map((item, index) => (
          <div key={index} className={styles.box}></div>
        ))}
      </div>
    </div>
  );
};


export default Section;