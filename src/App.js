import Navbar from './components/Navbar'
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Descrption from './pages/Description'
import Allproperty from './pages/Allproperty';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  const location = useLocation(); // Retrieve location data
  const  id  = location.state || {}; 

  return (
    <>
    <Navbar />
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/description" element={<Descrption _id={id} />} />
        <Route path="/property" element={<Allproperty />} />

      
      

 
    </Routes>
    <Footer  />
    </>
  );
}

export default App;
