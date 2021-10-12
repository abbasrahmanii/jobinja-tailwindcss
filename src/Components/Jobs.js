import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "استخدام کارشناس بازاریابی و فروش",
      company: "سفیر تجارت آرسس",
      city: "تهران",
    },
    {
      id: 2,
      title: "استخدام توسعه‌دهنده بک اند - مشهد",
      company: "وسام",
      city: "خراسان رضوی",
    },
    {
      id: 3,
      title: "استخدام کارشناس آزمایشگاه (رنگ و پوشش-شهرقدس)",
      company: "مترا (موسسه تحقیقاتی رنگ امیرکبیر)",
      city: "تهران",
    },
    {
      id: 4,
      title: "استخدام کارشناس مکانیک",
      company: "آرند",
      city: "تهران",
    },
    {
      id: 5,
      title: "استخدام کارشناس ارشد خرید و تامین داخلی",
      company: "گوفر",
      city: "تهران",
    },
    {
      id: 6,
      title: "استخدام طراح سایت (وردپرس-خانم)",
      company: "صنوبر",
      city: "تهران",
    },
    {
      id: 7,
      title: "استخدام طراح سایت (وردپرس-خانم)",
      company: "صنوبر",
      city: "تهران",
    },
    {
      id: 8,
      title: "استخدام طراح سایت (وردپرس-خانم)",
      company: "صنوبر",
      city: "تهران",
    },
    {
      id: 9,
      title: "استخدام طراح سایت (وردپرس-خانم)",
      company: "صنوبر",
      city: "تهران",
    },
    {
      id: 10,
      title: "استخدام طراح سایت (وردپرس-خانم)",
      company: "صنوبر",
      city: "تهران",
    },
    {
      id: 11,
      title: "استخدام طراح سایت (وردپرس-خانم)",
      company: "صنوبر",
      city: "تهران",
    },
    {
      id: 12,
      title: "استخدام طراح سایت (وردپرس-خانم)",
      company: "صنوبر",
      city: "تهران",
    },
    {
      id: 13,
      title: "استخدام طراح سایت (وردپرس-خانم)",
      company: "صنوبر",
      city: "تهران",
    },
    {
      id: 14,
      title: "استخدام طراح سایت (وردپرس-خانم)",
      company: "صنوبر",
      city: "تهران",
    },
  ];

  const lastedAds = [
    {
      id: 1,
      title: "استخدام کارشناس بازاریابی و فروش",
      company: "سفیر تجارت آرسس",
      city: "تهران",
    },
    {
      id: 2,
      title: "استخدام توسعه‌دهنده بک اند - مشهد",
      company: "وسام",
      city: "خراسان رضوی",
    },
    {
      id: 3,
      title: "استخدام کارشناس آزمایشگاه (رنگ و پوشش-شهرقدس)",
      company: "مترا (موسسه تحقیقاتی رنگ امیرکبیر)",
      city: "تهران",
    },
    {
      id: 4,
      title: "استخدام کارشناس مکانیک",
      company: "آرند",
      city: "تهران",
    },
    {
      id: 5,
      title: "استخدام کارشناس ارشد خرید و تامین داخلی",
      company: "گوفر",
      city: "تهران",
    },
    {
      id: 6,
      title: "استخدام طراح سایت (وردپرس-خانم)",
      company: "صنوبر",
      city: "تهران",
    },
  ];
  return (
    <main className="container mx-auto lg:w-9/12 lg:flex">
      <header className="border-2 border-gray-300 rounded-md pb-8 lg:w-2/3 lg:ml-4 mb-4 lg:mb-0">
        <h4 className="py-2 px-3 border-b-2 border-gray-300 mb-4 bg-gray-50 text-lg">
          استخدام‌های فوری امروز
        </h4>
        <section className="flex flex-col space-y-4 lg:flex-row flex-wrap lg:items-start lg:justify-center">
          {jobs.map((job) => (
            <a
              className="flex relative border-2 border-gray-300 rounded-md mx-4 lg:w-5/12"
              key={job.id}
              href="#"
            >
              <div className="p-4">
                <p className=" text-employee font-light ml-7">{job.title}</p>
                <p className="text-gray-500">
                  <span>
                    <FontAwesomeIcon
                      className="ml-1 text-gray-300"
                      icon={faBuilding}
                    />
                  </span>
                  {job.company}{" "}
                  <span>
                    <FontAwesomeIcon
                      className="mx-1 text-gray-300"
                      icon={faMapMarkerAlt}
                    />
                  </span>{" "}
                  {job.city}
                </p>
              </div>
              <span className="py-px px-1 bg-employee-immediate text-white font-bold text-xs rounded-sm absolute left-3 top-3">
                فوری
              </span>
            </a>
          ))}
        </section>
      </header>
      <section className="pb-8 w-1/2 lg:w-1/3">
        <h4 className="py-2 px-3 border border-t-4 border-b-0 rounded-t-md border-employee text-employee bg-gray-50 text-lg inline-block">
          آخرین آگهی‌ها
        </h4>
        <div className="divide-y-2 divide-solid divide-gray-300 w-full mx-auto border-2 border-gray-300 rounded-md rounded-tr-none">
          {lastedAds.map((ad) => (
            <a className="flex relative w-11/12 mx-auto" key={ad.id} href="#">
              <div className="py-4">
                <p className=" font-light text-sm">{ad.title}</p>
                <p className="text-gray-500">
                  <span className="text-sm">
                    <FontAwesomeIcon
                      className="ml-1 text-gray-300"
                      icon={faBuilding}
                    />
                    {ad.company}
                  </span>
                  <span className="text-sm">
                    <FontAwesomeIcon
                      className="mx-1 text-gray-300"
                      icon={faMapMarkerAlt}
                    />
                    {ad.city}
                  </span>
                </p>
              </div>
              <span className="py-px px-1 text-gray-500 font-bold text-xs rounded-sm absolute left-3 bottom-3">
                امروز
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Jobs;
