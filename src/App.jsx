import './App.css';
import Blog from './Component/Blog/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarNav from './Component/Navbar/NavbarNav';
import Home from './Component/HomePage/Home';
import Gallery from './Component/Gallery/Gallery';
import Footer from './Component/Footer/Footer';
import { ContactUs} from './Component/Contact/contactUs';
import Team from './Component/OurTeam/Team';
import DaArtical from './Component/Blog/Artical/Atical';
import MemberDetais from './Component/OurTeam/MembarData/MemberDetais';


function App() {
  return (
    <>    
    <Router>   
    <NavbarNav/>       
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/our-Team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/blog/:title' element={<DaArtical/>}/>
        <Route path='team/:id/:title' element={<MemberDetais/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
   
  );
}

export default App;
