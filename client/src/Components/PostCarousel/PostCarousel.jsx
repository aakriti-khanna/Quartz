// // // import React from "react";
// // // import Slider from "react-slick";
// // // import "slick-carousel/slick/slick.css";
// // // import "slick-carousel/slick/slick-theme.css";

// // // const SimpleCarousel = ( data) => {
// // //   const settings = {
// // //     dots: true,
// // //     infinite: true,
// // //     speed: 500,
// // //     slidesToShow: 3,
// // //     slidesToScroll: 1,
// // //     autoplay: true,
// // //     autoplaySpeed: 3000,
// // //     pauseOnHover: true,
// // //     centerMode: true,
// // //     centerPadding: "60px",

// // //   };

// // //   return (
// // //     <div className="slider-container  w-full border p-4 ">
// // //       <Slider {...settings}>
// // //         {data.data.data &&
// // //           data.data.data.map((listing, index) => (
// // //             <div key={listing.id} className="slider-item" >
// // //               <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md ml-5">
// // //                 <img
// // //                   src={listing.imageUrl[0]}
// // //                   alt={`Image ${index}`}
// // //                   className="w-full h-64 object-cover rounded-t-xl"
// // //                 />
// // //                 <div className="content p-4">
// // //                   <h2 className="font-semibold text-lg text-gray-800">
// // //                     {listing.name}
// // //                   </h2>
                 
                
// // //                 </div> 
// // //               </div>
// // //             </div>
// // //           ))}
// // //       </Slider>
// // //     </div>
// // //   );
// // // };

// // // export default SimpleCarousel;

// // import React from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import image1 from '../../assets/gallery1.jpg'; // Adjust the path as needed
// // import image2 from '../../assets/gallery1.jpg';
// // import image3 from '../../assets/gallery1.jpg';
// // import "./PostCarousel.css"
// // const PostCarousel = () => {
// //   const settings = {
// //     // dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //     pauseOnHover: true,
// //     centerMode: true,
// //     centerPadding: "60px",
   
  
// //   };

// //   const data = [
// //     { id: 1, name: 'Listing 1', image: image1 },
// //     { id: 2, name: 'Listing 2', image: image2 },
// //     { id: 3, name: 'Listing 3', image: image3 },
// //   ];

// //   return (
// //     <div className="slider-container w-full border p-4">
// //       <Slider {...settings}>
// //         {data.map((listing, index) => (
// //           <div key={listing.id} className="slider-item">
// //             <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md ml-5">
// //               <img
// //                 src={listing.image}
// //                 alt={`Image ${index}`}
// //                 className="w-96 h-54 object-cover rounded-t-xl "
// //               />
// //               <div className="content p-4">
// //                 <h2 className="font-semibold text-lg text-gray-800">
// //                   {listing.name}
// //                 </h2>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </Slider>
// //     </div>
// //   );
// // };

// // export default PostCarousel;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import image1 from '../../assets/imag.jpg'; // Adjust the path as needed
// import image2 from '../../assets/Sisand.jpg'; // Make sure to use different images
// import image3 from '../../assets/Silica.jpg';
// import image4 from '../../assets/Silica4.jpeg';
// import image5 from '../../assets/silica1.jpeg';
// import image6 from '../../assets/silica2.jpeg';
// import "./PostCarousel.css"; // Import the CSS file

// const PostCarousel = () => {
//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     centerMode: true,
//     centerPadding: "30px",
//   };

//   const data = [
//     { id: 1, name: 'Dried Silica', image: image1 },
//     { id: 2, name: 'Silica', image: image2 },
//     { id: 3, name: 'Silica', image: image3 },
//     { id: 4, name: 'Silica', image: image4 },
//     { id: 5, name: 'Silica', image: image5 },
//     { id: 6, name: 'Silica', image: image6},
//   ];

//   return (
//     <div className="slider-container w-full border p-4">
//       <Slider {...settings}>
//         {data.map((listing) => (
//           <div key={listing.id} className="slider-item">
//             <div className="max-w-lg mx-auto bg-white rounded-xl overflow-hidden shadow-md p-2">
//               <img
//                 src={listing.image}
//                 alt={listing.name}
//                 className="w-full h-64 object-cover rounded-t-xl"
//               />
//               <div className="content p-4">
//                 <h2 className="font-semibold text-lg text-gray-800">
//                   {listing.name}
//                 </h2>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default PostCarousel;





import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/imag.jpg';
import image2 from '../../assets/Sisand.jpg';
import image3 from '../../assets/Silica.jpg';
import image4 from '../../assets/Silica4.jpeg';
import image5 from '../../assets/silica1.jpeg';
import image6 from '../../assets/silica2.jpeg';
import "./PostCarousel.css"; // Import the CSS file
    
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
    { id: 1, name: 'Dried Silica', image: image1 },
    { id: 2, name: 'Silica', image: image2 },
    { id: 3, name: 'Silica', image: image3 },
    { id: 4, name: 'Silica', image: image4 },
    { id: 5, name: 'Silica', image: image5 },
    { id: 6, name: 'Silica', image: image6 },
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
