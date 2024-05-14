import React from "react";
import Hero from '../../components/hero/Hero';
import Feature from "../../components/feature/Feature";
import AboutUs from '../../components/aboutUs/AboutUs';
import Professional from "../../components/professional/Professional";
import OurService from '../../components/OurServices/OurServices';
import Testimonial from "../../components/testimonial/Testimonial";
import ContactUs from "../../components/contactUs/ContactUs";

const Home = () => {
  return (
    <>
    <Hero />
    <Feature />
    <AboutUs />
    <Professional />
    <OurService />
    <Testimonial />
    <ContactUs />
    </>
  );
};

export default Home;