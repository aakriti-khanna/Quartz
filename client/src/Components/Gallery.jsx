import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import "./style.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

// import img from"../assets";

import asset1 from "../assets/gallery1.jpg";
import asset2 from "../assets/gallery2.jpg";
import asset3 from "../assets/gallery3.jpg";
import asset4 from "../assets/gallery4.jpg";
import asset5 from "../assets/gallery5.jpg";
import asset6 from "../assets/gallery6.jpg";
import asset7 from "../assets/gall17.jpg";
import asset8 from "../assets/gall18.jpg";
import asset9 from "../assets/gallery9.jpg";
import asset10 from "../assets/gallery10.jpg";
import asset11 from "../assets/gallery11.jpg";
import asset12 from "../assets/gallery12.jpg";
import asset13 from "../assets/gallery13.jpg";
import asset14 from "../assets/gallery14.jpg";
import asset15 from "../assets/imag.jpg";
import asset16 from "../assets/Q1.jpg";
import asset17 from "../assets/Q2.jpg";
import asset18 from "../assets/Sisand.jpg";
import asset19 from "../assets/Sil.jpg";

const images = [
  { src: asset17, alt: "17" },

  { src: asset1, alt: "1" },
  { src: asset2, alt: "2" },
  { src: asset19, alt: "20" },
  { src: asset18, alt: "19" },
  { src: asset3, alt: "3" },
  { src: asset4, alt: "4" },
  { src: asset5, alt: "5" },
  { src: asset6, alt: "6" },
  { src: asset7, alt: "7" },
  { src: asset8, alt: "8" },
  { src: asset14, alt: "18" },
  { src: asset9, alt: "9" },
  { src: asset15, alt: "15" },
  { src: asset10, alt: "10" },
  { src: asset11, alt: "11" },
  { src: asset12, alt: "12" },
  { src: asset13, alt: "13" },
  // { src: asset20, alt: "21" },
  // {src: asset21 , alt: "22"},
  { src: asset16, alt: "16" },

  // { src: "/16.jpg", alt: "16", },
  // { src: "/17.jpg", alt: "17", },
  // { src: "/18.jpg", alt: "18", },
  // { src: "/19.jpg", alt: "19", },
];

export function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="App">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[
          lgThumbnail,
          lgZoom,
          lgAutoplay,
          lgFullscreen,
          lgRotate,
          lgShare,
        ]}
      >
        {images.map((image, index) => {
          return (
            <a href={image.src} key={index}>
              <img alt={image.alt} src={image.src} />
            </a>
          );
        })}
      </LightGallery>
    </div>
  );
}
