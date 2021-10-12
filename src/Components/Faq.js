import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [footerOne, setFooterOne] = useState(true);
  const [footerTwo, setFooterTwo] = useState(true);
  const [footerThree, setFooterThree] = useState(true);

  return (
    <main className="w-full md:hidden mb-52">
      <section className="">
        <div className="faq-div" onClick={() => setFooterOne((prev) => !prev)}>
          کارجویان{" "}
          <span className="absolute top-0 left-0 transform translate-x-1/2 translate-y-1/2">
            <FontAwesomeIcon icon={footerOne ? faChevronDown : faChevronUp} />
          </span>
        </div>
        <ul style={{ display: "block", display: footerOne && "none" }}>
          <li className="faq-li">
            <a href="#">آگهی های استخدام</a>
          </li>
          <li className="faq-li">
            <a href="#">ورود / ثبت نام کارجو</a>
          </li>
          <li className="faq-li">
            <a href="#">ایمیل های اطلاع رسانی</a>
          </li>
          <li className="faq-li">
            <a href="#">رزومه ساز آنلاین</a>
          </li>
          <li className="faq-li">
            <a href="#">آشنایی با شرکت ها</a>
          </li>
        </ul>
      </section>
      <section>
        <div className="faq-div" onClick={() => setFooterTwo((prev) => !prev)}>
          کارفرمایان{" "}
          <span className="absolute top-0 left-0 transform translate-x-1/2 translate-y-1/2">
            <FontAwesomeIcon icon={footerTwo ? faChevronDown : faChevronUp} />
          </span>
        </div>
        <ul style={{ display: "block", display: footerTwo && "none" }}>
          <li className="faq-li">
            <a href="#">درج آگهی استخدام</a>
          </li>
          <li className="faq-li">
            <a href="#">ورود به بخش کارفرمایان</a>
          </li>
          <li className="faq-li">
            <a href="#">تعرفه ی انتشار آگهی</a>
          </li>
          <li className="faq-li">
            <a href="#">سؤالات متداول</a>
          </li>
        </ul>
      </section>
      <section>
        <div
          className="faq-div"
          onClick={() => setFooterThree((prev) => !prev)}
        >
          جابینجا{" "}
          <span className="absolute top-0 left-0 transform translate-x-1/2 translate-y-1/2">
            <FontAwesomeIcon icon={footerThree ? faChevronDown : faChevronUp} />
          </span>
        </div>
        <ul style={{ display: "block", display: footerThree && "none" }}>
          <li className="faq-li">
            <a href="#">تماس با جابینجا</a>
          </li>
          <li className="faq-li">
            <a href="#">جابینجا در رسانه ها</a>
          </li>
          <li className="faq-li">
            <a href="#">راهنمای استفاده برای کارجویان</a>
          </li>
          <li className="faq-li">
            <a href="#">وبلاگ</a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Faq;
