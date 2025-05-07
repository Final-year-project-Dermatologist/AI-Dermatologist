import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Part3.module.css'; 


import img1url from '../../assets/img1.png';
import img2url from '../../assets/img2.png';
import img3url from '../../assets/img3.png';
import img4url from '../../assets/img4.webp';
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';

function Homepart3() {
    return (
        <div className={styles.part3container}>
            <h1 className={styles.part3heading}>
                Let's Find a <span className={styles.highlight}>Healthcare Provider</span> Who Gets You
            </h1>

            <div className={styles.container1}>
                <img src={img1url} alt="Dermatologist 1" />
                <div>
                    <h3>Discover qualified dermatologists in your area who specialize in diagnosing
                        and treating skin conditions. Our platform connects you with trusted
                        professionals, ensuring you receive expert care and personalized
                        treatment plans. Take the first step toward healthier skin with confidence.</h3>
                    <button className={styles.btn}>See specialists</button>
                </div>
            </div>

            <div className={styles.container1}>
                <div>
                    <h2>Hear from satisfied patients</h2>
                    <h3>Discover qualified dermatologists in your area who specialize in<br /> diagnosing
                        and treating skin conditions. Our platform connects<br /> you with trusted
                        professionals, ensuring you receive expert care<br /> and personalized
                        treatment plans. Take the first step toward<br /> healthier skin with confidence.</h3>
                    <button className={styles.btn}>See Providers</button>
                </div>
                <img src={img2url} alt="Dermatologist 2" />
            </div>

            <div className={styles.container1}>
                <img src={img3url} className={styles.img3} alt="Dermatologist 3" />
                <div>
                    <h2>Instant and Accurate Disease Detection</h2>
                    <h3>Discover qualified dermatologists in your area who specialize in<br /> diagnosing
                        and treating skin conditions. Our platform connects<br /> you with trusted
                        professionals, ensuring you receive expert care<br /> and personalized
                        treatment plans. Take the first step toward<br /> healthier skin with confidence.</h3>
                    <button className={styles.btn}>Scan Disease</button>
                </div>
            </div>

            <h1 className={styles.heading2}>
                Addressing Your Medical Concern Is As Easy As <br />
                <span className={styles.highlighted}>1, 2, 3 With AI Dermatologist</span>
            </h1>

            <div className={styles.container2}>
                <img src={img4url} className={styles.img4} alt="Step-by-step" />
                <div className={styles.icons}>
                    <img src={one} className={styles.icon} alt="Step 1" />
                    <img src={two} className={styles.icon} alt="Step 2" />
                    <img src={three} className={styles.icon} alt="Step 3" />
                </div>
                <div className={styles.textcontainer}>
                    <h2>Log on to AI Dermatologist</h2>
                    <h3>Connect securely by booking a consultation from your desktop or smartphone.</h3>
                    <h2>Upload Image</h2>
                    <h3>Easily upload a clear image of your skin condition to our secure platform. Our AI will analyze the image to detect potential skin diseases.</h3>
                    <h2>Get Diagnosed and See Results</h2>
                    <h3>Get a comprehensive diagnosis and suggested treatment plan instantly.</h3>
                </div>
            </div>
        </div>
    );
}

export default Homepart3;
