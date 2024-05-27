// import React, { useState } from 'react';
// import './NewFeedback.css'; // Make sure to create and style this CSS file

// const FeedbackForm = () => {
//   const [rating, setRating] = useState('');
//   const [reasons, setReasons] = useState('');
//   const [contactPermission, setContactPermission] = useState(false);
//   const [researchGroup, setResearchGroup] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       rating,
//       reasons,
//       contactPermission,
//       researchGroup
//     };
//     console.log(formData);
//     // Add your form submission logic here
//   };

//   return (
//     <main>
//       <div className="card">
//         <h3>Give feedback</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>What do you think of the issue search experience within Jira projects?</label>
//             <div>
//               {['Terrible', 'Bad', 'Okay', 'Good', 'Amazing'].map((label, index) => (
//                 <label key={index}>
//                   <input
//                     type="radio"
//                     name="rating"
//                     value={label.toLowerCase()}
//                     checked={rating === label.toLowerCase()}
//                     onChange={(e) => setRating(e.target.value)}
//                   />
//                   <img src={`./icons/${label.toLowerCase()}.svg`} alt={label} />
//                   <span>{label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="reasons">What are the main reasons for your rating?</label>
//             <textarea
//               name="reasons"
//               id="reasons"
//               cols="30"
//               rows="10"
//               value={reasons}
//               onChange={(e) => setReasons(e.target.value)}
//             ></textarea>
//           </div>
//           <div className="form-group">
//             <label>
//               <input
//                 type="checkbox"
//                 name="privacy-policy"
//                 checked={contactPermission}
//                 onChange={() => setContactPermission(!contactPermission)}
//               />
//               I may be contacted about this feedback. <a href="/">Privacy Policy</a>
//             </label>
//           </div>
//           <div className="form-group">
//             <label>
//               <input
//                 type="checkbox"
//                 name="research-group"
//                 checked={researchGroup}
//                 onChange={() => setResearchGroup(!researchGroup)}
//               />
//               I'd like to help improve by joining the <a href="/">Research Group.</a>
//             </label>
//           </div>
//           <div className="form-group">
//             <button type="submit">Submit</button>
//             <button type="reset" onClick={() => {
//               setRating('');
//               setReasons('');
//               setContactPermission(false);
//               setResearchGroup(false);
//             }}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// };

// // export default FeedbackForm;

// function NewCompo() {
//     return (
//       <div className="New">
//         {/* Other content */}
//         <FeedbackForm /> {/* Calling the ContactPage component */}
//       </div>
//     );
//   }

//   export default NewCompo;

// import React, { useState } from 'react';
// import { FaSmile, FaFrown, FaMeh, FaGrin, FaAngry } from 'react-icons/fa';
// import './NewFeedback.css'; // Ensure this CSS file is created and styled

// const FeedbackForm = () => {
//   const [rating, setRating] = useState('');
//   const [reasons, setReasons] = useState('');
//   const [contactPermission, setContactPermission] = useState(false);
//   const [researchGroup, setResearchGroup] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       rating,
//       reasons,
//       contactPermission,
//       researchGroup
//     };
//     console.log(formData);
//     // Add your form submission logic here
//   };

//   return (
//     <main>
//       <div className="card animate-card">
//         <h3>Give feedback</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>What do you think of the issue search experience within Jira projects?</label>
//             <div className="rating-group">
//               {[
//                 { label: 'Terrible', icon: <FaAngry /> },
//                 { label: 'Bad', icon: <FaFrown /> },
//                 { label: 'Okay', icon: <FaMeh /> },
//                 { label: 'Good', icon: <FaSmile /> },
//                 { label: 'Amazing', icon: <FaGrin /> }
//               ].map((option, index) => (
//                 <label key={index} className="rating-label">
//                   <input
//                     type="radio"
//                     name="rating"
//                     value={option.label.toLowerCase()}
//                     checked={rating === option.label.toLowerCase()}
//                     onChange={(e) => setRating(e.target.value)}
//                   />
//                   {option.icon}
//                   <span>{option.label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="reasons">What are the main reasons for your rating?</label>
//             <textarea
//               name="reasons"
//               id="reasons"
//               cols="30"
//               rows="10"
//               value={reasons}
//               onChange={(e) => setReasons(e.target.value)}
//             ></textarea>
//           </div>
//           {/* <div className="form-group">
//             <label>
//               <input
//                 type="checkbox"
//                 name="privacy-policy"
//                 checked={contactPermission}
//                 onChange={() => setContactPermission(!contactPermission)}
//               />
//               I may be contacted about this feedback. <a href="/">Privacy Policy</a>
//             </label>
//           </div> */}
//           <div className="form-group">
//             <label>
//               <input
//                 type="checkbox"
//                 name="research-group"
//                 checked={researchGroup}
//                 onChange={() => setResearchGroup(!researchGroup)}
//               />
//               I'd like to help improve by joining the <a href="/">Research Group.</a>
//             </label>
//           </div>
//           <div className="form-group">
//             <button type="submit" className="submit-button">Submit</button>
//             <button type="reset" className="cancel-button" onClick={() => {
//               setRating('');
//               setReasons('');
//               setContactPermission(false);
//               setResearchGroup(false);
//             }}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// };

// // export default FeedbackForm;

// function NewCompo() {
//     return (
//       <div className="New">
//         {/* Other content */}
//         <FeedbackForm /> {/* Calling the ContactPage component */}
//       </div>
//     );
//   }

//   export default NewCompo;

// import React, { useState } from "react";
// import { FaSmile, FaFrown, FaMeh, FaGrin, FaAngry, FaAngleDown } from "react-icons/fa";
// import { motion } from "framer-motion";
// import "./NewFeedback.css"; // Ensure this CSS file is created and styled

// const FeedbackForm = () => {
//   const [rating, setRating] = useState("");
//   const [reasons, setReasons] = useState("");
//   const [contactPermission, setContactPermission] = useState(false);
//   const [researchGroup, setResearchGroup] = useState(false);
//   const [faqVisible, setFaqVisible] = useState(false);

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

//   return (
//     <main > 
//       <div className="hero">
    
//       <motion.div
//         className={`faq-section ${faqVisible ? "faq-visible" : ""}`}
//         initial={{ opacity: 0, x: "-100%" }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h3>Frequently Asked Questions</h3>
//         <div className="dropdown">
        
//         </div>
//       </motion.div>

      

//       <motion.div
//         className="card"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h3>Give feedback</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>
//               What do you think of the issue search experience within Jira
//               projects?
//             </label>
//             <div className="rating-group">
//               {[
//                 { label: "Terrible", icon: <FaAngry /> },
//                 { label: "Bad", icon: <FaFrown /> },
//                 { label: "Okay", icon: <FaMeh /> },
//                 { label: "Good", icon: <FaSmile /> },
//                 { label: "Amazing", icon: <FaGrin /> },
//               ].map((option, index) => (
//                 <label key={index} className="rating-label">
//                   <input
//                     type="radio"
//                     name="rating"
//                     value={option.label.toLowerCase()}
//                     checked={rating === option.label.toLowerCase()}
//                     onChange={(e) => setRating(e.target.value)}
//                   />
//                   {option.icon}
//                   <span>{option.label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="reasons">
//               What are the main reasons for your rating?
//             </label>
//             <textarea
//               name="reasons"
//               id="reasons"
//               cols="30"
//               rows="10"
//               value={reasons}
//               onChange={(e) => setReasons(e.target.value)}
//             ></textarea>
//           </div>

//           <div className="form-group">
//             <label>
//               <input
//                 type="checkbox"
//                 name="research-group"
//                 checked={researchGroup}
//                 onChange={() => setResearchGroup(!researchGroup)}
//               />
//               I'd like to help improve by joining the{" "}
//               <a href="/">Research Group.</a>
//             </label>
//           </div>
//           <div className="form-group">
//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//             <button
//               type="reset"
//               className="cancel-button"
//               onClick={() => {
//                 setRating("");
//                 setReasons("");
//                 setContactPermission(false);
//                 setResearchGroup(false);
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </motion.div>
//       </div>
//     </main>

//   );
// };

// // export default FeedbackForm;

// function NewCompo() {
//   return (
//     <div className="New">
//       {/* Other content */}
//       <FeedbackForm /> {/* Calling the ContactPage component */}
//     </div>
//   );
// }

// export default NewCompo;


import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaSmile, FaFrown, FaMeh, FaGrin, FaAngry } from "react-icons/fa";
import { motion } from "framer-motion";
import "./NewFeedback.css"; // Ensure this CSS file is created and styled

const FeedbackForm = () => {
  const [rating, setRating] = useState("");
  const [reasons, setReasons] = useState("");
  const [contactPermission, setContactPermission] = useState(false);
  const [researchGroup, setResearchGroup] = useState(false);
  const [faqOpen, setFaqOpen] = useState(Array(3).fill(false)); // Adjust the array length as per the number of FAQs

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      rating,
      reasons,
      contactPermission,
      researchGroup,
    };
    console.log(formData);
    // Add your form submission logic here
  };

  const toggleFaq = (index) => {
    setFaqOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <main>
      <div className="hero">
        <motion.div
          className="faq-section"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Frequently Asked Questions</h3>
          <ul>
            {["What is this service?", "How do I use it?", "Who can I contact for support?"].map((question, index) => (
              <li key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  {question} {faqOpen[index] ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {faqOpen[index] && (
                  <div className="faq-answer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Give Feedback</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>What do you think of the issue search experience within Jira projects?</label>
              <div className="rating-group">
                {[
                  { label: "Terrible", icon: <FaAngry /> },
                  { label: "Bad", icon: <FaFrown /> },
                  { label: "Okay", icon: <FaMeh /> },
                  { label: "Good", icon: <FaSmile /> },
                  { label: "Amazing", icon: <FaGrin /> },
                ].map((option, index) => (
                  <label key={index} className="rating-label">
                    <input
                      type="radio"
                      name="rating"
                      value={option.label.toLowerCase()}
                      checked={rating === option.label.toLowerCase()}
                      onChange={(e) => setRating(e.target.value)}
                    />
                    {option.icon}
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
                I'd like to help improve by joining the <a href="/">Research Group.</a>
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


