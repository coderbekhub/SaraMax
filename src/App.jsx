import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
// import Services from './pages/Services.jsx';
import Contacts from './pages/Contacts.jsx';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
