// // import React from 'react';
// // import './Service.css';

// // const Services = () => {
// //   return (
// //     <section className="service" id="service">
// //       <div className="section__container service__container">
// //         <div className="service__content">
// //           <p className="section__subheader">SERVICES</p>
// //           <h2 className="section__header">Strive Only For The Best.</h2>
// //           <ul className="service__list">
// //             <li>
// //               <span><i className="ri-shield-star-line"></i></span>
// //               High Class Security
// //             </li>
// //             <li>
// //               <span><i className="ri-24-hours-line"></i></span>
// //               24 Hours Room Service
// //             </li>
// //             <li>
// //               <span><i className="ri-headphone-line"></i></span>
// //               Conference Room
// //             </li>
// //             <li>
// //               <span><i className="ri-map-2-line"></i></span>
// //               Tourist Guide Support
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Services;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { RiShieldStarLine, Ri24HoursLine, RiHeadphoneLine, RiMap2Line } from 'react-icons/ri';
// import './Service.css';
// import "../../../assets/gallery4.jpg"

// const serviceList = [
//   { icon: <RiShieldStarLine />, text: 'High Class Security' },
//   { icon: <Ri24HoursLine />, text: '24 Hours Room Service' },
//   { icon: <RiHeadphoneLine />, text: 'Conference Room' },
//   { icon: <RiMap2Line />, text: 'Tourist Guide Support' },
// ];

// const Services = () => {
//   return (
//     <section className="service" id="service">
       

//       <div className="section__container imgContainer service__container">
//         <div className="service__content">
//           <p className="section__subheader">SERVICES</p>
//           <h2 className="section__header">Strive Only For The Best.</h2>
//           <ul className="service__list">
//             {serviceList.map((service, index) => (
//               <motion.li
//                 key={index}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.3 }}
//               >
//                 <span>{service.icon}</span>
//                 {service.text}
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RiShieldStarLine, Ri24HoursLine, RiHeadphoneLine, RiMap2Line } from 'react-icons/ri';
import './Service.css';

const serviceList = [
  { icon: <RiShieldStarLine />, text: 'Mining and Processing' },
  { icon: <Ri24HoursLine />, text: 'Production and Transportation' },
  { icon: <RiHeadphoneLine />, text: "Technical Support" },
  { icon: <RiMap2Line />, text: "Quality Assurance" },
];

const Services = () => {
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
    <section className="service" id="service" ref={ref}>
      <div className="section__container imgContainer service__container">
        <motion.div className="service__content" initial="hidden" animate={controls}>
          <p className="section__subheader">SERVICES</p>
          <h2 className="section__header">Strive Only For The Best.</h2>
          <ul className="service__list">
            {serviceList.map((service, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.3 } },
                }}
              >
                <span>{service.icon}</span>
                {service.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

