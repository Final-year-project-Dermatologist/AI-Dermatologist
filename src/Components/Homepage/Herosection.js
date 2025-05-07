import doctorurl from '../../assets/doctor.jpg';
import styles from './Herosection.module.css';

function Herosection() {
    return (
        <div className={styles.container}>
            <div className={styles.headings}>
                <h1>Get Instant Skin Health Insights</h1>
                <h2>Anytime, Anywhere</h2>
                <h3>
                    Did you know you can get an instant skin health assessment
                    right from your device,<br />
                    without needing an appointment? Our AI-powered dermatologist is available 24/7<br />
                    to analyze your skin concerns and provide accurate insights.
                    Get early detection<br />
                    and personalized care recommendations anytime, anywhere!
                </h3>
            </div>
            <img className={styles.doctor} src={doctorurl} alt="doctor" />
        </div>
    );
}

export default Herosection;
