import React from "react";
import Navabar from "./Components/Navbar/Navabar";
import { Route, Routes } from "react-router-dom";
import Home from './Routes/Home'
import About from './Routes/About'
import Services from './Routes/Services'
import Work from './Routes/Work'
import Blog from './Routes/Blog'
import Contact from './Routes/Contact'
import Footer from "./Components/Footer/Footer";




const App = () => {
  return (
    <div>
      <Navabar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/work" element={<Work />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
