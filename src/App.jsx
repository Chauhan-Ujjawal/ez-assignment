import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Services from './pages/Services';
import OurStory from './pages/OurStory';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from './pages/About';
function App() {
  return (
    
    <div className='text-red-500'>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/ourstory' element={<OurStory />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
      App
    </div>
  )
}

export default App