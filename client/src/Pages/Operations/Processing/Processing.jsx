import React from 'react'
import "./processing.css";
import QuartzImage from "../../../assets/CrystalQuartz.jpg";

const Processing = () => {
  return (
    <div className='ProContainer'> Processing
      <div className="Min-img">
        <div className="head0"> SILICA FLOOR INDUSTRIES</div>
        <div className="head1">
          <h1>MINING</h1>
        </div>
      </div>

      <div className="sec__container Quartz__container" id="about">
        <div className="Mining__image ">
          <img src={QuartzImage} alt="Mining" className="h-96" />
        </div>
        <div className="Mining__content">
          <p className="Mining__subheader">MINING</p>
          <h2 className="Mining__header">The Beginning Start Here!</h2>
          <p className="Mining__description leading-loose">
            Sora White Pvt. Ltd. not only excels in manufacturing and exporting
            high-quality minerals but also has a strong foothold in the mining
            sector. Our mining operations are a testament to our commitment to
            excellence and sustainability in the mineral industry.  
          </p>
            <p className="Mining__description leading-loose" > With a focus
            on responsible mining practices, we operate five leased mines to
            ensure a consistent supply of premium raw materials for our
            manufacturing processes. These mines are managed with utmost care
            and adherence to environmental regulations, minimizing our
            ecological footprint.</p> 
            
            <p className="Mining__description leading-loose">Our mining endeavors prioritize safety,
            efficiency, and environmental stewardship. We employ modern mining
            techniques and technologies to extract minerals while minimizing
            environmental impact and maximizing resource efficiency.</p>

            <p className="Mining__description leading-loose">Furthermore, our mining operations are integrated seamlessly with
            our manufacturing unit, allowing for a streamlined production
            process that ensures the quality and consistency of our end
            products. This integration enables us to maintain strict quality
            control measures from extraction to the final product, guaranteeing
            customer satisfaction and loyalty. </p>

            <p className="Mining__description leading-loose">  At Sora White, mining isn't just
            about extraction—it's about responsibly harnessing the Earth's
            resources to provide sustainable solutions for our valued customers
            while preserving the environment for future generations.</p>
          
        
        </div>

       
      </div>


      <div className="bullet-points-container leading-loose">
        <h1  className="quality-heading">QUALITY CHECKS</h1>
        <ul >
        <li className="bullet-point">Our company has implemented a robust quality assurance program that involves various checks and tests to ensure that all materials and components supplied by our suppliers meet the required specifications.</li>
        <li className="bullet-point">We have established a set of quality guidelines and standards that our suppliers must adhere to in order to maintain their status as our approved vendors.</li>
        <li className="bullet-point">We conduct regular quality audits of our suppliers' facilities to ensure that they are equipped to meet our quality requirements.</li>
        <li className="bullet-point">During these audits, we inspect the supplier's manufacturing processes, equipment, and procedures to ensure that they are in compliance with the required standards.</li>
      </ul>
        </div>
    </div>

 
  )
}

export default Processing