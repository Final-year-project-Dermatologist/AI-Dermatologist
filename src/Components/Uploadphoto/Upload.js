import styles from './Upload.module.css';
import { Link } from 'react-router-dom';
import Navbar from '../Homepage/Navbar';
import Footer from '../Homepage/Footer';
import upload from '../../assets/attach-file.png';


function Upload() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1>Let's start!</h1>
                <p>Add photo to make scan. You can upload photo from the device.</p>
                <button>
                    <img src={upload} className={styles.uploadimg} />
                    Upload Photo
                </button>
            </div>
            <Footer />
        </div>
    )
}

export default Upload;