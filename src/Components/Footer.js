import React from "react";
import { data } from "../data";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import telegram from "../images/telegram.png";
import twitter from "../images/twitter.png";
import logo from "../images/asset 2.png";

const Footer = () => {
  const footer = data;
  return (
    <main className="border-t bg-nav border-nav-footer">
      <section className="flex flex-wrap w-full py-6 mx-auto md:py-8 md:container lg:w-9/12">
        {footer.map((list) => (
          <div
            key={list.id}
            className="hidden w-1/4 md:block md:w-1/3 lg:w-1/4"
          >
            <h1 className="py-2 text-lg font-thin text-gray-400 cursor-default">
              {list.question}
            </h1>
            <hr className="ml-4 border-gray-500" />
            <ul className="py-4 space-y-1">
              {list.answer.map((items) => (
                <li
                  key={items.id}
                  className="text-gray-200 cursor-pointer hover:text-yellow-500"
                >
                  {items.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col justify-between w-full md:w-1/3 lg:w-1/4 md:mx-auto">
          <div className="">
            <h1 className="hidden py-2 text-lg font-thin text-gray-400 lg:block">
              جابینجا در شبکه های اجتماعی
            </h1>
            <hr className="hidden border-gray-500 lg:block" />
            <ul className="flex justify-between w-5/12 mx-auto md:m-0 md:w-full py-4  md:space-x-10 md:space-x-reverse lg:-space-x-4 lg:space-x-reverse">
              <li className="w-2/12">
                <a
                  target="_blank"
                  rel="nofollow"
                  title="instagram"
                  href="https://www.instagram.com/myjobinja/"
                >
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li className="w-2/12">
                <a
                  target="_blank"
                  title="telegram"
                  rel="nofollow"
                  href="https://jobinja.ir/telegram"
                >
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li className="w-2/12">
                <a
                  target="_blank"
                  title="twitter"
                  rel="nofollow"
                  href="https://twitter.com/Jobinja_ir"
                >
                  <img src={telegram} alt="telegram" />
                </a>
              </li>
              <li className="w-2/12">
                <a
                  target="_blank"
                  title="linkedin"
                  rel="nofollow"
                  href="https://www.linkedin.com/company/10081041"
                >
                  <img src={linkedin} alt="linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full mx-auto">
            <div className="mx-auto md:m-0 w-14">
              <img src={logo} alt="jobinja" />
            </div>
            <p className="w-7/12 mx-auto mt-1 text-center text-nav-footer md:w-full md:m-0 md:text-right">
              با معتبرترین شرکت‌های کشور آشنا شوید و محل کار آینده خود را
              هوشمندانه انتخاب کنید.
            </p>
          </div>
        </div>
      </section>
      <p className="pb-5 mx-auto text-sm text-center text-nav-footer max-w-max">
        © ۱۴۰۰ - تمامی حقوق برای جابینجا محفوظ است.
      </p>
    </main>
  );
};

export default Footer;
