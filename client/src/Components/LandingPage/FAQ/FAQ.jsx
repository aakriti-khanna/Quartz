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

  const faqs = [
    {
      question: "What types of silica products are available?",
      answer: "We offer a variety of silica products including silica sand, silica flour, and specialty silicas for various industrial applications."
    },
    {
      question: "What grades of quartz do you provide?",
      answer: "We provide different grades of quartz tailored to the needs of various industries, from high-purity grades for electronics to lower grades for construction."
    },
    {
      question: "How can I place an order for silica or quartz products?",
      answer: "You can place an order by contacting our sales team via phone or email, or by filling out the order form on our website."
    },
    {
      question: "What is the typical delivery time for orders?",
      answer: "Delivery times vary depending on the product and order size, but we typically deliver within 5-7 business days."
    },
    {
      question: "Are there any health risks associated with silica?",
      answer: "Silica can pose health risks if inhaled over a long period. It’s important to follow safety guidelines and use appropriate protective equipment when handling silica products."
    },
    {
      question: "Can you provide custom silica products?",
      answer: "Yes, we can provide custom silica products tailored to your specific needs. Please contact us to discuss your requirements."
    }
  ];

  const renderFaqItems = (faqs, startIndex, animation) => {
    return faqs.map((faq, index) => {
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
            {faq.question} {faqOpen[startIndex + index] ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {faqOpen[startIndex + index] && (
            <div className="faqs-answer">
              {faq.answer}
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
          {renderFaqItems(faqs.slice(0, 3), 0, -100)}
        </ul>
        <ul className="faqs-list">
          {renderFaqItems(faqs.slice(3, 6), 3, 100)}
        </ul>
      </div>
    </motion.div>
  );
};

export default FAQ;
