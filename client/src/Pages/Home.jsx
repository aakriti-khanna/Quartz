import React from "react";

import Nav from "../Components/Nav";
// import { Footer } from 'flowbite-react'

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
    // <Nav />
    // <div>Home</div>
    <>
   
    <div className="Home">
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
    </div>
    </>
  );
};

export default Home;
