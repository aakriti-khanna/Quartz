

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/Q1.jpg';
import image2 from '../../assets/quartz21.jpeg';
import image3 from '../../assets/quartz22.jpeg';
import image4 from '../../assets/Quart2.jpeg';
import image5 from '../../assets/quartz23.jpeg';
import image6 from '../../assets/quartz24.jpeg';
import image7 from '../../assets/quartz25.jpeg';
import image8 from '../../assets/Q2.jpg';
import "./QuartzCarousel.css"; // Import the CSS file
    
const PostCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "5px",
  };

  const data = [
    { id: 1, name: 'Quartz', image: image1 },
    { id: 2, name: 'Quartz', image: image2 },
    { id: 3, name: ' Quartz', image: image3 },
    { id: 4, name: 'Quartz', image: image4 },
    { id: 5, name: 'Quartz', image: image5 },
    { id: 6, name: 'Quartz', image: image6 },
    { id: 7, name: 'Quartz', image: image7 },
    { id: 8, name: 'Quartz', image: image8 },
  ];

  return (
    <div className="slider-container w-full border p-4">
      <Slider {...settings}>
        {data.map((listing) => (
          <div key={listing.id} className="slider-item">
            <div className="card-container">
              <img
                src={listing.image}
                alt={listing.name}
                className="card-image"
              />
              <div className="content">
                <h2 className="card-title">{listing.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PostCarousel;
