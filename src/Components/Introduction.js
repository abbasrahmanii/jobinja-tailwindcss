import React from "react";

import section1 from "../images/asset 14.svg";
import section2 from "../images/asset 15.svg";
import section3 from "../images/asset 16.svg";

const Introduction = () => {
  const section = [
    {
      id: 1,
      pic: section1,
      header: "آشنایی با شرکت‌ها",
      title:
        "با معتبرترین شرکت‌های کشور آشنا شوید و محل کار آینده خود را هوشمندانه انتخاب کنید.",
      linkTitle: "مشاهده آشنایی با شرکت‌ها",
      link: "#",
    },
    {
      id: 2,
      pic: section2,
      header: "کشف فرصت‌های شغلی",
      title:
        "با جستجو در آگهی‌های استخدام، شغلی را انتخاب کنید که با شرایط ایده‌آل شما همخوانی دارد.",
      linkTitle: "جستجو در فرصت‌های شغلی",
      link: "#",
    },
    {
      id: 3,
      pic: section3,
      header: "آگاهی از مشاغل جدید",
      title:
        "با کمک ایمیل‌های اطلاع رسانی، فرصت‌های شغلی مناسب خود را از طریق ایمیل دریافت کنید.",
      linkTitle: "ایجاد ایمیل اطلاع‌ رسانی",
      link: "#",
    },
  ];
  return (
    <section className="hidden md:block md:py-4 bg-nav-section w-full border border-r-0 border-l-0 my-8">
      <div className="w-3/4 mx-auto flex flex-wrap justify-between">
        {section.map((sec, idx) => (
          <div
            className="md:w-full xl:w-1/3 xl:py-6 xl:px-4 flex items-start justify-around"
            key={idx}
          >
            <img
              src={sec.pic}
              alt={sec.linkTitle}
              className="md:w-8 xl:w-1/12"
            />
            <div className="w-10/12">
              <h1 className="text-gray-600 mr-1">{sec.header}</h1>
              <p className="text-lg leading-6">{sec.title}</p>
              <a
                className="text-employee hover:text-employee-hover"
                href={sec.link}
              >
                {sec.linkTitle}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Introduction;
