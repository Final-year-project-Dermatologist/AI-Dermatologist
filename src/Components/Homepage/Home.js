import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Servicessection from "./Servicessection";
import Homepart3 from "./Homepart3";
import Footer from "./Footer";
import {useState, useEffect} from 'react';
import { supabase } from "../../supabase";


function Home({user}) {
    // const [user, setUser] = useState(null);
    // useEffect(() => {
    //     const getProfile = async (userId) => {
    //       const { data, error } = await supabase
    //         .from("users")
    //         .select("*")
    //         .eq("id", userId) // assuming 'id' in users matches auth id
    //         .single();
      
    //       if (error) {
    //         console.error("Error fetching user profile:", error);
    //       } else {
    //         setUser(data);
    //         console.log("Fetched user profile:", data); 
           
    //       }
    //     };
      
    //     supabase.auth.getSession().then(({ data }) => {
    //       const sessionUser = data.session?.user;
    //       if (sessionUser) getProfile(sessionUser.id);
    //     });
      
    //     const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
    //       const sessionUser = session?.user;
    //       if (sessionUser) getProfile(sessionUser.id);
    //       else setUser(null); // user logged out
    //     });
      
      //   return () => {
      //     listener?.subscription.unsubscribe();
      //   };
      // }, []);
      
  
     

    return (
        <div>
            <Navbar  user={user} />
            <Herosection />
            <Servicessection />
            <Homepart3 />
            <Footer />
        </div>
    )
}

export default Home;