import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Labout.css';
import aboutImage from '../../../assets/Silica.jpg';
import { Link } from 'react-router-dom';
const Labout = () => {
  const controlsImage = useAnimation();
  const controlsContent = useAnimation();
  const { ref: refImage, inView: inViewImage } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refContent, inView: inViewContent } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inViewImage) {
      controlsImage.start('visible');
    }
    if (inViewContent) {
      controlsContent.start('visible');
    }
  }, [controlsImage, controlsContent, inViewImage, inViewContent]);

  return (
    <div className="section__container about__container" id="about">
      <motion.div className="about__image" ref={refImage} initial="hidden" animate={controlsImage}>
        <img src={aboutImage} alt="about" />
      </motion.div>
      <motion.div className="about__content" ref={refContent} initial="hidden" animate={controlsContent}>
        <p className="section__subheader">ABOUT US</p>
        <h2 className="section__header">Delivering quality and reliability for all your industrial needs.</h2>
        <p className="section__description">
          {/* Add your description content here */}
        </p>
        <div className="about__btn">
          <Link to="/Mining" className="tag">Read More</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Labout;
