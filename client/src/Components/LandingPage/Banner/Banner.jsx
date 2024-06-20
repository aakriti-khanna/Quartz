// import React from 'react';
// import './Banner.css';

// const Banner = () => {
//   return (
//     <section className="section__container banner__container">
//       <div className="banner__content">
//         <div className="banner__card">
//           <h4>25+</h4>
//           <p>Properties Available</p>
//         </div>
//         <div className="banner__card">
//           <h4>350+</h4>
//           <p>Bookings Completed</p>
//         </div>
//         <div className="banner__card">
//           <h4>600+</h4>
//           <p>Happy Customers</p>
//         </div>
//         <div className="banner__card">
//           <h4>50+</h4>
//           <p>Awards Won</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Banner.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Banner = () => {
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
    <motion.section
      ref={ref}
      className="section__container banner__container"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div className="banner__content" variants={containerVariants}>
        <motion.div className="banner__card" variants={itemVariants}>
          <h4>1000+</h4>
          <p>Work Completed</p>
        </motion.div>
        <motion.div className="banner__card" variants={itemVariants}>
          <h4>800+</h4>
          <p>Client Satisfaction</p>
        </motion.div>
        <motion.div className="banner__card" variants={itemVariants}>
          <h4>600+</h4>
          <p>Happy Customers</p>
        </motion.div>
        <motion.div className="banner__card" variants={itemVariants}>
          <h4>10+</h4>
          <p>Awards Won</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Banner;
