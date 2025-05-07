import styles from './Firstscreen.module.css';
import user from '../../assets/user.png';
import doctor from '../../assets/doctor1.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Firstscreen() {
    const navigate = useNavigate();
    const [role, setRole] = useState(null);

    const handleCreateAccount = () => {
        if (role) {
            navigate("/Signup", { state: { role } }); // pass role to Signup screen
        } else {
            alert("Please select a role.");
        }
    };

    return (
        <div>
            <div className={styles.logo}>AI Dermatologist</div>
            <div className={styles.container}>
                <h1>Join as a User or Doctor</h1>
                <div className={styles.selectionbox}>
                    <div
                        className={`${styles.selectionCard} ${role === 'patient' ? styles.selected : ''}`}
                        onClick={() => setRole('patient')}
                    >
                        <img className={styles.icon} src={user} />
                        <h2>I'm a user looking for a doctor</h2>
                    </div>
                    <div
                        className={`${styles.selectionCard} ${role === 'doctor' ? styles.selected : ''}`}
                        onClick={() => setRole('doctor')}
                    >
                        <img className={styles.icon} src={doctor} />
                        <h2>I'm a doctor looking for a patient</h2>
                    </div>
                </div>

                <button onClick={handleCreateAccount}>Create Account</button>
                <div>
                    Already have an account? <a href="/Login">Login</a>
                </div>
            </div>
        </div>
    );
}

export default Firstscreen;
