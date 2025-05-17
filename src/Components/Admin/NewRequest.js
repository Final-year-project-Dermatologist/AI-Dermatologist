import React, { useEffect, useState } from 'react';
import styles from './Admin.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

function NewRequest() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, password } = location.state || {};

  const [requests, setRequests] = useState([]);

 //                                     call api

 useEffect(() => {
  fetch('http://localhost:5000/api/profile-for-approval')
    .then(res => res.json())
    .then(data => {
      const pendingOnly = data.filter(req => req.approvalStatus === 'pending');
      setRequests(pendingOnly);
    })
    .catch(err => console.error(err));
}, []);




//                                approve or reject status update 

const updateStatus = async (id, status) => {
  try {
    const res = await fetch(`http://localhost:5000/api/update-approval-status/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ approvalStatus: status })
    });

    if (res.ok) {
      // Remove this request from the list (filter it out)
      setRequests(prev => prev.filter(req => req.id !== id));
    } else {
      console.error('Failed to update status');
    }
  } catch (err) {
    console.error(err);
  }
};







//                           logout 

  const handleLogout = () => {
    navigate('/Home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.navButtons}>
          <button className={styles.AnavButton}>New Requests</button>
          <button className={styles.navButton} onClick={() => navigate('/ApprovedRequest')}>Approved Requests</button>
        </div>
        <div className={styles.adminFooter}>
          <p className={styles.logoutText}>
            <a href="#" onClick={handleLogout}>SIGNOUT</a>
          </p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <h1>New Requests</h1>
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
        onClick={(e) => {
    e.preventDefault(); // prevent page reload
    navigate('/Details', { state: req });
  }}
      >
        view
      </a>
    </td>
    <td>
      <button
        className={styles.approveButton}
        onClick={() => updateStatus(req.id, 'Approved')}
      >
      Approve
      </button>
      <button
        className={styles.rejectButton}
        onClick={() => updateStatus(req.id, 'Rejected')}
      >
        Reject
      </button>
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

export default NewRequest;
