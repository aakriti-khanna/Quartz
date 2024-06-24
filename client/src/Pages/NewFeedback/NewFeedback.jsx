
// import React, { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { FaSmile, FaFrown, FaMeh, FaGrin, FaAngry } from "react-icons/fa";
// import { motion } from "framer-motion";
// import "./NewFeedback.css"; // Ensure this CSS file is created and styled
// import emailjs from "emailjs-com";


// const SERVICE_ID = "service_sy06e0f";
// const TEMPLATE_ID = "template_2dnlc5k";
// const PUBLIC_KEY = "DHp9L8nWAAEJkf0F3";

// import QuartzImage from "../../assets/gall17.jpg";
// const FeedbackForm = () => {
//   const [rating, setRating] = useState("");
//   const [reasons, setReasons] = useState("");
//   const [contactPermission, setContactPermission] = useState(false);
//   const [researchGroup, setResearchGroup] = useState(false);
//   const [faqOpen, setFaqOpen] = useState(Array(3).fill(false)); // Adjust the array length as per the number of FAQs





//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       rating,
//       reasons,
//       contactPermission,
//       researchGroup,
//     };
//     console.log(formData);
//     // Add your form submission logic here
//   };

//   const toggleFaq = (index) => {
//     setFaqOpen((prevState) => {
//       const newState = [...prevState];
//       newState[index] = !newState[index];
//       return newState;
//     });
//   };

  
//   return (
//     <main>
//       <div className="hero">
//         <div className="FeedImg">
     
//         </div>

//         <motion.div
//           className="card"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3>Give Feedback</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>What do you think of the issue search experience with SFI Products?</label>
//               <div className="rating-group">
//                 {[
//                   { label: "Amazing", icon: <FaGrin /> },
//                   { label: "Good", icon: <FaSmile /> },
//                   { label: "Okay", icon: <FaMeh /> },
//                   { label: "Bad", icon: <FaFrown /> },
//                   { label: "Terrible", icon: <FaAngry /> },
                 
    
//                 ].map((option, index) => (
//                   <label key={index} className="rating-label">
//                     <input
//                       type="radio"
//                       name="rating"
//                       value={option.label.toLowerCase()}
//                       checked={rating === option.label.toLowerCase()}
//                       onChange={(e) => setRating(e.target.value)}
//                     />
//                     {option.icon}
//                     <span>{option.label}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="reasons">What are the main reasons for your rating?</label>
//               <textarea
//                 name="reasons"
//                 id="reasons"
//                 cols="30"
//                 rows="10"
//                 value={reasons}
//                 onChange={(e) => setReasons(e.target.value)}
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <label>
//                 <input
//                   type="checkbox"
//                   name="research-group"
//                   checked={researchGroup}
//                   onChange={() => setResearchGroup(!researchGroup)}
                 
//                 />
//                <span className="ml-2">I'd like to help improve by joining the <a href="/">Research Group.</a></span> 
//               </label>
//             </div>
//             <div className="form-group">
//               <button type="submit" className="submit-button">Submit</button>
//               <button
//                 type="reset"
//                 className="cancel-button"
//                 onClick={() => {
//                   setRating("");
//                   setReasons("");
//                   setContactPermission(false);
//                   setResearchGroup(false);
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </main>
//   );
// };

// function NewCompo() {
//   return (
//     <div className="New">
//       <FeedbackForm />
//     </div>
//   );
// }

// export default NewCompo;

   
import React, { useState } from "react";
import { FaSmile, FaFrown, FaMeh, FaGrin, FaAngry } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./NewFeedback.css"; // Ensure this CSS file is created and styled

const SERVICE_ID = "service_x28hgwg";
const TEMPLATE_ID = "template_ybz6kgx";
const PUBLIC_KEY = "9VXHWx1fIRCOdMo8L";

const FeedbackForm = () => {
  const [rating, setRating] = useState("");
  const [reasons, setReasons] = useState("");
  const [contactPermission, setContactPermission] = useState(false);
  const [researchGroup, setResearchGroup] = useState(false);

  const handleIconClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = {
      rating,
      reasons,
      contactPermission,
      researchGroup,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent Successfully");
      }, (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      });
    setRating("");
    setReasons("");
    setContactPermission(false);
    setResearchGroup(false);
  };

  return (
    <main>
      <div className="hero">
        <div className="FeedImg">
          {/* Add your image or any content here */}
        </div>

        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Give Feedback</h3>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label>What do you think of the issue search experience with SFI Products?</label>
              <div className="rating-group">
                {[
                  { label: "Amazing", icon: <FaGrin className="icon" /> },
                  { label: "Good", icon: <FaSmile className="icon" /> },
                  { label: "Okay", icon: <FaMeh className="icon" /> },
                  { label: "Bad", icon: <FaFrown className="icon" /> },
                  { label: "Terrible", icon: <FaAngry className="icon" /> },
                ].map((option, index) => (
                  <label key={index} className="rating-label">
                    <input
                      type="radio"
                      name="rating"
                      value={option.label.toLowerCase()}
                      checked={rating === option.label.toLowerCase()}
                      onChange={(e) => handleIconClick(e.target.value)}
                    />
                    <span onClick={() => handleIconClick(option.label.toLowerCase())} className="icon-container">
                      {option.icon}
                    </span>
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="reasons">What are the main reasons for your rating?</label>
              <textarea
                name="reasons"
                id="reasons"
                cols="30"
                rows="10"
                value={reasons}
                onChange={(e) => setReasons(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="research-group"
                  checked={researchGroup}
                  onChange={() => setResearchGroup(!researchGroup)}
                />
                <span className="ml-2">I'd like to help improve by joining the <a href="/">Research Group.</a></span>
              </label>
            </div>
            <div className="form-group">
              <button type="submit" className="submit-button">Submit</button>
              <button
                type="reset"
                className="cancel-button"
                onClick={() => {
                  setRating("");
                  setReasons("");
                  setContactPermission(false);
                  setResearchGroup(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
};

function NewCompo() {
  return (
    <div className="New">
      <FeedbackForm />
    </div>
  );
}

export default NewCompo;
