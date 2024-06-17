
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaSmile, FaFrown, FaMeh, FaGrin, FaAngry } from "react-icons/fa";
import { motion } from "framer-motion";
import "./NewFeedback.css"; // Ensure this CSS file is created and styled


import QuartzImage from "../../assets/gall17.jpg";
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
        <div className="FeedImg">
     
        </div>

        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Give Feedback</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>What do you think of the issue search experience with SFI Products?</label>
              <div className="rating-group">
                {[
                  { label: "Amazing", icon: <FaGrin /> },
                  { label: "Good", icon: <FaSmile /> },
                  { label: "Okay", icon: <FaMeh /> },
                  { label: "Bad", icon: <FaFrown /> },
                  { label: "Terrible", icon: <FaAngry /> },
                 
    
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


