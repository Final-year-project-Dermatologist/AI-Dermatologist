import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
import Modal from '../Loginsignup/Model';
import userimg from '../../assets/doctorlist.png';
import { Link } from 'react-router-dom';

export default function Navbar({ user }) {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const isLoggedIn = !!user;

    const handleProtectedClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
            setShowModal(true);
        }
        
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>AI Dermatologist</div>

                <nav className={styles.navLinks}>
                    <a href="#" onClick={handleProtectedClick}>About us</a>
                    <a href="#" onClick={handleProtectedClick}>Upload Image</a>
                    <Link to="/ProfileDraft">Find Doctors</Link>
                   
                    <a href="#" onClick={handleProtectedClick}>FAQ</a>
                </nav>

                <div className={styles.authSection}>
                    {isLoggedIn ? (
                         <div className={styles.userInfo}>
                            <img src={userimg} className={styles.profilePic} />
                            <span className={styles.username}>{user.name}</span>
                        </div>
                    ) : (
                        <div className={styles.buttonGroup}>
                            <button className={styles.authButton}
                                onClick={() => navigate('/Login')}
                            >Login</button>
                            <button className={styles.authButton}
                                onClick={() => navigate('/Firstscreen')}
                            >Sign Up</button>
                       </div>
                    )}
                </div>
            </header>

            {!isLoggedIn && showModal && (
                <Modal
                    title="Access Restricted"
                    message="Please sign up first to access this section."
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
}
