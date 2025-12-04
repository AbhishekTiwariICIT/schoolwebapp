import React, { useState } from "react";
import styles from "../css/MenuBar.module.css";

const MenuBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.menu}>

      {/* Hamburger and Close Icons */}
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <span className={`${styles.openIcon} ${open ? styles.hide : ""}`}>☰</span>
        <span className={`${styles.closeIcon} ${open ? styles.showIcon : ""}`}>✖</span>
      </div>

      <ul className={`${styles.menuList} ${open ? styles.show : ""}`}>
        <li>Home</li>
        <li>About Us</li>
        <li>Courses</li>
        <li>Rules & Regulation</li>
        <li>Faculties</li>
        <li>Students</li>
        <li>Facilities</li>
        <li>Gallery</li>
        <li>Result</li>
        <li>Contact</li>
      </ul>

    </nav>
  );
};

export default MenuBar;
