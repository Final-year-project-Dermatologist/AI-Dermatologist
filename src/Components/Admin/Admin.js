import React from 'react';
import styles from './Admin.module.css';
import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Admin() {

  const navigate = useNavigate();

  const handlelogout = () => {
    navigate('/Home');
  }

    //  password and email from login

const location = useLocation();
  const { email, password } = location.state || {};



  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.navButtons}>
          <button className={styles.navButton} onClick={() => navigate('/NewRequest')}>New Requests</button>
          <button className={styles.navButton} onClick={() => navigate('/ApprovedRequest')}>Approved Requests</button>
        </div>
        <div className={styles.adminFooter}>
                  <p className={styles.logoutText}>
            <a href="#" onClick={handlelogout}>SIGNOUT</a>
          </p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <h1>Hello Admin</h1>
        <div className={styles.formCard}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="text" value={email || ''} disabled />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input type="password" value={password || ''} disabled />
          </div>
          <button className={styles.changeButton}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
