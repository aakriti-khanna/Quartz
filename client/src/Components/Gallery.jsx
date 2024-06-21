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

import asset1 from "../assets/gall1.jpeg";
import asset2 from "../assets/gall2.jpeg";
import asset3 from "../assets/gall3.jpeg";

import asset5 from "../assets/gall5.jpeg";
import asset6 from "../assets/gall6.jpeg";
import asset7 from "../assets/gall7.jpeg";
import asset8 from "../assets/gall8.jpeg";
import asset9 from "../assets/gall9.jpeg";
import asset10 from "../assets/gall10.jpeg";
import asset11 from "../assets/gall11.jpeg";
import asset12 from "../assets/gall12.jpeg";
// import asset13 from "../assets/gall13.jpeg";
import asset14 from "../assets/gall14.jpeg";
import asset15 from "../assets/gall15.jpeg";
import asset16 from "../assets/Q1.jpg";
import asset17 from "../assets/Q2.jpg";
import asset18 from "../assets/Sisand.jpg";
import asset19 from "../assets/gall16.jpeg";
import asset20 from "../assets/gall17.jpeg";
import asset21 from "../assets/gall18.jpeg";
import asset22 from "../assets/gall19.jpeg";
// import asset22 from "../assets/gall20.jpeg";
import asset23 from "../assets/gall21.jpeg";
import asset24 from "../assets/gall22.jpeg";
import asset25 from "../assets/gall23.jpeg";
import asset26 from "../assets/gall24.jpeg";
import asset27 from "../assets/gall25.jpeg";
import asset28 from "../assets/gall26.jpeg";
import asset29 from "../assets/gall27.jpeg";
import asset30 from "../assets/gall28.jpeg";
import asset31 from "../assets/gall29.jpeg";
import asset32 from "../assets/gall30.jpeg";
import asset33 from "../assets/gall31.jpeg";
import asset34 from "../assets/gall32.jpeg";
import asset35 from "../assets/gall33.jpeg";
import asset36 from "../assets/gall34.jpeg";
import asset37 from "../assets/gall35.jpeg";
import asset38 from "../assets/gall36.jpeg";
import asset39 from "../assets/gall37.jpeg";
import asset40 from "../assets/gall38.jpeg";
import asset41 from "../assets/gall39.jpeg";
import asset42 from "../assets/gall40.jpeg";
import asset43 from "../assets/gall41.jpeg";
import asset44 from "../assets/gall42.jpeg";
import asset45 from "../assets/gall43.jpeg";
import asset46 from "../assets/gall49.jpeg";
import asset47 from "../assets/gall50.jpeg";
import asset48 from "../assets/gall51.jpeg";
import asset49 from "../assets/gall55.jpeg";
import asset50 from "../assets/gall56.jpeg";
import asset51 from "../assets/gall6.jpeg";
import asset52 from "../assets/quartz23.jpeg";
import asset53 from "../assets/quartz21.jpeg";
import asset54 from "../assets/quartz22.jpeg";
import asset55 from "../assets/gallery4.jpg";


// import asset23 from "../assets/Sil.jpeg";

const images = [
  { src: asset17 },

  { src: asset1 },
  { src: asset2 },
  { src: asset19 },
  { src: asset18 },
  { src: asset3 },

  { src: asset5 },

  { src: asset7 },
  { src: asset8 },
  { src: asset14 },
  { src: asset9 },
  { src: asset15 },


  { src: asset24 },
  { src: asset25 },
  { src: asset26 },
  { src: asset11 },
  { src: asset12 },
  // { src: asset13 },

  { src: asset18 },
  { src: asset19 },
  { src: asset49 },
  { src: asset50},
  { src: asset51 },

  { src: asset53 },
  { src: asset54 },

  { src: asset20 },
  { src: asset21 },
  // { src:asset22 },
  { src: asset23 },
  { src: asset48 },
  { src: asset42 },
  { src: asset55 },
  

 
  { src: asset27 },
  { src: asset47 },
  { src: asset28 },
  { src: asset29 },
  { src: asset50 },
  { src: asset51 },
  { src: asset52 },

  { src: asset30 },
  { src: asset31 },
  { src: asset32 },
  { src: asset33 },
  { src: asset34 },
  { src: asset35 },
  { src: asset36 },
  { src: asset37 },
  { src: asset38 },
  { src: asset39 },
  { src: asset40 },
  { src: asset41 },

  { src: asset43 },
  { src: asset44 },
  { src: asset45 },
  { src: asset46 },
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
