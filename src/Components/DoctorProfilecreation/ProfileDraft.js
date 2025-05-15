// import React, { useState, useRef } from 'react';
// import styles from './ProfileDraft.module.css';
// import Navbar from '../Homepage/Navbar';
// import upload from '../../assets/upload.png';
// import { SubmitProfile } from './SubmitProfile';

// const ProfileDraft = ({ user }) => {
    


//     const handleButtonClick = () => {
//         fileInputRef.current.click(); 
//     };

   

//     return (
//         <div>
//             <Navbar user={user} />
//             <form className={styles.form} >
//                 <h2>Profile Approval Form</h2>

//                 <input type="text" name="name" placeholder="Enter your name" className={styles.input}  />
//                 <input type="text" name="gender" placeholder="Enter your Gender" className={styles.input} />
//                 <input type="number" name="experience" placeholder="Enter your experience in years" className={styles.input}  />
//                 <input type="email" name="email" placeholder="Enter your Email" className={styles.input}  />
//                 <input type="tel" name="phone" placeholder="+92 Enter number" className={styles.input}  />
//                 <input type="text" name="cnic" placeholder="Enter your CNIC" className={styles.input} />
//                 <input type="text" name="specialization" placeholder="Enter your specialization (MBBS/Dermatologist)" className={styles.input}  />
//                 <input type="text" name="location" placeholder="Enter your Clinic/Hospital location" className={styles.input}  />

//                 <div className={styles.uploadContainer}>
//                     <label className={styles.uploadLabel}>Upload PMC Registration Certificate</label>
//                     <label className={styles.fileLabel}>
//                         {uploadFile.pmcCertificate ? (
//                             <span>{uploadFile.pmcCertificate.name}</span>
//                         ) : (
//                             <>
//                                 <img src={upload} alt="upload" className={styles.uploadIcon} />
//                                 <span>Add a File</span>
//                             </>
//                         )}
//                         <input type="file" className={styles.fileInput} accept="image/*" />
//                     </label>
//                 </div>

//                 <div className={styles.uploadContainer}>
//                     <label className={styles.uploadLabel}>Upload House Job Certificate</label>
//                     <label className={styles.fileLabel}>
//                         {uploadFile.houseJobCertificate ? (
//                             <span>{uploadFile.houseJobCertificate.name}</span>
//                         ) : (
//                             <>
//                                 <img src={upload} alt="upload" className={styles.uploadIcon} />
//                                 <span>Add a File</span>
//                             </>
//                         )}
//                         <input type="file" accept="image/*" className={styles.fileInput} />
//                     </label>
//                 </div>

//                 <div className={styles.uploadContainer}>
//                     <label className={styles.uploadLabel}>Upload CNIC front side image</label>
//                     <label className={styles.fileLabel}>
//                         {uploadFile.cnicFront ? (
//                             <span>{uploadFile.cnicFront.name}</span>
//                         ) : (
//                             <>
//                                 <img src={upload} alt="upload" className={styles.uploadIcon} />
//                                 <span>Upload image</span>
//                             </>
//                         )}
//                         <input type="file" className={styles.fileInput} accept="image/*"  />
//                     </label>
//                 </div>

//                 <div className={styles.uploadContainer}>
//                     <label className={styles.uploadLabel}>Upload CNIC back side image</label>
//                     <label className={styles.fileLabel}>
//                         {uploadFile.cnicBack ? (
//                             <span>{uploadFile.cnicBack.name}</span>
//                         ) : (
//                             <>
//                                 <img src={upload} alt="upload" className={styles.uploadIcon} />
//                                 <span>Upload image</span>
//                             </>
//                         )}
//                         <input type="file" accept="image/*" className={styles.fileInput} />
//                     </label>
//                 </div>

//                 <div className={styles.photoUploadSection}>
//                     <div className={styles.avatar}>
//                         {photo && <img src={photo} alt="Uploaded Avatar" className={styles.avatar} />}
//                     </div>

//                     <button type="button" className={styles.uploadButton} onClick={handleButtonClick}>
//                         + Upload photo
//                     </button>

//                     <input type="file" accept="image/*"  style={{ display: 'none' }} />
//                 </div>
//                 <button type="submit" className={styles.submitButton}>Submit your profile</button>
//             </form>
//         </div>
//     );
// };

// export default ProfileDraft;


import { supabase } from '../../supabase';
import React, { useState, useRef } from 'react';
import styles from './ProfileDraft.module.css';
import Navbar from '../Homepage/Navbar';
import upload from '../../assets/upload.png';


const ProfileDraft = ({ user }) => {
    const fileInputRef = useRef(null);
    const [photo, setPhoto] = useState(null);
    const [uploadFile, setUploadFile] = useState({
        pmcCertificate: null,
        houseJobCertificate: null,
        cnicFront: null,
        cnicBack: null,
        profilePhoto: null,
    });

    const [formValues, setFormValues] = useState({
        name: '',
        gender: '',
        experience: '',
        email: '',
        phone: '',
        cnic: '',
        specialization: '',
        location: '',
    });

    const handleInputChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        if (file) {
            setUploadFile({ ...uploadFile, [field]: file });

            if (field === 'profilePhoto') {
                const reader = new FileReader();
                reader.onloadend = () => setPhoto(reader.result);
                reader.readAsDataURL(file);
            }
        }
    };

    const uploadToStorage = async (file, fileName) => {
        const { data, error } = await supabase.storage
            .from('profileuploads')
            .upload(`profiles/${Date.now()}_${fileName}`, file);

        if (error) {
            console.error('Upload error:', error.message);
            return null;
        }
        return data.path;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const uploads = await Promise.all([
                uploadFile.pmcCertificate ? uploadToStorage(uploadFile.pmcCertificate, 'pmc_certificate') : null,
                uploadFile.houseJobCertificate ? uploadToStorage(uploadFile.houseJobCertificate, 'house_job_certificate') : null,
                uploadFile.cnicFront ? uploadToStorage(uploadFile.cnicFront, 'cnic_front') : null,
                uploadFile.cnicBack ? uploadToStorage(uploadFile.cnicBack, 'cnic_back') : null,
                uploadFile.profilePhoto ? uploadToStorage(uploadFile.profilePhoto, 'profile_photo') : null,
            ]);

            const { error } = await supabase.from('ProfileforApproval').insert([
                {
                    ...formValues,
                    id: user.id,
                    pmcCertificateUrl: uploads[0],
                    housejobCertUrl: uploads[1],
                    cnicFrontUrl: uploads[2],
                    cnicBackUrl: uploads[3],
                    photoUrl: uploads[4],
                },
            ]);

            if (error) {
                console.error('Insert error:', error.message);
                alert('Failed to submit profile.');
            } else {
                alert('Profile submitted successfully!');
            }
        } catch (err) {
            console.error('Submission error:', err);
            alert('An error occurred during submission.');
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <Navbar user={user} />
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Profile Approval Form</h2>

                <input name="name" placeholder="Enter your name" className={styles.input} onChange={handleInputChange} />
                <input name="gender" placeholder="Enter your Gender" className={styles.input} onChange={handleInputChange} />
                <input name="experience" placeholder="Enter experience in years" className={styles.input} onChange={handleInputChange} />
                <input name="email" placeholder="Enter your Email" className={styles.input} onChange={handleInputChange} />
                <input name="phone" placeholder="+92 Enter number" className={styles.input} onChange={handleInputChange} />
                <input name="cnic" placeholder="Enter your CNIC" className={styles.input} onChange={handleInputChange} />
                <input name="specialization" placeholder="Enter specialization" className={styles.input} onChange={handleInputChange} />
                <input name="location" placeholder="Enter your Clinic/Hospital location" className={styles.input} onChange={handleInputChange} />

                {[
                    { label: 'PMC Registration Certificate', field: 'pmcCertificate' },
                    { label: 'House Job Certificate', field: 'houseJobCertificate' },
                    { label: 'CNIC Front Side', field: 'cnicFront' },
                    { label: 'CNIC Back Side', field: 'cnicBack' },
                ].map(({ label, field }) => (
                    <div key={field} className={styles.uploadContainer}>
                        <label className={styles.uploadLabel}>{label}</label>
                        <label className={styles.fileLabel}>
                            {uploadFile[field] ? (
                                <span>{uploadFile[field].name}</span>
                            ) : (
                                <>
                                    <img src={upload} alt="upload" className={styles.uploadIcon} />
                                    <span>Add a File</span>
                                </>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                className={styles.fileInput}
                                onChange={(e) => handleFileChange(e, field)}
                            />
                        </label>
                    </div>
                ))}

                <div className={styles.photoUploadSection}>
                    <div className={styles.avatar}>
                        {photo && <img src={photo} alt="Uploaded Avatar" className={styles.avatar} />}
                    </div>
                    <button type="button" className={styles.uploadButton} onClick={handleButtonClick}>
                        + Upload photo
                    </button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
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
