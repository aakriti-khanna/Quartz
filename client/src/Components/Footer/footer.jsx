

import React from "react";
import {
  RiYoutubeFill,
  RiInstagramLine,
  RiFacebookFill,
  RiLinkedinFill,
  RiPhoneFill,
  RiRecordMailLine,
  RiMapPin2Fill,
} from "react-icons/ri";
import "./footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container2 footer__container">
        <div className="footer__col">
          <div className="logo footer__logo">
            <div>H</div>
            <span>
              HOTEL
              <br />
              MIRANDA
            </span>
          </div>
          <p className="section__description1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            laudantium unde. Doloremque eaque debitis laborum labore voluptates
            iste molestiae consectetur.
          </p>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <RiYoutubeFill />
              </a>
            </li>
            <li>
              <a href="#">
                <RiInstagramLine />
              </a>
            </li>
            <li>
              <a href="#">
                <RiFacebookFill />
              </a>
            </li>
            <li>
              <a href="#">
                <RiLinkedinFill />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h3 className="py-2 text-white">Services</h3>
          <div className="footer__links">
            <li>
              <a href="#">Online Booking</a>
            </li>
            <li>
              <a href="#">Room Customization</a>
            </li>
            <li>
              <a href="#">Virtual Tours</a>
            </li>
            <li>
              <a href="#">Special Offers</a>
            </li>
            <li>
              <a href="#">Concierge Services</a>
            </li>
            <li>
              <a href="#">Customer Support</a>
            </li>
          </div>
        </div>
        <div className="footer__col flex">
          <h3 className="text-white  py-2">Contact Us</h3>
          <div className="footer__links">
            <li className="flex ">
              <span>
                <RiPhoneFill />
              </span>
              <div >
                <h5>Phone No</h5>

                <p>+91 9876543210</p>
              </div>
            </li>
            <li className="flex">
              <span>
                <RiRecordMailLine />
              </span>
              <div >
                <h5>Email</h5>
                <p>info@hotelmiranda.com</p>
              </div>
            </li>
            <li className="flex" >
              <span>
                <RiMapPin2Fill />
              </span>
              <div>
                <h5>Location</h5>
                <p>First St. NYC</p>
              </div>
            </li>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2023 Web Design Mastery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
