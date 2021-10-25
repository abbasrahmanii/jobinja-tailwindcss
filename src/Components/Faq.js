import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [footerOne, setFooterOne] = useState(false);
  const [footerTwo, setFooterTwo] = useState(false);
  const [footerThree, setFooterThree] = useState(false);

  return (
    <main className="w-full md:hidden mb-52">
      <section className="">
        <div
          className="faq-div"
          onClick={() => {
            setFooterOne((prev) => !prev);
            setFooterTwo(false);
            setFooterThree(false);
          }}
        >
          <h3 className="p-3">کارجویان</h3>{" "}
          <span className="absolute top-0 left-0 transform translate-x-1/2 translate-y-1/2">
            <FontAwesomeIcon icon={footerOne ? faChevronUp : faChevronDown} />
          </span>
          {/* <ul style={{ display: footerOne ? "block" : "none" }}> */}
          <ul className={"faq-answer" + (footerOne ? "faq-open" : "")}>
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
        </div>
      </section>
      <section>
        <div
          className="faq-div"
          onClick={() => {
            setFooterTwo((prev) => !prev);
            setFooterOne(false);
            setFooterThree(false);
          }}
        >
          <h3 className="p-3">کارفرمایان</h3>{" "}
          <span className="absolute top-0 left-0 transform translate-x-1/2 translate-y-1/2">
            <FontAwesomeIcon icon={footerTwo ? faChevronUp : faChevronDown} />
          </span>
          <ul style={{ display: footerTwo ? "block" : "none" }}>
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
        </div>
      </section>
      <section>
        <div
          className="faq-div"
          onClick={() => {
            setFooterThree((prev) => !prev);
            setFooterOne(false);
            setFooterTwo(false);
          }}
        >
          <h3 className="p-3">جابینجا</h3>
          <span className="absolute top-0 left-0 transform translate-x-1/2 translate-y-1/2">
            <FontAwesomeIcon icon={footerThree ? faChevronUp : faChevronDown} />
          </span>
          <ul style={{ display: footerThree ? "block" : "none" }}>
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
        </div>
      </section>
    </main>
  );
};

export default Faq;
