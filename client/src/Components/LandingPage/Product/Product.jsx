// import React from 'react';
// import { motion } from 'framer-motion';
// import './Product.css';
// import SisandImage from "../../../assets/Sisand.jpg";

// const containerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       staggerChildren: 0.2
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// };

// const Rooms = () => (
//   <motion.section
//     className="section__container room__container"
//     initial="hidden"
//     animate="visible"
//     variants={containerVariants}
//   >
//     <motion.p className="section__subheader" variants={itemVariants}>
//       OUR LIVING ROOM
//     </motion.p>
//     <motion.h2 className="section__header" variants={itemVariants}>
//       The Most Memorable Rest Time Starts Here.
//     </motion.h2>
//     <div className="room__grid">
//       <motion.div className="room__card" variants={itemVariants}>
//         <div className="room__card__image">
//           <img src={SisandImage} alt="room" />
//           <div className="room__card__icons">
//             <span><i className="ri-heart-fill"></i></span>
//             <span><i className="ri-paint-fill"></i></span>
//             <span><i className="ri-shield-star-line"></i></span>
//           </div>
//         </div>
//         <div className="room__card__details">
//           <h4>Deluxe Ocean View</h4>
//           <p>Bask in luxury with breathtaking ocean views from your private suite.</p>
//           <h5>Starting from <span>$299/night</span></h5>
//           <button className="btn">Book Now</button>
//         </div>
//       </motion.div>
//       <motion.div className="room__card" variants={itemVariants}>
//         <div className="room__card__image">
//           <img src={SisandImage} alt="room" />
//           <div className="room__card__icons">
//             <span><i className="ri-heart-fill"></i></span>
//             <span><i className="ri-paint-fill"></i></span>
//             <span><i className="ri-shield-star-line"></i></span>
//           </div>
//         </div>
//         <div className="room__card__details">
//           <h4>Executive Cityscape Room</h4>
//           <p>Experience urban elegance and modern comfort in the heart of the city.</p>
//           <h5>Starting from <span>$199/night</span></h5>
//           <button className="btn">Book Now</button>
//         </div>
//       </motion.div>
//       <motion.div className="room__card" variants={itemVariants}>
//         <div className="room__card__image">
//           <img src={SisandImage} alt="room" />
//           <div className="room__card__icons">
//             <span><i className="ri-heart-fill"></i></span>
//             <span><i className="ri-paint-fill"></i></span>
//             <span><i className="ri-shield-star-line"></i></span>
//           </div>
//         </div>
//         <div className="room__card__details">
//           <h4>Family Garden Retreat</h4>
//           <p>Spacious and inviting, perfect for creating cherished memories with loved ones.</p>
//           <h5>Starting from <span>$249/night</span></h5>
//           <button className="btn">Book Now</button>
//         </div>
//       </motion.div>
//     </div>
//   </motion.section>
// );

// export default Rooms;


import React from 'react';
import { motion } from 'framer-motion';
import './Product.css';
import Sil from "../../../assets/Sil.jpg";
import Silica from "../../../assets/Silica.jpg"
import Q1 from "../../../assets/Q1.jpg"
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

const Rooms = () => (
  <motion.section
    className="section__container room__container"
    initial="hidden"     
    animate="visible"
    variants={containerVariants}
  >
    <motion.p className="section__subheader" variants={itemVariants}>
      OUR PRODUCT
    </motion.p>
    <motion.h2 className="section__header" variants={itemVariants}>
      The Most Memorable Rest Time Starts Here.
    </motion.h2>
    <motion.div className="room__grid" variants={containerVariants}>
      <motion.div className="room__card" variants={itemVariants}>
        <div className="room__card__image">
          <img src={Sil} alt="room" />
          <div className="room__card__icons">
            <span><i className="ri-heart-fill"></i></span>
            <span><i className="ri-paint-fill"></i></span>
            <span><i className="ri-shield-star-line"></i></span>
          </div>
        </div>
        <div className="room__card__details">
          <h4>Deluxe Ocean View</h4>
          <p>Bask in luxury with breathtaking ocean views from your private suite.</p>
          <h5>Starting from <span>$299/night</span></h5>
          <button className="btn">Book Now</button>
        </div>
      </motion.div>
      <motion.div className="room__card" variants={itemVariants}>
        <div className="room__card__image">
          <img src={Silica} alt="room" />
          <div className="room__card__icons">
            <span><i className="ri-heart-fill"></i></span>
            <span><i className="ri-paint-fill"></i></span>
            <span><i className="ri-shield-star-line"></i></span>
          </div>
        </div>
        <div className="room__card__details">
          <h4>Executive Cityscape Room</h4>
          <p>Experience urban elegance and modern comfort in the heart of the city.</p>
          <h5>Starting from <span>$199/night</span></h5>
          <button className="btn">Book Now</button>
        </div>
      </motion.div>
      <motion.div className="room__card" variants={itemVariants}>
        <div className="room__card__image">
          <img src={Q1} alt="room" />
          <div className="room__card__icons">
            <span><i className="ri-heart-fill"></i></span>
            <span><i className="ri-paint-fill"></i></span>
            <span><i className="ri-shield-star-line"></i></span>
          </div>
        </div>
        <div className="room__card__details">
          <h4>Family Garden Retreat</h4>
          <p>Spacious and inviting, perfect for creating cherished memories with loved ones.</p>
          <h5>Starting from <span>$249/night</span></h5>
          <button className="btn">Book Now</button>
        </div>
      </motion.div>
    </motion.div>
  </motion.section>
);

export default Rooms;
