import React from "react";
import "./processing.css";
import ProcessImage from "../../../assets/Processing.jpg";

const Processing = () => {
  return (
    <div className="ProContainer">
      <div className="Min-img">
        <div className="head0"> SILICA FLOOR INDUSTRIES</div>
        <div className="head1">
          <h1>PROCESSING</h1>
        </div>
      </div>

      <div className="sec__container Quartz__container" id="about">
        <div className="Mining__image ">
          <img src={ProcessImage} alt="Mining" className="h-96" />
        </div>
        <div className="Mining__content">
          <p className="Mining__subheader">Processing</p>
          <h2 className="Mining__header">The Second Stage Is Here </h2>
          <p className="Mining__description leading-loose">
            At  Silica Floor Industries, our commitment to excellence extends beyond
            mere manufacturing. We pride ourselves on our comprehensive
            processing capabilities, ensuring that our minerals reach you in
            their finest form.
          </p>
          <p className="Mining__description leading-loose">
            {" "}
            Utilizing state-of-the-art processing techniques, we refine our raw
            materials with precision and care. From quartz to feldspar and
            ramming mass, each mineral undergoes meticulous treatment to
            optimize its quality and characteristics.
          </p>

          <p className="Mining__description leading-loose">
            Our processing facilities are equipped with cutting-edge machinery,
            operated by skilled technicians who adhere to stringent quality
            control measures. Through grinding, sorting, and grading processes,
            we tailor our minerals to meet the diverse needs of industries such
            as glass, ceramics, steel, and paint
          </p>

          <p className="Mining__description leading-loose">
            Moreover, our dedication to sustainability drives our processing
            practices. We implement eco-friendly methods to minimize waste and
            reduce environmental impact, ensuring that our operations align with
            global standards of responsible manufacturing.
          </p>

          <p className="Mining__description leading-loose">
            {" "}
            At Silica Floor Industries, our processing capabilities not only enhance the
            quality of our minerals but also reflect our unwavering commitment
            to delivering excellence in every aspect of our business.
          </p>
        </div>
      </div>

      <div className="bullet-points-container leading-loose">
        <h1 className="quality-heading">QUALITY CHECKS</h1>
        <ul>
          <li className="bullet-point">
            Our company has implemented a robust quality assurance program that
            involves various checks and tests to ensure that all materials and
            components supplied by our suppliers meet the required
            specifications.
          </li>
          <li className="bullet-point">
            We have established a set of quality guidelines and standards that
            our suppliers must adhere to in order to maintain their status as
            our approved vendors.
          </li>
          <li className="bullet-point">
            We conduct regular quality audits of our suppliers' facilities to
            ensure that they are equipped to meet our quality requirements.
          </li>
          <li className="bullet-point">
            During these audits, we inspect the supplier's manufacturing
            processes, equipment, and procedures to ensure that they are in
            compliance with the required standards.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Processing;
