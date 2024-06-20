

// import React, { useEffect, useRef } from 'react';
// import './Labout.css';
// import { motion } from 'framer-motion'; // Import motion from framer-motion
// import aboutImage from '../../../assets/Silica.jpg';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.5 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const Labout = () => {
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           sectionRef.current.classList.add('animate');
//         }
//       },
//       {
//         threshold: 0.5,
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <motion.div
//       className="section__container about__container"
//       id="about"
//       ref={sectionRef}
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.div
//         className="about__image"
//         ref={imageRef}
//         variants={itemVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <img src={aboutImage} alt="about" />
//       </motion.div>
//       <motion.div
//         className="about__content"
//         ref={contentRef}
//         variants={itemVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <p className="section__subheader">ABOUT US</p>
//         <h2 className="section__header">The Best Holidays Start Here!</h2>
//         <p className="section__description">
//           With a focus on quality accommodations, personalized experiences, and
//           seamless booking, our platform is dedicated to ensuring that every
//           traveler embarks on their dream holiday with confidence and
//           excitement.
//         </p>
//         <div className="about__btn">
//           <button className="btn">Read More</button>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Labout;



import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Labout.css';
import aboutImage from '../../../assets/Silica.jpg';

const Labout = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="section__container about__container" id="about" ref={ref}>
      <motion.div className="about__image" ref={ref} initial="hidden" animate={controls}>
        <img src={aboutImage} alt="about" />
      </motion.div>
      <motion.div className="about__content" ref={ref} initial="hidden" animate={controls}>
        <p className="section__subheader">ABOUT US</p>
        <h2 className="section__header">Delivering quality and reliability for all your industrial needs.</h2>
        <p className="section__description">
       
        </p>
        <a href='./About'><div className="about__btn">
        <button className="btn">Read More</button>
        </div>
        </a>
      </motion.div>
    </div>
  );
};

export default Labout;

