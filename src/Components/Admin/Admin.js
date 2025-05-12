import React from 'react';
import './Admin.css';
import adminpng from '../../assets/user.png'
import { useLocation } from 'react-router-dom';

function Admin() {

    //  password and email from login

const location = useLocation();
  const { email, password } = location.state || {};



  return (
    <div className="container">
      <div className="sidebar">
        <div className="nav-buttons">
          <button className="nav-button">New Requests</button>
          <button className="nav-button">Approved Requests</button>
        </div>
        <div className="admin-footer">
          <span className="admin-icon"><img></img></span>
          <span className="admin-text">Admin</span>
        </div>
      </div>

      <div className="main-content">
        <h1>Hello Admin</h1>
        <div className="form-card">
          <div className="form-group">
            <label>Email</label>
            <input type="text" value={email || ''} disabled />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password || ''} disabled />
          </div>
          <button className="change-button">Change</button>
          <p className="logout-text">
            Do you want to log out? <a href="#">LOGOUT</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Admin;
