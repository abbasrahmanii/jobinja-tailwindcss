import React from "react";

import resume from "../images/asset 0.png";
import person from "../images/asset 1.jpeg";

const Resume = () => {
  return (
    <main className="container w-full lg:w-9/12 flex flex-wrap items-stretch h-auto justify-around">
      <a href="#" className="w-5/12 rounded-sm border-2 border-gray-300">
        <img src={resume} alt="resume" className="w-full object-cover h-full" />
      </a>
      <section className="flex flex-col justify-between w-5/12 min-h-0 rounded-sm bg-nav-active border-2 border-gray-300">
        <div className="bg-nav-active text-white flex flex-col my-auto py-2 px-2">
          <p className="mb-3">
            جابینجا با معرفی فرصت‌های شغلی که هیچ جای دیگر نمی‌دیدم، به من کمک
            کرد تا موقعیت شغلی جدیدم را بهتر انتخاب کنم.
          </p>
          <p>بهزاد شعبانی</p>
        </div>
        <img src={person} alt="jobinja" className="w-full" />
      </section>
      <section>
        <h1 className="text-gray-700">
          از{" "}
          <a href="#" className="text-employee">
            وبلاگ
          </a>{" "}
          جابینجا
        </h1>
      </section>
    </main>
  );
};

export default Resume;
