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
import Profilecreation from './Components/DoctorProfilecreation/CreateProfile';
import Chat from './Components/Chat/Chat';
import Admin from './Components/Admin/Admin';
import NewRequest from './Components/Admin/NewRequest';
import ApprovedRequest from './Components/Admin/ApprovedRequest';
import Details from './Components/Admin/Details';





function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>} />
       <Route path='/Details' element={<Details/>} />
      <Route path='/Admin' element={ <Admin /> } />  {/* admin page should be acceible only after login*/}
       <Route path='/NewRequest' element={ <NewRequest /> } />
       <Route path='/ApprovedRequest' element={ <ApprovedRequest /> } />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
       <Route  path='/Password'  element={<Password />} />
       <Route  path='/ResetPassword'  element={<ResetPassword />} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Upload' element={<Upload/>}/>
        <Route path='/Listing' element={<Listing/>}/>
       
        <Route path='/create-profile' element={<Profilecreation/>}/>
        <Route path='/profile' element={<Profile/>}/>
       

      </Routes>



    </div>

  );
}

export default App;



