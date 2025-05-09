import styles from './LoginPassword.module.css';
import React,{useState} from 'react';
import imageurl from '../../assets/login.png';
import googleurl from '../../assets/google.png';
import {Routes, Route, Link, Router} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';

function Login() {

  const navigate = useNavigate();



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent default form submit
    setErrorMsg(''); // reset error

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Sign-in error:", error.message);
      setErrorMsg(error.message);
    } else {
      console.log("Login successful:", data);
      navigate('/Home'); // navigate to home on success
    }
  };

  
  return (
    <div className={styles.container}>
      <div className={styles.lefthalf}>
        <img className={styles.image} src={imageurl} />
      </div>
      <div className={styles.righthalf}>
        <h1 className={styles.loginheading}>Login</h1>
        <form  className={styles.form} onSubmit={handleLogin}>

          <div className={styles.emaildiv}>
            <label className={styles.subheadings}>email</label> <br></br>
            <input type='text' className={styles.inputfields} value={email}
              onChange={(e) => setEmail(e.target.value)}/>

          </div>
          <div className={styles.passworddiv}>
            <label className={styles.subheadings}>Password</label> <br></br>
            <input type='password' className={styles.inputfields} value={password}
              onChange={(e) => setPassword(e.target.value)}/><br></br>

            <a className={styles.forgotpassword} href="/Password" target='_self'>
              forgot password?
            </a>
          </div>

          {errorMsg && <p className={styles.error}>{errorMsg}</p>}
          <button className={styles.btn} type='submit'>login</button>
          
          
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


