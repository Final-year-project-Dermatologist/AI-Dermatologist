import styles from './Services.module.css';
import { Routes, Route, Link, Router } from 'react-router-dom';
import dermatologyurl from '../../assets/Dermatology.jpg';
import urgentCare from '../../assets/urgentcare2.avif';
import consultation from '../../assets/consultation.avif';
import faq from '../../assets/faq4.avif';
import { useState } from 'react';

function Servicessection() {

    const [selectedLink, setSelectedLink] = useState('diseaseDetection');

    const content = {
        diseaseDetection: {
            image: dermatologyurl,
            points: ['Upload an image of the affected skin', 'Get quick and reliable results', 'Spot symptoms at an early stage'],
        },
        urgentCare: {
            image: urgentCare,
            points: ['Get immediate medical attention for urgent conditions', 'Access to quick and reliable care', '24/7 availability for critical cases'],
        },
        dermatologistConsultation: {
            image: consultation,
            points: ['Consult with experienced dermatologists remotely', 'Personalized treatment recommendations', 'Book an appointment at your convenience'],
        },
        faqComplaints: {
            image: faq,
            points: ['Find answers to common questions', 'Submit and track your complaints', 'Get support for any concerns or issues']

        },
    }

    const imageUrl = content[selectedLink].image;
    const pointslist = content[selectedLink].points.map((point, index) => (
        <li key={index}>{point}</li>
    ));

    return (
        <div className={styles.Servicecontainer}>
            <h1 className={styles.serviceh1}>Our Services</h1>
            <div className={styles.servicelinks}>
                <Link className={styles.servlink} onClick={() => setSelectedLink('diseaseDetection')}>Disease detection</Link>
                <Link className={styles.servlink} onClick={() => setSelectedLink('urgentCare')}>Urgent Care</Link>
                <Link className={styles.servlink} onClick={() => setSelectedLink('dermatologistConsultation')}>Dermatologist Consultation</Link>
                <Link className={styles.servlink} onClick={() => setSelectedLink('faqComplaints')}>FAQ and Complaints</Link>
            </div>
            <div className={styles.servicescontents}>


                <img src={imageUrl} className={styles.image}/>
                
                <ul className={styles.listpoints}>
                    {pointslist}
                </ul>
            </div>
        </div>
    )
}

export default Servicessection;