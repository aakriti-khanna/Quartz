import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="section__container banner__container">
      <div className="banner__content">
        <div className="banner__card">
          <h4>25+</h4>
          <p>Properties Available</p>
        </div>
        <div className="banner__card">
          <h4>350+</h4>
          <p>Bookings Completed</p>
        </div>
        <div className="banner__card">
          <h4>600+</h4>
          <p>Happy Customers</p>
        </div>
        <div className="banner__card">
          <h4>50+</h4>
          <p>Awards Won</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
