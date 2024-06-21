import React, { useState } from 'react';
import { FaWhatsapp,  FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import{FaCommentSms} from  'react-icons/fa6'
const WhatsappSms = () => {
  const [showIcons, setShowIcons] = useState(true);

  const toggleIconsVisibility = () => {
    setShowIcons(!showIcons);
  };

  return (
    <div>
      <div className="fixed bottom-[25%] left-1 z-50 flex flex-col items-start space-y-2 cursor-pointer">
        <div
          className="flex justify-center items-center py-2 px-3 bg-blue-500 rounded-full shadow-lg transition-transform transform hover:scale-105"
          onClick={toggleIconsVisibility}
        >
          {showIcons ? <FaLongArrowAltLeft className="text-white" /> : <FaLongArrowAltRight className="text-white" />}
        </div>
        <div id="msg-type" className="text-white text-center py-2"></div>
        {showIcons && (
          <div className="space-y-2">
            <div className="flex items-center justify-center py-2 px-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105">
              <a
                href="https://wa.me/7014863105"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center space-x-2"
              >
                <FaWhatsapp className="text-xl" />
                <span className="hidden md:block"></span>
              </a>
            </div>
            <div className="flex items-center justify-center py-2 px-3 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
              <a
                href="sms:+91-7014863105"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center space-x-2"
              >
                <FaCommentSms className="text-xl" />
                <span className="hidden md:block"></span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsappSms;
