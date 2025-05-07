import styles from './Signup.module.css';
import React, { useState } from 'react';
import imageurl from '../../assets/signup.png';
import googleurl from '../../assets/google.png';
import {Routes, Route, Link, Router} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../supabase';



function Signup() {
    const navigate = useNavigate();
    const location = useLocation();
    const role = location.state?.role;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //                          Handle sign up function

    const handleSignup = async (e) => {
        e.preventDefault();

        //  password shold be of 8 characters with 1 cpital 1 digit and one special charcter

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if (!passwordRegex.test(password)) {
           alert("Password must be at least 8 characters long and include one uppercase letter, one digit, and one special character.");
           return;
        }


        //if role not selected

        if (!role) {
            alert("Role not selected.");
            return;
        }

        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password
        });

        if (authError) {
            alert(authError.message);
            return;
        }

        const userId = authData.user.id;

        const { error: dbError } = await supabase.from('users').insert([{
            id: userId,
            name,
            email,
            role
        }]);

        if (dbError) {
            alert("Signup successful, but failed to save profile.");
        } else {
            alert("Signup successful!");
        }

        navigate('/Login');
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

                {/* Form  */}
                <form className={styles.form} onSubmit={handleSignup}>

                <div className={styles.emaildiv}>
                        <label className={styles.subheadings}>Name</label> <br></br>
                        <input type='text' className={styles.inputfields} value={name} onChange={e => setName(e.target.value)}/>

                    </div>
                    <div className={styles.emaildiv}>
                        <label className={styles.subheadings}>email</label> <br></br>
                        <input type='text' className={styles.inputfields} value={email} onChange={e => setEmail(e.target.value)} />

                    </div>
                    <div className={styles.emaildiv}>
                        <label className={styles.subheadings}>Password</label> <br></br>
                        <input type='password' className={styles.inputfields} value={password} onChange={e => setPassword(e.target.value)} /><br></br>

                        
                    </div>
                    <button className={styles.btn}  onClick={handleSignup}>SIGN UP</button>
                    <Link to="/Login" className={styles.signup} >Already have account? <span>Login</span></Link>

                    
                </form>
            </div>
        </div>
    )
}

export default Signup;