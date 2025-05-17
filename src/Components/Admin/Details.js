import React from 'react';
import './details.css';
import { useLocation } from 'react-router-dom';

export default function Details() {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="details-container">
      <nav className="navbar">
        <p>View Details</p>
      </nav>

      <div className="info-section">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>CNIC:</strong> {data.cnic}</p>

        <div className="image-group">
          <div>
            <p><strong>Profile Picture:</strong></p>
            <a href={data.photoUrl} target="_blank" rel="noopener noreferrer">
              <img src={data.photoUrl} alt="Profile" className="image" />
            </a>
          </div>
          <div>
            <p><strong>CNIC Front:</strong></p>
            <a href={data.cnicFrontUrl} target="_blank" rel="noopener noreferrer">
              <img src={data.cnicFrontUrl} alt="CNIC Front" className="image" />
            </a>
          </div>
          <div>
            <p><strong>CNIC Back:</strong></p>
            <a href={data.cnicBackUrl} target="_blank" rel="noopener noreferrer">
              <img src={data.cnicBackUrl} alt="CNIC Back" className="image" />
            </a>
          </div>
        </div>
      </div>

      <div className="info-section">
        <h2>Professional Information</h2>
        <p><strong>Specialization:</strong> {data.specialization}</p>
        <p><strong>Experience:</strong> {data.experience} years</p>
        <p><strong>Clinic Location:</strong> {data.location}</p>

        <div className="image-group">
          <div>
            <p><strong>PMC Registration Certificate:</strong></p>
            <a href={data.pmcCertificateUrl} target="_blank" rel="noopener noreferrer">
              <img src={data.pmcCertificateUrl} alt="PMC Certificate" className="image" />
            </a>
          </div>
          <div>
            <p><strong>House Job Certificate:</strong></p>
            <a href={data.housejobCertUrl} target="_blank" rel="noopener noreferrer">
              <img src={data.housejobCertUrl} alt="House Job Certificate" className="image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
