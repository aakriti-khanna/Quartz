import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Faq.css';

const FAQ = () => {
  const [faqOpen, setFaqOpen] = useState(new Array(6).fill(false)); // Updated to track 6 FAQs

  // Function to toggle the open/close state of an FAQ item
  const toggleFaq = (index) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };

  return (
    <motion.div
      className="faq-section"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>Frequently Asked Questions</h3>
      <div className="faq-container">
        <ul className="faq-list">
          {[
            "What is this service?",
            "How do I use it?",
            "Who can I contact for support?",
          ].map((question, index) => (
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
        <ul className="faq-list">
          {[
            "Is there a mobile app available?",
            "Can I cancel my subscription anytime?",
            "Are there any hidden fees?"
          ].map((question, index) => (
            <li key={index + 3} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index + 3)}>
                {question} {faqOpen[index + 3] ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {faqOpen[index + 3] && (
                <div className="faq-answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default FAQ;
