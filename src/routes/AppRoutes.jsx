import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import HeroSectionPage from '../pages/HeroSectionPage';
import AboutPage from '../pages/AboutPage';
import ServicePage from '../pages/ServicePage';
import Footer from '../components/Footer';
import WorksPage from '../pages/WorksPage';
import ContactPage from '../pages/ContactPage';
const AppRoutes = () => {
    return (
        // <BrowserRouter>
        //     <NavBar />
        //     <Routes>
        //         <Route path="/" element={<HeroSectionPage/>} />
        //         <Route path="/about" element={<AboutPage />} />
        //         <Route path="/services" element={<ServicePage/>} />
        //         <Route path="/work" element={<WorksPage />} />
        //         <Route path="/contact" element={<ContactPage />} />
        //     </Routes>
        //     <Footer />
        // </BrowserRouter>

        <BrowserRouter>
            <NavBar/>
            <div id="hero"><HeroSectionPage /></div>
            <div id="about"><AboutPage /></div>
            <div id="services"><ServicePage /></div>
            <div id="works"><WorksPage /></div>
            <div id="contact"><ContactPage /></div>

            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes