import React from "react";
import "./Quality.css";
import QualityImage from "../../../assets/Quality.jpg";

const Quality = () => {
  return (
    <div className="QualContainer">
      <div className="Min-img">
        <div className="head0"> SILICA FLOOR INDUSTRIES</div>
        <div className="head1">
          <h1>Quality</h1>
        </div>
      </div>

      <div className="sec__container Quartz__container" id="about">
        <div className="Mining__image ">
          <img src={QualityImage} alt="Mining" className="h-96" />
        </div>
        <div className="Mining__content">
          <p className="Mining__subheader">Quality </p>
          <h2 className="Mining__header">The Final Stage Is Here !</h2>
          <p className="Mining__description leading-loose">
            At Silica Floor Industries, quality assurance is not just a process;
            it's a commitment engrained in our ethos. With a meticulous
            approach, we ensure that every step of our mineral production
            adheres to the highest standards of quality, consistency, and
            reliability.
          </p>
          <p className="Mining__description leading-loose">
            Our quality assurance begins with the careful selection of raw
            materials sourced from our own leased mines. By controlling the
            entire supply chain, we guarantee the purity and integrity of our
            minerals from extraction to finished product.
          </p>

          <p className="Mining__description leading-loose">
            Within our state-of-the-art manufacturing unit, advanced
            technologies and equipment are coupled with stringent quality
            control measures. Expert teams meticulously monitor each stage of
            production, from processing to packaging, to ensure that our
            products meet and exceed industry benchmarks.
          </p>

          <p className="Mining__description leading-loose">
            We pride ourselves on our ability to cater to diverse industries,
            from glass and ceramics to steel and beyond. Our minerals, available
            in a range of mesh sizes, boast fine finishing, moisture-free
            properties, and impeccable packaging, making them the preferred
            choice for a myriad of applications.{" "}
          </p>

          <p className="Mining__description leading-loose">
            {" "}
            At Silica Floor Industries, quality assurance isn't just about meeting
            regulations; it's about surpassing expectations. Our unwavering
            dedication to delivering excellence has cemented our reputation as a
            trusted manufacturer and exporter of premium minerals, both
            domestically and internationally.
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

export default Quality;
