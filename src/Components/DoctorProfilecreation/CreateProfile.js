import React, { useState } from 'react';
import styles from './CreateProfile.module.css';

export default function CreateProfile() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cnic: '',
    pmcCert: null,
    experienceCert: null,
    cnicFront: null,
    cnicBack: null,
    picture: null,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // CNIC: 13 digits
    if (!/^\d{13}$/.test(formData.cnic)) {
      newErrors.cnic = 'CNIC must be 13 digits';
    }

    // Phone: starts with +92
    if (!/^\+92\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must start with +92 and be 13 digits long';
    }

    // Email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // File validation
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    ['pmcCert', 'experienceCert', 'cnicFront', 'cnicBack', 'picture'].forEach((field) => {
      const file = formData[field];
      if (file) {
        if (!allowedTypes.includes(file.type)) {
          newErrors[field] = 'Only PDF, JPG, or PNG files allowed';
        } else if (file.size > maxSize) {
          newErrors[field] = 'File must be less than 5MB';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.files[0] });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // Submit to backend or admin approval
    } else {
      alert('Please fix errors before submitting.');
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h1>Create your profile</h1>

      <input type="text" placeholder="Enter your Full Name" name="name" onChange={handleChange} />
      <input type="text" placeholder="+92 Enter your contact number" name="phone" onChange={handleChange} />
      {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

      <input type="email" placeholder="Enter your Email" name="email" onChange={handleChange} />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      <input type="text" placeholder="Enter your CNIC number" name="cnic" onChange={handleChange} />
      {errors.cnic && <p style={{ color: 'red' }}>{errors.cnic}</p>}

      <select>
        <option>Select your city</option>
        <option>Lahore</option>
        <option>Karachi</option>
        <option>Islamabad</option>
      </select>

      <input type="text" placeholder="Enter your Clinic/Hospital name with full Address" />
      <input type="text" placeholder="Specialty (e.g. Dermatologist)" />
      <input type="text" placeholder="Qualification (e.g. MBBS, FCPS)" />
      <input type="text" placeholder="Enter your PMC Registration number" />

      {/* File uploads with validation */}
      <div className={styles.fileUpload}>Upload PMC Registration Certificate
        <label>
          <input type="file" onChange={(e) => handleFileChange(e, 'pmcCert')} />
          <span>Add a File</span>
        </label>
        {errors.pmcCert && <p style={{ color: 'red' }}>{errors.pmcCert}</p>}
      </div>

      <div className={styles.fileUpload}>Upload House Job/Experience Certificate
        <label>
          <input type="file" onChange={(e) => handleFileChange(e, 'experienceCert')} />
          <span>Add a File</span>
        </label>
        {errors.experienceCert && <p style={{ color: 'red' }}>{errors.experienceCert}</p>}
      </div>

      <div className={styles.fileUpload}>Upload CNIC Front side Image
        <label>
          <input type="file" onChange={(e) => handleFileChange(e, 'cnicFront')} />
          <span>Upload image</span>
        </label>
        {errors.cnicFront && <p style={{ color: 'red' }}>{errors.cnicFront}</p>}
      </div>

      <div className={styles.fileUpload}>Upload CNIC back side Image
        <label>
          <input type="file" onChange={(e) => handleFileChange(e, 'cnicBack')} />
          <span>Upload image</span>
        </label>
        {errors.cnicBack && <p style={{ color: 'red' }}>{errors.cnicBack}</p>}
      </div>

      <div className={styles.fileUpload}>Upload Your scanned picture
        <label>
          <input type="file" onChange={(e) => handleFileChange(e, 'picture')} />
          <span>Upload image</span>
        </label>
        {errors.picture && <p style={{ color: 'red' }}>{errors.picture}</p>}
      </div>

      <button type="submit" className={styles.submitButton}>Submit your profile</button>
    </form>
  );
}
