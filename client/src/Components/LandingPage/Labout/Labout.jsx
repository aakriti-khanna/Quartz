// import React from 'react';
// import './Labout.css';
// import assets from "../../assets/gallery6.jpg"

// const Labout = () => (
//   <div className="section__container about__container" id="about">
//     <div className="about__image">
//       <img src="../../assets/gallery6.jpg" alt="about" />
//     </div>
//     <div className="about__content">
//       <p className="section__subheader">ABOUT US</p>
//       <h2 className="section__header">The Best Holidays Start Here!</h2>
//       <p className="section__description">
//         With a focus on quality accommodations, personalized experiences, and
//         seamless booking, our platform is dedicated to ensuring that every
//         traveler embarks on their dream holiday with confidence and
//         excitement.
//       </p>
//       <div className="about__btn">
//         <button className="btn">Read More</button>
//       </div>
//     </div>
//   </div>
// );

// export default Labout;



import React, { useEffect, useRef } from 'react';
import './Labout.css';
import aboutImage from '../../../assets/Silica.jpg';

const Labout = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="section__container about__container" id="about">
      <div className="about__image" ref={imageRef}>
        <img src={aboutImage} alt="about" />
      </div>
      <div className="about__content" ref={contentRef}>
        <p className="section__subheader">ABOUT US</p>
        <h2 className="section__header">The Best Holidays Start Here!</h2>
        <p className="section__description">
          With a focus on quality accommodations, personalized experiences, and
          seamless booking, our platform is dedicated to ensuring that every
          traveler embarks on their dream holiday with confidence and
          excitement.
        </p>
        <div className="about__btn">
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Labout;


// import React, { useEffect, useRef } from 'react';
// import './Labout.css';
// import aboutImage from '../../assets/gallery6.jpg';

// const Labout = () => {
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.5,
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     if (imageRef.current) {
//       observer.observe(imageRef.current);
//     }
//     if (contentRef.current) {
//       observer.observe(contentRef.current);
//     }

//     return () => {
//       if (imageRef.current) {
//         observer.unobserve(imageRef.current);
//       }
//       if (contentRef.current) {
//         observer.unobserve(contentRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="section__container about__container" id="about">
//       <div className="about__image" ref={imageRef}>
//         <img src={aboutImage} alt="about" />
//       </div>
//       <div className="about__content" ref={contentRef}>
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
//       </div>
//     </div>
//   );
// };

// export default Labout;
