import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Servicessection from "./Servicessection";
import Homepart3 from "./Homepart3";
import Footer from "./Footer";



function Home() {
    return (
        <div>
            <Navbar />
            <Herosection />
            <Servicessection />
            <Homepart3 />
            <Footer />
        </div>
    )
}

export default Home;