import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { useNavigate, Link } from 'react-router-dom';
import Modal from '../Loginsignup/Model';
import userimg from '../../assets/doctorlist.png';

export default function Navbar({ user }) {
    const [showModal, setShowModal] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
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

    const handleProfileClick = () => {
        if (user?.role === 'doctor') {
            setShowPopup(prev => !prev);
        }
    };

    const handleCreateProfile = () => {
        setShowPopup(false);
        navigate('/ProfileDraft');
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
                            <div style={{ position: 'relative' }}>
                              
                                <div
                                    className={styles.profilePic}
                                    onClick={handleProfileClick}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {user?.name?.[0]?.toUpperCase() || 'U'}
                                </div>

                                {/* Conditional Popup with Clickable Text */}
                                {showPopup && user.role === 'doctor' && (
                                    <div className={styles.popupMenu}>
                                        <span
                                            onClick={handleCreateProfile}
                                            className={styles.popupText}
                                        >
                                            Create Profile
                                        </span>
                                    </div>
                                )}
                            </div>
                            <span className={styles.username}>{user.name}</span>
                        </div>
                    ) : (
                        <div className={styles.buttonGroup}>
                            <button
                                className={styles.authButton}
                                onClick={() => navigate('/Login')}
                            >
                                Login
                            </button>
                            <button
                                className={styles.authButton}
                                onClick={() => navigate('/Firstscreen')}
                            >
                                Sign Up
                            </button>
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
