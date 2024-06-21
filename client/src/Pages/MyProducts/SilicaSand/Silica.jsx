import React from "react";
import "./Silica.css";
import QuartzImage from "../../../assets/imag.jpg";
import SilicaImage from "../../../assets/silica2.jpeg";
import PostCarousel from "../../../Components/PostCarousel/PostCarousel.jsx";
const Silica = () => {
  const handleScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add("animated");
      } else {
        element.classList.remove("animated");
      }
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="QuartzMain overflow-hidden">
      <div className="sec__container Quartz__container" id="about">
        <div className="Quartz__image ">
          <img src={QuartzImage} alt="Quartz" className="h-96" />
        </div>
        <div className="Quartz__content">
          <p className="Quartz__subheader">Silica Sand</p>
          <h2 className="Quartz__header"></h2>
          <p className="Quartz__description leading-loose">
            Silica Sand is composed of silicon dioxide particles and is commonly
            used in glassmaking, foundry molds, sandblasting, filtration
            systems, and hydraulic fracturing due to its unique properties such
            as high purity, grain size, and chemical inertness. Its widespread
            availability and versatility make it a vital component in numerous
            industrial processes.
          </p>
          <p className="Quartz__description leading-loose">
            Impurities: While silica sand is primarily composed of silicon
            dioxide, it can also contain minor impurities such as iron oxides
            (Fe₂O₃), aluminum oxide (Al₂O₃), calcium oxide (CaO), magnesium
            oxide (MgO), and potassium oxide (K₂O), depending on the source and
            processing.
          </p>
          <p className="Quartz__description leading-loose">
            Physical Properties: Silica sand is known for its hardness,
            resistance to abrasion, high melting point, and uniform particle
            size distribution, making it ideal for various industrial
            applications.
          </p>
        </div>
      </div>
      <div className="Quartz-products">
        <div className="Quartz-A">
          <h1 className="text-5xl font-bold text-indigo-800 ml-24  ">
            Our Products
          </h1>
        </div>
        <div className=" Quartz-B hidden md:block">
          <PostCarousel />
        </div>
      </div>

      <div className="chemical-specs ">
        <h3>Chemical Formula of Silica</h3>
        <table className="chemical-formula-table">
          <thead>
            <tr>
              <th>Element</th>
              <th>Symbol</th>
              <th>Atomic Number</th>
              <th>Percentage by Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Silicon</td>
              <td>Si</td>
              <td>14</td>
              <td>46.74%</td>
            </tr>
            <tr>
              <td>Oxygen</td>
              <td>O</td>
              <td>8</td>
              <td>53.26%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="applications flex px-auto mx-auto ">
        <div className="img  w-1/3 ml-10 flex items-center">
          {" "}
          <img src={SilicaImage} alt="Quartz" />
        </div>
        <div className="pt-8 md:pl-24 md:ml-10 ">
          <h3>Applications of Silica Sand</h3>
          <ul className="applications-list leading-loose">
            <li>
              Foundry Sand: Used in metal casting processes to create molds and
              cores.
            </li>
            <li>
              Construction: Component of concrete, mortar, and various
              construction materials.
            </li>
            <li>
              Water Filtration: Utilized in water treatment facilities to filter
              and purify water.
            </li>
            <li>
            Solar Glass Manufacturing: Essential raw material for producing glass
              products, including windows, bottles, and fiberglass.
            </li>
            <li>
              Ceramics: Integral part of ceramic production, including tiles,
              sanitary ware, and tableware.
            </li>
            <li>
              Chemicals: Base material for the production of silicon-based
              chemicals and compounds.
            </li>
            <li>
              Sports and Leisure: Used in sports surfaces, golf course bunkers,
              and playgrounds.
            </li>
          </ul>
        </div>
      </div>

      <div className="p-6 bg-Neutral-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-900">
          SIlica Forms and Sizes
        </h2>
        <div className="overflow-x-auto">
          <table className="custom-table">
            <thead>
              <tr className="table-header">
                <th>Form</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td>Coarse Silica Sand</td>
                <td>greater than 0.5 mm </td>
              </tr>
              <tr className="table-row">
                <td>Medium Silica Sand </td>
                <td>0.125 mm - 0.5 mm. </td>
              </tr>
              <tr className="table-row">
                <td>Fine Silica Sand</td>
                <td> 0.0625 mm - 0.125 mm</td>
              </tr>
              <tr className="table-row">
                <td>Very Fine Silica Sand:</td>
                <td> less than 0.0625 mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="quality-assurance-container">
        <h2 className="title">Quality Assurance Program</h2>
        <p className="description">
          Our company has implemented a robust quality assurance program that
          involves various checks and tests to ensure that all materials and
          components supplied by our suppliers meet the required specifications.
          We have established a set of quality guidelines and standards that our
          suppliers must adhere to in order to maintain their status as our
          approved vendors. We conduct regular quality audits of our suppliers'
          facilities to ensure that they are equipped to meet our quality
          requirements. During these audits, we inspect the supplier's
          manufacturing processes, equipment, and procedures to ensure that they
          are in compliance with the required standards.
        </p>
      </div>
    </div>
  );
};

export default Silica;
{
  /* <div className="QuartzProImg">
<h1>OUR PRODUCTS</h1>
</div> */
}
