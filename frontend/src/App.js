import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import Dashboard from './components/Dashboard.js';
import Footer from './components/Footer.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Contact from './components/Contact.js';

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>        
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
