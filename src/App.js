import React from "react";
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ListCarrier from "./pages/ListCarrier";
import AddCarrier from "./pages/AddCarrier";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/list-carrier" element={<ListCarrier />} />
        <Route path="/add-carrier" element={<AddCarrier />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
