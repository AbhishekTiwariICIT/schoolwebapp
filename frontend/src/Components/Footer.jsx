import styles from '../css/footer.module.css';



import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand Section */}
        <div className={styles.brand}>
          <h2>Shri Vishwanath Inter College</h2>
          <p>Designed and Developed by: <span>Abhishek Tiwari</span> </p>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={styles.sociallink}>
          <h3>Follow Me</h3>
          <div className={styles.icons}>
            <a href="###" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="###" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="###" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Shri Vishwanath Inter College. All rights reserved.</p>
      </div>
    </footer>
  );
}
