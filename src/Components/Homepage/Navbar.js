import { Routes, Route, Link, Router } from 'react-router-dom';


import styles from './Navbar.module.css';
function Navbar() {

    return (
        <div className={styles.Navcontainer}>
         <div className={styles.logo}>AI Dermatologist</div>
            <Link to='/About us' className={styles.navlink}>About us</Link>
            <Link to='/Upload Image'  className={styles.navlink} >Upload Image</Link>
            <Link to='/About us'  className={styles.navlink}>Find Doctors</Link>
            <Link to='/FAQ'  className={styles.navlink}>FAQ</Link>

        </div>
    )

}

export default Navbar;