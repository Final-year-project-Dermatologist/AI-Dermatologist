import styles from './Profile.module.css';
import Navbar from '../Homepage/Navbar';
import { MapPin, Phone, MessageSquare } from "lucide-react"
import Footer from '../Homepage/Footer';
import doctor from '../../assets/doctorlist.png';


function Profile() {
    return (
        <div>
            <Navbar />
            <div className={styles.profilecontainer}>
                <header className={styles.profileheader}>
                    <div className={styles.avatarcontainer}>
                        <img src={doctor} alt="Doctor avatar" className={styles.avatar} />
                    </div>
                    <div className={styles.headerinfo}>
                        <h1>
                            Dr. Mahpara Safdar <span className={styles.title}>(PMDC verified)</span>
                        </h1>
                        <p className={styles.specialty}>Dermatologist</p>
                        <div className={styles.locationinfo}>
                            <MapPin size={16} className={styles.icon} />
                            <span>DHA Lahore, Pakistan</span>
                        </div>
                        <div className={styles.contactinfo}>
                            <Phone size={16} className={styles.icon} />
                            <span>(907) 555-1001</span>
                        </div>
                    </div>
                </header>

                <div className={styles.profilecontent}>
                    <div className={styles.maincontentpro}>
                        <section className={styles.aboutsection}>
                            <h2>About</h2>
                            <p>
                                I am a globally licensed medical doctor (Spain, Colombia, Venezuela) with extensive experience in medical
                                writing, clinical research, and academic publications. With over 10 years of experience in healthcare, I
                                have worked on a wide range of projects, including scientific writing, research methodology, data
                                analysis, and content development for healthcare professionals and general audiences.
                            </p>
                            <p>
                                With a strong background in both clinical medicine and surgical fields, I bring in-depth knowledge across
                                multiple medical specialties, ensuring the accuracy and reliability of my work. Additionally, I provide
                                precise medical translations (English to Spanish) for lab reports, research articles, medical blogs, and
                                legal documents.
                            </p>
                            <p>
                                Passionate about evidence-based medicine and healthcare communication, I am committed to delivering
                                high-quality, well-researched, and engaging medical content tailored to each client's needs. If you're
                                looking for a medical expert to support your writing, research, or translation projects, let's
                                collaborate!
                            </p>
                        </section>

                        <section className={styles.experiencesection}>
                            <h2>Experience</h2>
                            <div className={styles.experienceitem}>
                                <h3>Shalamar Medical and Dental College</h3>
                                <p className={styles.jobtitle}>Dermatology Consultant</p>
                                <p className={styles.jobperiod}>Dec 2022-Present   • 3 Years 1 month</p>
                            </div>
                            <div className={styles.experienceitem}>
                                <h3>Ghurki Trust Teaching Hospital</h3>
                                <p className={styles.jobtitle}>Consultant Dermatologist, Aesthetician</p>
                                <p className={styles.jobperiod}>Aug 2020-Dec 2022 • 4 years</p>
                            </div>
                        </section>

                        <section className={styles.reviewssection}>
                            <h2>Reviews about Dr. Mahpara Safdar (1)</h2>
                            <div className={styles.reviewitem}>
                                <div className={styles.reviewerinfo}>
                                    <div className={styles.revieweravatar}>S</div>
                                    <div>
                                        <p className={styles.reviewername}>Sheeza Qamar</p>
                                        <p className={styles.reviewdate}>Jan 28, 2023</p>
                                    </div>
                                </div>
                                <p className={styles.reviewtext}>"Good Experience with Dr Mahpara safdar"</p>
                            </div>
                        </section>

                        <section className={styles.faqsection}>
                            <h2>Frequently Asked Questions</h2>
                            <div className={styles.faqitem}>
                                <h3>What is the education of Dr. Madiha Kashan Khan?</h3>
                                <p>Dr. Mahpara Safdar has the following degrees: M.B.B.S, F.C.P.S (Dermatology)</p>
                            </div>
                            <div className={styles.faqitem}>
                                <h3>What is the experience of Dr. Mahpara Safdar?</h3>
                                <p>Dr. Mahpara Safdar has 12 years of experience</p>
                            </div>
                        </section>
                    </div>

                    <div className={styles.profilesidebar}>
                        <div className={styles.clinicinfo}>
                            <h2>Dr Mahpara Clinic</h2>
                            <div className={styles.cliniclocation}>
                                <div className={styles.feeRow}>
                                    <p>Fee:</p>
                                    <span>Rs.1,250</span>
                                </div>
                                <div className={styles.feeRow}>
                                    <p>Location:</p>
                                    <span>use phone for video call</span>
                                </div>
                               
                            </div>
                            <hr />



                            <button className={styles.bookappointmentbtn}>Book Appointment</button>
                            <button className={styles.messagebtn}>
                                <MessageSquare size={16} className={styles.icon} />
                                Message Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile;