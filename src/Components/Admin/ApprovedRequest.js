import React, { useEffect, useState } from 'react';
import styles from './Admin.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

function ApprovedRequest() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, password } = location.state || {};

  const [requests, setRequests] = useState([]);

 //                                     call api

 useEffect(() => {
  fetch('http://localhost:5000/api/profile-for-approval')
    .then(res => res.json())
    .then(data => {
      const pendingOnly = data.filter(req => req.approvalStatus === 'Approved');
      setRequests(pendingOnly);
    })
    .catch(err => console.error(err));
}, []);





//                           logout 

  const handleLogout = () => {
    navigate('/Home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.navButtons}>
          <button className={styles.AnavButton} onClick={() => navigate('/NewRequest')}>New Requests</button>
          <button className={styles.navButton} >Approved Requests</button>
        </div>
        <div className={styles.adminFooter}>
          <p className={styles.logoutText}>
            <a href="#" onClick={handleLogout}>SIGNOUT</a>
          </p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <h1>Approved Requests</h1>
        <div className={styles.tableWrapper}>
          <table className={styles.requestTable}>
            <thead>
              <tr>
                <th>Status</th>
                <th>Name</th>
                <th>Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>


 {requests.map((req, index) => (
  <tr key={index}>
    <td>{req.approvalStatus}</td>
    <td>{req.name}</td>
    <td>
      <a
        href=""
        className={styles.viewLink}
        onClick={() => navigate('/Details', { state: req })}
      >
        view
      </a>
    </td>
    <td>
      <button className={styles.ActivateButton} > Activate </button>
      <button className={styles.DeactivateButton} > Deactivate </button>
    </td>
  </tr>
))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ApprovedRequest;
