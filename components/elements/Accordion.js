import React, { useState } from "react";

const Accordion = ({ faqData = [] }) => {
  // Defaulting to an empty array if faqData is undefined
  const [isActive, setIsActive] = useState({
    status: false,
    key: null,
  });

  const handleToggle = (key) => {
    setIsActive({
      status: isActive.key === key ? false : true,
      key: isActive.key === key ? null : key,
    });
  };

  if (!faqData.length) {
    return <div>No FAQs available for this category.</div>;
  }

  return (
    <div className="accordion" id="accordionFAQ">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <h5 className="accordion-header" onClick={() => handleToggle(index)}>
            <button
              className={
                isActive.key === index
                  ? "accordion-button text-heading-5"
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              {faq.question}
            </button>
          </h5>
          <div
            className={
              isActive.key === index
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
