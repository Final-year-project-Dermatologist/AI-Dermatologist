import React from 'react';
import styles from './Book.module.css';
import Navbar from '../Homepage/Navbar';
import Footer from '../Homepage/Footer';


function Bookappointment() {
  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 AM", "12:30 AM", "01:00 AM", "01:30 AM",
    "02:00 AM", "02:30 AM"
  ];

  return (
    <div>
        <Navbar/>
    <div className={styles.appointmentpage}>
      <div className={styles.doctorcard}>
        <div className={styles.avatar}></div>
        <div className={styles.doctorinfo}>
          <h3>Dr. Sadaf Zahid</h3>
          <p>Online video Consultation</p>
          <p className={styles.fee}>Fee: Rs. 1,500</p>
        </div>
      </div>

      <div className={styles.slotselector}>
        <div className={styles.datetabs}>
          <span className={styles.arrow}>←</span>
          <div className={styles.tabs}>
            <div className={styles.tabactive}>June, 02</div>
            <div className={styles.tab}>June, 02</div>
            <div className={styles.tab}>June, 02</div>
            <div className={styles.tab}>June, 02</div>
            <div className={styles.tab}>June, 02</div>
          </div>
          <span className={styles.arrow}>→</span>
        </div>

        <div className={styles.slots}>
        <h4>Available Slots</h4>
<div className={styles.slotgrid}>
  {timeSlots.map((slot, index) => (
    <div key={index} className={styles.slot}>
      {slot}
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Bookappointment;
