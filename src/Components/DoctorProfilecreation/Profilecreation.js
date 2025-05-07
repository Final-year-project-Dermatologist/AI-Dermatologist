// "use client"

// import { useState } from "react"
// import styles from "./Profile.module.css"
// import doctor from '../../assets/doctor.jpg';
// import Footer from "../Homepage/Footer";
// import Navbar from "../Homepage/Navbar";
// function Profilecreation() {
//   const [formData, setFormData] = useState({
//     name: "",
//     title: "",
//     city: "",
//     experience: "",
//     specialization: "",
//     education: "",
//     about: "",
//     consultationFee: "",
//     phone: "",
//     certificate: null,
//     photo: null,
//   })

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleFileChange = (e, fileType) => {
//     setFormData({
//       ...formData,
//       [fileType]: e.target.files[0],
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//   }

//   return (
//     <div>
//        <Navbar/>
//     <div className={styles.doctorsignupcontainer}>
//       <h1 className={styles.signuptitle}>Create your profile</h1>

//       <form onSubmit={handleSubmit}>
//         <div className={styles.formgroup}>
//           <label  className={styles.labels}  htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className={styles.formgroup}>
//           <label htmlFor="title"  className={styles.labels}>Add a title to your role</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             placeholder="Dermatologist | Cosmetologist"
//             value={formData.title}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className={styles.formgroup}>
//           <label  className={styles.labels} htmlFor="city">City</label>
//           <div className={styles.selectwrapper}>
//             <select id="city" name="city" value={formData.city} onChange={handleInputChange} className={styles.input}>
//               <option value="" disabled>
//                 Select your city
//               </option>
//               <option value="karachi">Karachi</option>
//               <option value="lahore">Lahore</option>
//               <option value="islamabad">Islamabad</option>
//               <option value="rawalpindi">Rawalpindi</option>
//               <option value="peshawar">Peshawar</option>
//             </select>
//             <div className={styles.selectarrow}>&#9662;</div>
//           </div>
//         </div>

//         <div className={styles.formgroup}>
//           <label htmlFor="experience"  className={styles.labels}>Experience</label>
//           <input
//           className={styles.input}
//             type="text"
//             id="experience"
//             name="experience"
//             placeholder="Enter your experience in years"
//             value={formData.experience}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className={styles.formgroup}>
//           <label htmlFor="specialization"  className={styles.labels}>Specialization</label>
//           <input
//           className={styles.input}
//             type="text"
//             id="specialization"
//             name="specialization"
//             placeholder="M.B.B.S | F.C.P.S."
//             value={formData.specialization}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className={styles.formgroup}>
//           <label htmlFor="education"  className={styles.labels}>Education</label>
//           <input
//           className={styles.input}
//             type="text"
//             id="education"
//             name="education"
//             placeholder="Enter your education"
//             value={formData.education}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className={styles.formgroup}>
//           <label htmlFor="about"  className={styles.labels}>About</label>
//           <textarea
//           className={styles.input}
//             id="about"
//             name="about"
//             placeholder="Enter a detailed description about yourself, your top skills, experiences, interests etc."
//             value={formData.about}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className={styles.formgroup}>
//           <label htmlFor="consultationFee"  className={styles.labels}>Consultation fee</label>
//           <input
//           className={styles.input}
//             type="text"
//             id="consultationFee"
//             name="consultationFee"
//             placeholder="Enter your consultation fee in rupees"
//             value={formData.consultationFee}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className={styles.formgroup}>
//           <label htmlFor="phone"  className={styles.labels}>Phone</label>
//           <div className={styles.phoneinput}>
//             <span className={styles.phoneprefix}>+92</span>
//             <input
//             className={styles.input}
//               type="text"
//               id="phone"
//               name="phone"
//               placeholder="Enter number"
//               value={formData.phone}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         <div className={styles.formgroup}>
//           <label  className={styles.labels}>Upload PMC verified Certificate</label>
//           <div className={styles.fileuploadcontainer}>
//             <input
           
//               type="file"
//               id="certificate"
//               name="certificate"
//               onChange={(e) => handleFileChange(e, "certificate")}
//               className={styles.fileinput}
//             />
//             <div className={styles.fileuploadbox}>
//               <div className={styles.uploadicon}>
             
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={`${styles.formgroup} ${styles.photosection}`}>
//           <label  className={styles.labels}>Your Photo</label>
//           <div className={styles.photocontainer}>
//             <div className={styles.photoplaceholder}>
//             <div className={styles.avataricon}>
//    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//      <circle cx="20" cy="15" r="8" fill="black" />
//      <path d="M5 35C5 28.3726 11.3726 23 20 23C28.6274 23 35 28.3726 35 35V40H5V35Z" fill="black" />
//    </svg>
//  </div>
//             </div>
//             <label htmlFor="photo" className={styles.uploadphotoBtn}>
//               <span className={styles.plusicon}>+</span>
//               Upload photo
//             </label>
//             <input
           
//               type="file"
//               id="photo"
//               name="photo"
//               onChange={(e) => handleFileChange(e, "photo")}
//               className={styles.fileinput}
//               accept="image/*"
//             />
//           </div>
//         </div>

//         <div className={styles.submitcontainer}>
//           <button type="submit" className={styles.submitbtn}>
//             Submit your profile
//           </button>
//         </div>
//       </form>
//     </div>
//   <Footer/>
//     </div>
//   )
// }

// export default Profilecreation
