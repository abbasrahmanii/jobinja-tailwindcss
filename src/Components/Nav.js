import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faSearch,
  faSignInAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/asset 3.png";
import home from "../images/asset 4.png";
import job from "../images/asset 5.png";
import resume from "../images/asset 6.png";
import company from "../images/asset 7.png";
import office from "../images/office.png";

const Nav = () => {
  return (
    <div className="sticky top-0 left-0 z-50 w-full shadow-xl bg-nav">
      <header className="container flex justify-between w-full h-20 mx-auto text-white md:container lg:w-9/12 lg:h-16">
        <nav className="flex">
          <ul className="items-center hidden divide-x-2 divide-x-reverse divide-gray-600 lg:flex">
            <a className="px-4 py-5 bg-nav-active min-w-max" href="#">
              <li>
                <img className="w-4 ml-2" src={home} alt="home" /> خانه
              </li>
            </a>
            <a className="px-4 py-5 hover:bg-nav-active min-w-max" href="#">
              <li>
                <img className="w-4 ml-2" src={job} alt="home" /> جستجوی مشاغل
              </li>
            </a>
            <a className="px-4 py-5 hover:bg-nav-active min-w-max" href="#">
              <li>
                <img className="w-4 ml-2" src={resume} alt="home" /> رزومه ساز
              </li>
            </a>
            <a className="px-4 py-5 hover:bg-nav-active min-w-max" href="#">
              <li>
                <img className="w-4 ml-2" src={company} alt="home" />
                ۵۰ شرکت برتر
              </li>
            </a>
            <a className="px-4 py-5 hover:bg-nav-active min-w-max" href="#">
              <li>
                <img className="w-4 ml-2" src={office} alt="home" /> بخش
                کارفرمایان
              </li>
            </a>
          </ul>
        </nav>
        <div className="flex items-center justify-between w-full lg:hidden lg:divide-x-2 lg:divide-gray-600 lg:divide-x-reverse">
          <div>
            <a
              className="w-24 px-2 py-2 my-auto ml-2 bg-gray-600 rounded-md"
              href="#"
            >
              <FontAwesomeIcon icon={faBars} />
            </a>
            <a className="w-24 px-2 py-2 my-auto " href="#">
              <FontAwesomeIcon
                icon={faSearch}
                color="gray"
                className="hover:text-white"
              />
            </a>
          </div>
          <div className="order-2">
            <a className="px-2 py-2 ml-2" href="#">
              <FontAwesomeIcon
                icon={faBell}
                color="gray"
                className="hover:text-white"
              />
            </a>
            <Link className="px-2 py-2" to="/sign-up">
              <FontAwesomeIcon
                icon={faUser}
                color="gray"
                className="hover:text-white"
              />
            </Link>
          </div>
          <a className="order-1 w-24 px-2 py-5" href="#">
            <img className="object-cover" src={logo} alt="logo" />
          </a>
        </div>
        <div className="hidden divide-x-2 divide-x-reverse divide-gray-600 lg:flex ">
          <div className="flex items-center space-x-6">
            <a href="#" className="ml-4">
              <span className="text-gray-500">
                <FontAwesomeIcon icon={faBell} />
              </span>
            </a>
            <Link to="/sign-up">
              <span className="ml-2 text-gray-500">
                <FontAwesomeIcon icon={faUser} size="xs" />
              </span>
              ثبت نام کارجو
            </Link>
            <Link to="/sign-up">
              <span className="ml-2 text-gray-500">
                <FontAwesomeIcon icon={faSignInAlt} size="xs" />
              </span>
              ورود کارجو
            </Link>
          </div>
          <a className="w-24 px-2 py-5" href="#">
            <img className="object-cover" src={logo} alt="logo" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Nav;
