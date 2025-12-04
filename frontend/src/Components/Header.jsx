import React from "react";
import styles from "../css/Header.module.css";
import logo from "../assets/Images/logo.png";

const Header = () => {
  return (
    <div className={styles.header}>
      
      {/* Left Side: Logo */}
      <div className={styles.logoBox}>
        <img src={logo} alt="College Logo" className={styles.logo} />
      </div>

      {/* Right Side Text */}
      <div className={styles.textBox}>
        <h1 className={styles.collegeName}>Shri Vishwanath Inter College Kalan Sultanpur</h1>
        <p className={styles.tagline}>
          श्री विश्वनाथ इण्टर कॉलेज कलान सुलतानपुर
        </p>
        <p className={styles.tagline2}>
          संचालित: श्री आर्यावर्त माध्यमिक पाठशाला कलान कादीपुर सुल्तानपुर
        </p>
        <p className={styles.tagline3}>
          सम्बद्ध: माध्यमिक शिक्षा परिषद उत्तर प्रदेश
        </p>


      </div>
    </div>
  );
};

export default Header;
