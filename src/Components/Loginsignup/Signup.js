import styles from './Signup.module.css';
import React from 'react';
import imageurl from '../../assets/signup.png';
import googleurl from '../../assets/google.png';
import {Routes, Route, Link, Router} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Signup() {
    const navigate = useNavigate();

    const handleSignup = () => {
     
      navigate('/Login'); // navigate to login page
    };

    

    return (
        <div className={styles.container}>

            <div className={styles.lefthalf}>
                <h1>Welcome To AI Dermaotlogist</h1>
                <p>Early skin diagnosis with AI-powered precision</p>
                <img className={styles.image} src={imageurl} />
            </div>
            <div className={styles.righthalf}>
                <h1 className={styles.loginheading}>Sign Up</h1>
                <form className={styles.form}>

                <div className={styles.emaildiv}>
                        <label className={styles.subheadings}>Name</label> <br></br>
                        <input type='text' className={styles.inputfields} />

                    </div>
                    <div className={styles.emaildiv}>
                        <label className={styles.subheadings}>email</label> <br></br>
                        <input type='text' className={styles.inputfields} />

                    </div>
                    <div className={styles.emaildiv}>
                        <label className={styles.subheadings}>Password</label> <br></br>
                        <input type='password' className={styles.inputfields} /><br></br>

                        
                    </div>
                    <button className={styles.btn}  onClick={handleSignup}>SIGN UP</button>
                    <Link to="/Login" className={styles.signup} >Already have account? <span>Login</span></Link>

                    
                </form>
            </div>
        </div>
    )
}

export default Signup;