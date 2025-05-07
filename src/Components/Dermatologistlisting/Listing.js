import styles from './Listing.module.css';
import Navbar from '../Homepage/Navbar';
import Footer from '../Homepage/Footer';
import doctor from '../../assets/doctorlist.png';

function Listing() {
    const doctors = [
        {
            name: 'Dr. Ali Kazmi',
            gender: 'male',
            title: 'Dermatologist, Cosmetologist',
            degree: 'M.B.B.S, Dip. Derm. From UK London',
            reviews: 55,
            experience: 1,
            fees: 2000,
            image: doctor
        },
        {
            name: 'Dr. Mahpara Safdar',
            gender: 'female',
            title: 'Dermatologist',
            degree: 'MBBS, Dip. in Dermatology, PGD',
            reviews: 126,
            experience: 23,
            fees: 4500,
            image: doctor
        },
        {
            name: 'Dr. Warda Amin Sheikh',
            gender: 'female',
            title: 'Dermatologist, Cosmetologist',
            degree: 'MBBS, MCPS (Dermatologist)',
            reviews: 55,
            experience: 2,
            fees: 3000,
            image: doctor
        }
    ];



    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1>Best Dermatologists in Pakistan</h1>
                <div className={styles.filters}>
                    <button>Female Doctors</button>
                    <button>Most Experienced</button>
                    <button>Lowest fees</button>
                    <button>Highest Rated</button>
                    <button>Male Doctors</button>
                    <button>Highest fees</button>
                </div>
                {doctors.map((doc, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.info}>
                            <div className={styles.info}>
                                <img src={doc.image} alt={doc.name} className={styles.avatar} />
                                <div>
                                    {/* name, title, etc. */}
                                </div>
                            </div>

                            {/* <div className={styles.avatar}></div> */}
                            <div>
                                <h3><strong>{doc.name} </strong><span className={styles.verified}> (PMDC Verified)</span></h3>
                                <p>{doc.title}</p>
                                <p>{doc.degree}</p>
                                <div className={styles.meta}>
                                    <div className={styles.metaBlock}>
                                        <p>Reviews</p>
                                        <strong>{doc.reviews}</strong>
                                    </div>
                                    <div className={styles.metaBlock}>
                                        <p>Experience</p>
                                        <strong>{doc.experience} year(s)</strong>
                                    </div>
                                </div>
                                <div className={styles.feesBox}>
                                    Consultation Fees: <strong>Rs. {doc.fees}</strong>
                                </div>


                            </div>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.book}>Book Appointment</button>
                            <button className={styles.view}>View Profile</button>
                        </div>
                    </div>
                ))}
                <button className={styles.loadMore}>Load More</button>
            </div>
            <Footer />
        </div>
    )
}

export default Listing;