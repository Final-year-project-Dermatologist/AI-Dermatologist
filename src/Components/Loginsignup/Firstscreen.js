import styles from './Firstscreen.module.css';
import user from '../../assets/user.png';
import doctor from '../../assets/doctor1.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import  Signup from './Signup.js';

function Firstscreen() {
    const navigate = useNavigate();

    const handleCreateAccount = () => {
      // Navigate to the desired route, e.g., '/dashboard'
      navigate("/Signup");
    };




    return (
        <div>
            <div className={styles.logo}>AI Dermatologist</div>
            <div className={styles.container}>
                <h1>Join as a User or Doctor</h1>
                <div className={styles.selectionbox}>
                    <div className={styles.selectionCard}>
                        <img className={styles.icon} src={user} />
                        <h2>I'm a user looking for a doctor</h2>
                    </div>
                    <div className={styles.selectionCard}>
                        <img className={styles.icon} src={doctor} />
                        <h2>I'm a doctor looking for a patient</h2>
                    </div>
                </div>

             
                <button  onClick={handleCreateAccount}>Create Account</button>
                <Link to="/Login" className={styles.mylink}>
                    <span >Already have an account? </span>
                    <span >Log In</span>
                </Link>

                
            </div>
        </div>
    )
}

export default Firstscreen; 