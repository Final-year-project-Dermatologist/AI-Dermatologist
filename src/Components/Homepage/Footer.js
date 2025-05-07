import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        <h2><span className={styles.highlight}>AI</span> Dermatologist</h2>
        <p>Analyze your skin with AI</p>
      </div>

      <div className={styles.footerSection}>
        <h2>Quick Links</h2>
        <ul className={styles.clickableList}>
          <li><Link to="/Password">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/upload">Upload Image</Link></li>
          <li><Link to="/find-doctors">Find Doctors</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>

      <div className={styles.footerSection}>
        <h2>Dermatology Conditions</h2>
        <ul className={styles.nonClickableList}>
          <li>Cellulitis</li>
          <li>Impetigo</li>
          <li>Tinea pedis</li>
          <li>Nail fungus</li>
          <li>Tinea corporis</li>
          <li>Cutaneous larva migrans</li>
          <li>Chickenpox</li>
          <li>Shingles</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
