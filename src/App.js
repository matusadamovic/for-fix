import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// test
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import WantToSell from './pages/WantToSell';
import PropertyDetails from './pages/PropertyDetails';
import Admin from './pages/Admin';

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        <Route path='/chcem-predat' element={<WantToSell />} />
        <Route path='/o-nas' element={<AboutUs />} />
        <Route path='/kontakt' element={<Contact />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
