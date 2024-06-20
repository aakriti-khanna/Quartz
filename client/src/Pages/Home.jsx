import React from "react";

import Nav from "../Components/Nav";
import  Footer  from "../Components/Footer/footer.jsx";

import Carousel from "../Components/Carousel/Carousel";
import Labout from "../Components/LandingPage/Labout/Labout";
import { motion, useScroll } from "framer-motion";
import Rooms from "../Components/LandingPage/Product/Product";
import Services from "../Components/LandingPage/Services/Service.jsx";
import Banner from "../Components/LandingPage/Banner/Banner.jsx";
import FAQ from "../Components/LandingPage/FAQ/FAQ.jsx";
// import { useInView } from "react-intersection-observer";

const Home = () => {



  return (
    
    // <div>Home</div>
    <>
   
    <div className="Home overflow-hidden ">

      <div className="Carousel-About">
        <Carousel />
      </div>

      <div className="About">
        <Labout />
      </div>

      {/*  */}
      <div className="Rooms">
        <Rooms />
      </div>

      <div className="service">
        <Services />
      </div>
      <div className="Banner">
        <Banner />
      </div>

      <div className="FAQ">
        <FAQ />
      </div>


      <div className="map">
        <motion.div
          className="map"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.423766780158!2d73.20021277210073!3d22.33762249661043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf2296e2134d%3A0xeee6cdcb2b3ea73b!2s1%2C%20Sama-Savli%20Rd%2C%20BSNL%20Colony%2C%20Karelibagh%2C%20Vadodara%2C%20Gujarat%20390002!5e0!3m2!1sen!2sin!4v1716277964087!5m2!1sen!2sin"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </motion.div>
      </div>

    </div>
    </>
  );
};

export default Home;
