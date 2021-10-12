import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMapMarkerAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <main className="bg-landing-page bg-cover w-full xl:h-96 object-cover xl:relative">
      <section className="flex w-full xl:h-46 bg-opacity-90 xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 flex-col justify-items-center items-center">
        <section className="bg-gray-100 p-2 mt-12 md:p-6 md:rounded-t-3xl w-full inline-block md:w-max bg-opacity-90">
          <h1 className="text-center mb-1 lg:mb-3 text-lg lg:text-4xl">
            تعداد{" "}
            <span className="text-red-600 border-dashed border-b-2 border-red-600 tracking-tighter">
              ۱۶,۵۵۴
            </span>{" "}
            آگهی استخدام فعال در{" "}
            <span className="text-red-600 border-dashed border-b-2 border-red-600 tracking-tighter">
              ۶,۳۸۱
            </span>{" "}
            شرکت ایرانی
          </h1>
          <p className="text-center text-gray-600 lg:text-lg">
            سامانه کاریابی آنلاین با بیشترین تعداد آگهی استخدام در ایران
          </p>
        </section>
        <section className="flex flex-wrap bg-gray-700 bg-opacity-70 p-6 justify-center md:container lg:mb-8 lg:max-w-max w-full space-y-4 lg:space-y-0 lg:space-x-px lg:rounded-md">
          <div className="bg-white flex items-center p-3 lg:p-4 rounded-sm w-full lg:w-max ">
            <FontAwesomeIcon icon={faSearch} className="ml-4" color="gray" />
            <input
              className="w-full lg:w-60 outline-none border-none block lg:inline lg:ml-px"
              type="text"
              placeholder="عنوان شغلی، مهارت یا..."
            />
          </div>
          <div className="bg-white hidden lg:flex items-center p-4 rounded-sm">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="ml-4"
              color="gray"
            />
            <select
              className="w-72 lg:w-60 text-gray-600 outline-none border-none hidden lg:inline"
              name="city"
              id="city-select"
            >
              <option value="">همه استان ها</option>
              <option value="tehran">تهران</option>
              <option value="mashhad">خراسان رضوی</option>
              <option value="isfahan">اصفهان</option>
              <option value="tabriz">تبریز</option>
              <option value="ahwaz">خوزستان</option>
              <option value="qom">قم</option>
            </select>
          </div>
          <div className="bg-white items-center p-4 rounded-sm  hidden lg:flex">
            <FontAwesomeIcon icon={faBars} className="ml-4" color="gray" />
            <select
              className="w-72 lg:w-60 text-gray-600 outline-none border-nonehidden lg:inline"
              name="category"
              id="category-select"
            >
              <option value="">همه دسته بندی ها</option>
              <option value="web">وب، برنامه نویسی و نرم افزار</option>
              <option value="sale">فروش و بازاریابی</option>
              <option value="content">تولید و مدیریت محتوا</option>
              <option value="financial">مالی و حسابداری</option>
              <option value="official">مسئول دفتر، اجرائی و اداری</option>
            </select>
          </div>
          <input
            className="w-full lg:w-48 p-2 bg-button focus:bg-button-hover font-semibold text-xl cursor-pointer rounded-sm block lg:inline"
            type="button"
            value="جستجو در مشاغل"
          />
        </section>
      </section>
      <section className="w-full flex justify-center items-center py-4 bg-gradient-to-r from-blue-500 to-green-600 xl:absolute xl:left-0 xl:bottom-0">
        <a
          className="text-white text-lg p-1 border-b-2 border-dashed leading-none font-bold"
          href="#"
        >
          مشاهده همه آگهی های استخدام
        </a>
      </section>
    </main>
  );
};

export default Main;
