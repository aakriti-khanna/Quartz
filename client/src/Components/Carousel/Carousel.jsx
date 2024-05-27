import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import asset15 from "../../assets/gallery13.jpg";
import asset14 from "../../assets/gallery1.jpg";
import asset13 from "../../assets/gallery14.jpg";
import asset12 from "../../assets/gallery6.jpg";
import asset11 from "../../assets/Silica.jpg";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: asset12, alt: "3" },
    { src: asset15, alt: "1" },
    { src: asset14, alt: "2" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup function to clear the interval on component unmount
  }, [currentIndex]); // Run effect whenever currentIndex changes

  return (
    <div className="carousel-container relative w-full">
      <div
        className="carousel-main-image absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
   <div className="landing-carousel">
      <div className="landing-carousel-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="landing-carousel-heading"
        >
          Welcome to Silica Floor Industries
        </motion.h1>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="landing-carousel-subheading"
        >
          Discover the beauty and quality of our products.
        </motion.p>
      </div>
    </div>
      <div className="carousel-thumbnail absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Slide ${index + 1}`}
            className={`w-20 h-auto sm:w-24 sm:h-auto md:w-28 md:h-auto lg:w-32 lg:h-auto xl:w-36 xl:h-auto object-cover rounded-lg cursor-pointer ${
              index === currentIndex ? "border-4 border-blue-500" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 flex justify-between w-full px-4">
        <button
          className="carousel-prev text-3xl text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <button
          className="carousel-next text-3xl text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
