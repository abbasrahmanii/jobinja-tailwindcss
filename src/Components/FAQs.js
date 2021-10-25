import React, { useState } from "react";
import { data } from "../data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [faqs, setFaqs] = useState(data);

  const toggleHandler = (index) => {
    setFaqs(
      faqs.map((faq) => {
        if (faq.id === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <main className="w-full md:hidden">
      {faqs.map((faq) => (
        <section
          key={faq.id}
          style={{
            transition: "all",
            transitionDuration: "5",
          }}
        >
          <div className="faq-div" onClick={() => toggleHandler(faq.id)}>
            <h3 className="p-3">{faq.question}</h3>{" "}
            <span className="absolute top-0 left-0 transform translate-x-1/2 translate-y-1/2">
              <FontAwesomeIcon icon={faq.open ? faChevronUp : faChevronDown} />
            </span>
          </div>
          <ul
            className={faq.open ? "" : "faq-open"}
            style={{
              transition: "all",
              transitionDuration: "5s",
              transform: "rotateX(-22%)",
            }}
          >
            {faq.answer.map((list) => (
              <li className="faq-li">{list.title}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
};

export default Faq;
