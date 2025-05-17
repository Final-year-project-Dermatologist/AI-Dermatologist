import React, { useState, useRef } from 'react';
import styles from './ProfileDraft.module.css';
import Navbar from '../Homepage/Navbar';
import upload from '../../assets/upload.png';
import { submitProfileToSupabase } from './SubmitProfile';

const ProfileDraft = ({ user }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    experience: '',
    email: '',
    phone: '',
    cnic: '',
    specialization: '',
    location: ''
  });

  const [uploadFiles, setUploadFiles] = useState({
    pmcCertificate: null,
    houseJobCertificate: null,
    cnicFront: null,
    cnicBack: null,
    profilePhoto: null
  });

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, label) => {
    setUploadFiles({ ...uploadFiles, [label]: e.target.files[0] });
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = await submitProfileToSupabase(formData, uploadFiles, user?.id);
    if (error) {
      alert('Error submitting profile: ' + error.message);
    } else {
      alert('Profile submitted successfully!');
    }
  };

  return (
    <div>
      <Navbar user={user} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Profile Approval Form</h2>

        {['name', 'gender', 'experience', 'email', 'phone', 'cnic', 'specialization', 'location'].map(field => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={`Enter your ${field}`}
            className={styles.input}
            value={formData[field]}
            onChange={handleInputChange}
          />
        ))}

        {[
          ['pmcCertificate', 'PMC Registration Certificate'],
          ['houseJobCertificate', 'House Job Certificate'],
          ['cnicFront', 'CNIC front side'],
          ['cnicBack', 'CNIC back side']
        ].map(([label, display]) => (
          <div className={styles.uploadContainer} key={label}>
            <label className={styles.uploadLabel}>Upload {display}</label>
            <label className={styles.fileLabel}>
              {uploadFiles[label] ? (
                <span>{uploadFiles[label].name}</span>
              ) : (
                <>
                  <img src={upload} alt="upload" className={styles.uploadIcon} />
                  <span>Upload image</span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                className={styles.fileInput}
                onChange={(e) => handleFileChange(e, label)}
              />
            </label>
          </div>
        ))}

        <div className={styles.photoUploadSection}>
          <div className={styles.avatar}>
            {uploadFiles.profilePhoto && (
              <img
                src={URL.createObjectURL(uploadFiles.profilePhoto)}
                alt="Uploaded Avatar"
                className={styles.avatar}
              />
            )}
          </div>
          <button type="button" className={styles.uploadButton} onClick={handleButtonClick}>
            + Upload photo
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(e, 'profilePhoto')}
          />
        </div>

        <button type="submit" className={styles.submitButton}>Submit your profile</button>
      </form>
    </div>
  );
};

export default ProfileDraft;
