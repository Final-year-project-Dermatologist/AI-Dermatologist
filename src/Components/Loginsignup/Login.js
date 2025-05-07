import styles from './LoginPassword.module.css';
import React from 'react';
import imageurl from '../../assets/login.png';
import googleurl from '../../assets/google.png';
import {Routes, Route, Link, Router} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
   
    navigate('/Home'); // navigate to home page
  };



  return (
    <div className={styles.container}>
      <div className={styles.lefthalf}>
        <img className={styles.image} src={imageurl} />
      </div>
      <div className={styles.righthalf}>
        <h1 className={styles.loginheading}>Login</h1>
        <form  className={styles.form}>

          <div className={styles.emaildiv}>
            <label className={styles.subheadings}>email</label> <br></br>
            <input type='text' className={styles.inputfields} />

          </div>
          <div className={styles.passworddiv}>
            <label className={styles.subheadings}>Password</label> <br></br>
            <input type='password' className={styles.inputfields} /><br></br>

            <a className={styles.forgotpassword} href="/Password" target='_self'>
              forgot password?
            </a>
          </div>
          <button className={styles.btn} onClick={handleLogin}>login</button>
          <Link  to="/Signup" className={styles.signup}>Don't have an account? Sign up</Link>
          
           <label className={styles.or}>OR</label>
           <button className={styles.continubtn}>
            <img className={styles.google}  src={googleurl}/>
            Continue with google</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
