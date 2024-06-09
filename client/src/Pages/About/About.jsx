import React, { useEffect, useRef } from "react";
import "./About.css";
import aboutImage from "../../assets/gallery6.jpg";
import missionImage from "../../assets/VisMis.png";
import valuesImage from "../../assets/Values.jpg";
import trustImage from "../../assets/Trust.jpeg";
import chooseUsImage from "../../assets/whyChoose.png";

const About = () => {
  const refs = {
    about: useRef(null),
    mission: useRef(null),
    values: useRef(null),
    trust: useRef(null),
    chooseUs: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs]);

  return (
    <div>
      {/* Section 1: Welcome Section */}
      <div className=" about__section" ref={refs.about}>
        <div className="about__content">
        <div className="Gall1">
          <h1>About Us</h1>
          <div className="lines">
          <div></div>
          <div></div>
          <div></div>
        </div>
        </div>
        </div>
      </div>

      {/* Section 5: Why Choose Us */}
      <div className="my__container chooseus__section" ref={refs.chooseUs}>
        <div className="chooseus__content">
          <h2 className="section__header">Why Choose Us ?</h2>
          <p className="section__description">
            We stand out in the industry for our commitment to quality,
            innovation, and customer satisfaction. Choose us for our:
          </p>
          <ul className="chooseus__list">
            <li>Expert knowledge</li>
            <li>State-of-the-art facilities</li>
            <li>Unwavering dedication to your success</li>
            <li>Innovative solutions</li>
            <li>Customer-centric approach</li>
          </ul>
        </div>
        <div className="chooseus__image">
          <img src={chooseUsImage} alt="why choose us" />
        </div>
      </div>

      {/* Section 2: Our Mission */}
      <div className="my__container mission__section" ref={refs.mission}>
        <div className="mission__content">
          <h2 className="section__header">Our Mission & Vision</h2>
          <p className="section__description">
            Our mission is to deliver high-quality silica flour products that
            exceed industry standards. We are committed to innovation,
            sustainability, and customer satisfaction, ensuring that our
            products contribute to the success of our clients.
          </p>

          <p className="section__description">
            Our Vision is to be a leading global provider of high-quality minerals, driving
            sustainable growth and innovation while enhancing the well-being of
            our communities and preserving the environment. We aspire to set
            industry benchmarks through responsible mining practices,
            cutting-edge technology, and a commitment to excellence, ensuring a
            prosperous and sustainable future for all stakeholders.
          </p>
        </div>
        <div className="mission__image">
          <img src={missionImage} alt="mission" />
        </div>
      </div>

      {/* Section 3: Our Values */}
      <div className="my__container values__section" ref={refs.values}>
        <div className="values__content">
          <h2 className="section__header">Our Values</h2>
          <p className="section__description">
            At Silica Flour Industries, we uphold integrity, excellence, and
            teamwork. We believe in transparency, accountability, and continuous
            improvement, striving to foster a culture of trust and collaboration
            within our organization and with our stakeholders.
          </p>
        </div>
        <div className="values__image">
          <img src={valuesImage} alt="values" />
        </div>
      </div>

      {/* Section 4: Our Trust */}
      <div className="my__container trust__section" ref={refs.trust}>
        <div className="trust__content">
          <h2 className="section__header">Our Trust</h2>
          <p className="section__description">
            Trust is the foundation of our business. We strive to build strong,
            lasting relationships with our clients through transparent
            communication and reliable service.
          </p>
        </div>
        <div className="trust__image">
          <img src={trustImage} alt="trust" />
        </div>
      </div>
    </div>
  );
};

export default About;
