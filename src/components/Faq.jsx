import React from "react";
import { accordion } from "../assets/data";
import { FaChevronDown } from "react-icons/fa";
import "../styles/Faq.css";
import { useEffect, useState } from "preact/hooks";

const Faq = () => {
  const [accordionId, setAccordionId] = useState(0);
  const handleAccordion = (id) => {
    accordionId === id ? setAccordionId(0) : setAccordionId(id);
  };

  useEffect(() => {
    handleAccordion(1);
  }, []);
  return (
    <section className="FAQ-container">
      <span>FAQ</span>
      <span>Frequently Asked Questions</span>
      <span>
        Frequently Asked Questions About the Car Rental Booking Process on Our
        Website: Answers to Common Concerns and Inquiries.
      </span>
      <div className="FAQ-Accordion-parent">
        {accordion.map((que) => {
          return (
            <div key={que.id} className="FAQ-Accordion-child">
              <div
                className={
                  accordionId === que.id
                    ? "Accordion-activeQue"
                    : "Accordion-child-Question"
                }
              >
                <span>
                  {que.id}. {que.question}
                </span>
                <span id="FAQ-chevron" onClick={() => handleAccordion(que.id)}>
                  <FaChevronDown />
                </span>
              </div>
              <div
                className={`${
                  accordionId === que.id
                    ? "Accordion-ActiveAns"
                    : "Accordion-child-Answer"
                }`}
              >
                <span>{que.answer}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
