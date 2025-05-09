import styles from './Signup.module.css';
import React, { useState } from 'react';
import imageurl from '../../assets/signup.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../supabase';
import Modal from './Model'; 

function Signup() {
    const navigate = useNavigate();
    const location = useLocation();
    const role = location.state?.role;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false); 

    const handleSignup = async (e) => {
        e.preventDefault();

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long and include one uppercase letter, one digit, and one special character.");
            return;
        }

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

        const userId = authData?.user?.id;

        if (userId) {
            const { error: dbError } = await supabase.from('users').insert([{
                id: userId,
                name,
                email,
                role
            }]);

            if (dbError) {
                alert("Signup successful, but failed to save profile.");
            }
        }

        setShowPopup(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.lefthalf}>
                <h1>Welcome To AI Dermaotlogist</h1>
                <p>Early skin diagnosis with AI-powered precision</p>
                <img className={styles.image} src={imageurl} alt="signup" />
            </div>

            <div className={styles.righthalf}>
                <h1 className={styles.loginheading}>Sign Up</h1>
                <form className={styles.form} onSubmit={handleSignup}>
                    <div className={styles.emaildiv}>
                        <label className={styles.subheadings}>Name</label><br />
                        <input type='text' className={styles.inputfields} value={name} onChange={e => setName(e.target.value)} required />
                    </div>

                    <div className={styles.emaildiv}>
                        <label className={styles.subheadings}>Email</label><br />
                        <input type='email' className={styles.inputfields} value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>

                    <div className={styles.emaildiv}>
                        <label className={styles.subheadings}>Password</label><br />
                        <input type='password' className={styles.inputfields} value={password} onChange={e => setPassword(e.target.value)} required />
                    </div>

                    <button className={styles.btn} type="submit">SIGN UP</button>
                    <Link to="/Login" className={styles.signup}>Already have an account? <span>Login</span></Link>
                </form>
            </div>

            {showPopup && (
                <Modal
                    title="Confirm Your Email"
                    message={`We've sent a confirmation link to ${email}. Please check your inbox.`}
                    onClose={() => {
                        setShowPopup(false);
                        navigate('/Login');
                    }}
                />
            )}
        </div>
    );
}

export default Signup;
