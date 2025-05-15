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
import Profilecreation from './Components/DoctorProfilecreation/ProfileDraft';
import Chat from './Components/Chat/Chat';
import ProfileDraft from './Components/DoctorProfilecreation/ProfileDraft';
import { useEffect,useState } from 'react';
import { supabase } from './supabase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getProfile = async (userId) => {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error);
      } else {
        setUser(data);
      }
    };

    supabase.auth.getSession().then(({ data }) => {
      const sessionUser = data.session?.user;
      if (sessionUser) getProfile(sessionUser.id);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const sessionUser = session?.user;
      if (sessionUser) getProfile(sessionUser.id);
      else setUser(null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [])

  return (
    <div>
      <Routes>
      <Route path='/' element={<Home user={user}/>} />
        <Route  path='/Login' element={<Login />} />
        <Route  path='/Signup' element={<Signup />} />
        <Route  path='/ProfileDraft' element={<ProfileDraft user={user}/>} />
        <Route  path='/Password'  element={<Password />} />
        <Route  path='/ResetPassword'  element={<ResetPassword />} />
        <Route  path='/Firstscreen' element={<Firstscreen/>}/>
        <Route  path='/Upload' element={<Upload/>}/>
        <Route  path='/Listing' element={<Listing/>}/>
        <Route  path='/create-profile' element={<Profilecreation/>}/>
        <Route  path='/profile' element={<Profile/>}/>
      </Routes>


    </div>

  );
}

export default App;



