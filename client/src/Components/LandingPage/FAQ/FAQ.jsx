import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import './Faq.css';

const FAQ = () => {
  const [faqOpen, setFaqOpen] = useState(new Array(6).fill(false)); // Updated to track 6 FAQs

  // Function to toggle the open/close state of an FAQ item
  const toggleFaq = (index) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };

  // Intersection Observer options
  const options = {
    triggerOnce: true,
    threshold: 0.1,
  };

  // Render FAQ items with Intersection Observer
  const renderFaqItems = (questions, startIndex, animation) => {
    return questions.map((question, index) => {
      const [ref, inView] = useInView(options);

      return (
        <motion.li
          key={startIndex + index}
          className="faqs-item"
          ref={ref}
          initial={{ opacity: 0, x: animation }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="faqs-question" onClick={() => toggleFaq(startIndex + index)}>
            {question} {faqOpen[startIndex + index] ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {faqOpen[startIndex + index] && (
            <div className="faqs-answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          )}
        </motion.li>
      );
    });
  };

  return (
    <motion.div
      className="faqs-section"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>Frequently Asked Questions</h3>
      <div className="faqs-container">
        <ul className="faqs-list">
          {renderFaqItems(
            ["What is this service?", "How do I use it?", "Who can I contact for support?"],
            0,
            -100
          )}
        </ul>
        <ul className="faqs-list">
          {renderFaqItems(
            ["Is there a mobile app available?", "Can I cancel my subscription anytime?", "Are there any hidden fees?"],
            3,
            100
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default FAQ;
