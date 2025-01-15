import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes