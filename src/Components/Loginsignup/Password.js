import { Link } from "react-router-dom";
import styles from './LoginPassword.module.css';


function Password() {
  return (
    <div className={styles.passwordwrapper}>
      <div className={styles.passwordcontainer} >
        <h1 className={styles.passheading1}>Reset your Password</h1>
        <h3 className={styles.passheading2}>Enter the email address</h3>
        <form>
          <input className={styles.passinputs} type="email" placeholder="Email Address" /><br></br>
          <Link to='/ResetPassword'> 
            {/* <input type="submit" value="Next" className='nextbtn'></input> */}
            <button  className={styles.nextbtn}>next</button>
          </Link>
        </form>
      </div>
    </div>
  )
}





function ResetPassword() {
  return (
    <div className={styles.passwordwrapper}>
      <div className={styles.passwordcontainer} >
        <h1 className={styles.passheading1}>Enter your new password</h1>
        <h3 className={styles.passheading2}>Your new password must be different to previous passwords</h3>
        <form>
          <input className={styles.passinputs} type="password" placeholder="Enter new password" /><br></br><br></br>
          <input className={styles.passinputs} type="password" placeholder="Confirm new password" /><br></br>
         
            <input type="submit" value="reset password" className={styles.Resetpassword}></input>
       
        </form>
      </div>
    </div>
  )
}


export {Password,ResetPassword} 
