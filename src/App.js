import logo from './logo.svg';
import Login from './Components/Loginsignup/Login';
import { Password, ResetPassword } from './Components/Loginsignup/Password';
import { Routes, Route, Link, Router } from 'react-router-dom';
import Footer from './Components/Homepage/Footer';
import Home from './Components/Homepage/Home';
import Firstscreen from './Components/Loginsignup/Firstscreen';
import  Signup from './Components/Loginsignup/Signup';
import Upload from './Components/Uploadphoto/Upload';
import Listing from './Components/Dermatologistlisting/Listing';
import Profile from './Components/Dermatologistprofile/Profile';
import Bookappointment from './Components/BookAppointment/Bookappointment';
import Profilecreation from './Components/DoctorProfilecreation/Profilecreation';
import Chat from './Components/Chat/Chat';



function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Firstscreen/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
       <Route  path='/Password'  element={<Password />} />
       <Route  path='/ResetPassword'  element={<ResetPassword />} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Upload' element={<Upload/>}/>
        <Route path='/Listing' element={<Listing/>}/>
      </Routes>



    </div>

  );
}

export default App;



