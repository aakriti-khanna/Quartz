// import React from "react";
// import "./Quartz.css";
// import QuartzImage from "../../../assets/CrystalQuartz.jpg";
// import QuartzCarousel from "../../../Components/QuartzCarousel/QuartzCarousel.jsx";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import image1 from '../../../assets/imag.jpg';
// import image2 from '../../../assets/Sisand.jpg';
// import image3 from '../../../assets/Silica.jpg';
// import image4 from '../../../assets/Silica4.jpeg';
// import image5 from '../../../assets/silica1.jpeg';
// import image6 from '../../../assets/silica2.jpeg';

// const Quartz = () => {
//   const handleScroll = () => {
//     const elements = document.querySelectorAll(".animate-on-scroll");
//     elements.forEach((element) => {
//       if (element.getBoundingClientRect().top < window.innerHeight) {
//         element.classList.add("animated");
//       } else {
//         element.classList.remove("animated");
//       }
//     });
//   };   

//   React.useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

  
 

//   return (
//     <div className="QuartzMain">
//       <div className="sec__container Quartz__container" id="about">
//         <div className="Quartz__image ">
//           <img src={QuartzImage} alt="Quartz" className="h-96" />
//         </div>
//         <div className="Quartz__content">
//           <p className="Quartz__subheader">Quartz</p>
//           <h2 className="Quartz__header">The Best Holidays Start Here!</h2>
//           <p className="Quartz__description leading-loose">
//             Quartz is a mineral composed of silicon and oxygen atoms in a
//             continuous framework of SiO4 silicon-oxygen tetrahedra, with each
//             oxygen being shared between two tetrahedra, giving an overall
//             chemical formula of SiO2. Quartz is a hard, crystalline mineral that
//             is commonly used in the production of glass, ceramics, electronics,
//             and many other products. It is also used as a component in the
//             manufacturing of quartz countertops, which have become increasingly
//             popular in modern homes
//           </p>
//         </div>
//       </div>
//       <div className="Quartz-products">
//         <QuartzCarousel />
//       </div>

//       <div className="chemical-specs ">
//         <h3>Chemical Formula of Quartz</h3>
//         <table className="chemical-formula-table">
//           <thead>
//             <tr>
//               <th>Element</th>
//               <th>Symbol</th>
//               <th>Atomic Number</th>
//               <th>Percentage by Weight</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Silicon</td>
//               <td>Si</td>
//               <td>14</td>
//               <td>46.74%</td>
//             </tr>
//             <tr>
//               <td>Oxygen</td>
//               <td>O</td>
//               <td>8</td>
//               <td>53.26%</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div className="applications flex px-auto mx-auto ">
        
//         <div className="img  w-1/3 ml-10">
//           {" "}
//           <img src={QuartzImage} alt="Quartz" />
//         </div>
//         <div className="pt-8 pl-24 ml-10">
//         <h3>Applications of Quartz</h3>
//           <ul className="applications-list leading-loose">
//             <li>Ceramics: Quartz is used in the manufacturing of ceramicsto improve itsstrength and durability.</li>
//             <li>Glass Manufacturing: Quartz grains are used in the manufacturing of glassto improve its transparency and durability.</li>
//             <li>Construction: Quartz stone is widely used in the construction industry for making countertops, flooring, and wall cladding.</li>
//             <li>Electronics: Quartz crystals are used in electronic devicessuch as watches, clocks, and computersto provide accurate timing.</li>
//             <li>Paints and Coatings: Quartz powderis used as a filler material in paints and coatingsto improve their durability and scratch resistance.</li>
           
//           </ul>
//         </div>
//       </div>

//  <div className="p-6 bg-Neutral-300 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold mb-4 text-indigo-900">Quartz Forms and Sizes</h2>
//       <div className="overflow-x-auto">
//         <table className="custom-table">
//           <thead>
//             <tr className="table-header">
//               <th>Form</th>
//               <th>Size</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="table-row">
//               <td>Granules</td>
//               <td>0.1 - 0.5 mm</td>
//             </tr>
//             <tr className="table-row">
//               <td>Powder</td>
//               <td>0.5 - 1 mm</td>
//             </tr>
//             <tr className="table-row">
//               <td>Lumps</td>
//               <td>1 - 5 mm</td>
//             </tr>
//             <tr className="table-row">
//               <td>Crystals</td>
//               <td>5 - 10 mm</td>
//             </tr>
//             <tr className="table-row">
//               <td>Pebbles</td>
//               <td>10 - 20 mm</td>
//             </tr>
//             <tr className="table-row">
//               <td>Sand</td>
//               <td>20 - 50 mm</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
    


//     <div className="quality-assurance-container">
//       <h2 className="title">Quality Assurance Program</h2>
//       <p className="description">
//         Our company has implemented a robust quality assurance program that involves various checks and tests to ensure that all materials and components supplied by our suppliers meet the required specifications. We have established a set of quality guidelines and standards that our suppliers must adhere to in order to maintain their status as our approved vendors. We conduct regular quality audits of our suppliers' facilities to ensure that they are equipped to meet our quality requirements. During these audits, we inspect the supplier's manufacturing processes, equipment, and procedures to ensure that they are in compliance with the required standards.
//       </p>
//     </div>
//     </div>
//   );
// };

// export default Quartz;
// {
//   /* <div className="QuartzProImg">
// <h1>OUR PRODUCTS</h1>
// </div> */
// }



import React from "react";
import "./Quartz.css";
import QuartzImage from "../../../assets/CrystalQuartz.jpg";
import QuartzCarousel from "../../../Components/QuartzCarousel/QuartzCarousel.jsx";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../../assets/imag.jpg';
import image2 from '../../../assets/Sisand.jpg';
import image3 from '../../../assets/Silica.jpg';
import image4 from '../../../assets/Silica4.jpeg';
import image5 from '../../../assets/silica1.jpeg';
import image6 from '../../../assets/silica2.jpeg';
const Silica = () => {
  const handleScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add("animated");
      } else {
        element.classList.remove("animated");
      }
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="QuartzMain">
      <div className="sec__container Quartz__container" id="about">
        <div className="Quartz__image ">
          <img src={QuartzImage} alt="Quartz" className="h-96" />
        </div>
        <div className="Quartz__content">
          <p className="Quartz__subheader">Quartz</p>
          <h2 className="Quartz__header">The Best Holidays Start Here!</h2>
          <p className="Quartz__description leading-loose">
            Quartz is a mineral composed of silicon and oxygen atoms in a
            continuous framework of SiO4 silicon-oxygen tetrahedra, with each
            oxygen being shared between two tetrahedra, giving an overall
            chemical formula of SiO2. Quartz is a hard, crystalline mineral that
            is commonly used in the production of glass, ceramics, electronics,
            and many other products. It is also used as a component in the
            manufacturing of quartz countertops, which have become increasingly
            popular in modern homes
          </p>
        </div>
      </div>
      <div className="Quartz-products">
        <div className="Quartz-A">
          <h1 className="text-5xl font-bold text-indigo-800 ml-24  ">
            Our Products
          </h1>
        </div>
        <div className=" Quartz-B hidden lg:block">
          <QuartzCarousel />
        </div>
      </div>

      <div className="chemical-specs ">
        <h3>Chemical Formula of Quartz</h3>
        <table className="chemical-formula-table">
          <thead>
            <tr>
              <th>Element</th>
              <th>Symbol</th>
              <th>Atomic Number</th>
              <th>Percentage by Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Silicon</td>
              <td>Si</td>
              <td>14</td>
              <td>46.74%</td>
            </tr>
            <tr>
              <td>Oxygen</td>
              <td>O</td>
              <td>8</td>
              <td>53.26%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="applications flex px-auto mx-auto ">
        
        <div className="img  w-1/3 ml-10">
          {" "}
          <img src={QuartzImage} alt="Quartz" />
        </div>
        <div className="pt-8 md:pl-24 md:ml-10 ">
        <h3>Applications of Quartz</h3>
          <ul className="applications-list leading-loose">
            <li>Ceramics: Quartz is used in the manufacturing of ceramicsto improve itsstrength and durability.</li>
            <li>Glass Manufacturing: Quartz grains are used in the manufacturing of glassto improve its transparency and durability.</li>
            <li>Construction: Quartz stone is widely used in the construction industry for making countertops, flooring, and wall cladding.</li>
            <li>Electronics: Quartz crystals are used in electronic devicessuch as watches, clocks, and computersto provide accurate timing.</li>
            <li>Paints and Coatings: Quartz powderis used as a filler material in paints and coatingsto improve their durability and scratch resistance.</li>
           
          </ul>
        </div>
      </div>

 <div className="p-6 bg-Neutral-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-900">Quartz Forms and Sizes</h2>
      <div className="overflow-x-auto">
        <table className="custom-table">
          <thead>
            <tr className="table-header">
              <th>Form</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td>Granules</td>
              <td>0.1 - 0.5 mm</td>
            </tr>
            <tr className="table-row">
              <td>Powder</td>
              <td>0.5 - 1 mm</td>
            </tr>
            <tr className="table-row">
              <td>Lumps</td>
              <td>1 - 5 mm</td>
            </tr>
            <tr className="table-row">
              <td>Crystals</td>
              <td>5 - 10 mm</td>
            </tr>
            <tr className="table-row">
              <td>Pebbles</td>
              <td>10 - 20 mm</td>
            </tr>
            <tr className="table-row">
              <td>Sand</td>
              <td>20 - 50 mm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    


    <div className="quality-assurance-container">
      <h2 className="title">Quality Assurance Program</h2>
      <p className="description">
        Our company has implemented a robust quality assurance program that involves various checks and tests to ensure that all materials and components supplied by our suppliers meet the required specifications. We have established a set of quality guidelines and standards that our suppliers must adhere to in order to maintain their status as our approved vendors. We conduct regular quality audits of our suppliers' facilities to ensure that they are equipped to meet our quality requirements. During these audits, we inspect the supplier's manufacturing processes, equipment, and procedures to ensure that they are in compliance with the required standards.
      </p>
    </div>
    </div>
  );
};

export default Silica;
{
  /* <div className="QuartzProImg">
<h1>OUR PRODUCTS</h1>
</div> */
}
