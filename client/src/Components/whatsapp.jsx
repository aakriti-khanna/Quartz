import React from 'react';
// import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp.css"
const WhatsappButton = () => {
  return (
    <div className="fixed bottom-4 right-6 z-50">
      <a 
        href="https://api.whatsapp.com/send?phone=98253139000&text=Hola%21%20I%20would%20like%20to%C3%place%20order%20of%20silica%20and%20Quartz%202."
        className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-300  float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className='my-float' />
        {/* <i className="fa fa-whatsapp text-2xl"></i> */}
      </a>
    </div>
  );
}

export default WhatsappButton;
