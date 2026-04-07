import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from './landing_page/home/HomePage';
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import ProductPage from './landing_page/products/ProductPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
