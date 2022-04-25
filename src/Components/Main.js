import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMapMarkerAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <main className="object-cover w-full bg-cover bg-landing-page xl:h-96 xl:relative">
      <section className="flex flex-col items-center w-full xl:h-46 bg-opacity-90 xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 justify-items-center">
        <section className="inline-block w-full p-2 mt-12 bg-gray-100 md:p-6 md:rounded-t-3xl md:w-max bg-opacity-90">
          <h1 className="mb-1 text-lg text-center lg:mb-3 lg:text-4xl">
            تعداد{" "}
            <span className="tracking-tighter text-red-600 border-b-2 border-red-600 border-dashed">
              ۱۶,۵۵۴
            </span>{" "}
            آگهی استخدام فعال در{" "}
            <span className="tracking-tighter text-red-600 border-b-2 border-red-600 border-dashed">
              ۶,۳۸۱
            </span>{" "}
            شرکت ایرانی
          </h1>
          <p className="text-center text-gray-600 lg:text-lg">
            سامانه کاریابی آنلاین با بیشترین تعداد آگهی استخدام در ایران
          </p>
        </section>
        <section className="flex flex-wrap justify-center w-full p-6 space-y-4 bg-gray-700 bg-opacity-70 md:container lg:mb-8 lg:max-w-max lg:space-y-0 lg:space-x-px lg:rounded-md">
          <div className="flex items-center w-full p-3 bg-white rounded-sm lg:p-4 lg:w-max ">
            <FontAwesomeIcon icon={faSearch} className="ml-4" color="gray" />
            <input
              className="block w-full border-none outline-none lg:w-60 lg:inline lg:ml-px"
              type="text"
              placeholder="عنوان شغلی، مهارت یا..."
            />
          </div>
          <div className="items-center hidden p-4 bg-white rounded-sm lg:flex">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="ml-4"
              color="gray"
            />
            <select
              className="hidden text-gray-600 border-none outline-none w-72 lg:w-60 lg:inline"
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
          <div className="items-center hidden p-4 bg-white rounded-sm lg:flex">
            <FontAwesomeIcon icon={faBars} className="ml-4" color="gray" />
            <select
              className="text-gray-600 outline-none w-72 lg:w-60 border-nonehidden lg:inline"
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
            className="block w-full p-2 text-xl font-semibold rounded-sm cursor-pointer lg:w-48 bg-button focus:bg-button-hover lg:inline"
            type="button"
            value="جستجو در مشاغل"
          />
        </section>
      </section>
      <section className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-blue-500 to-green-600 xl:absolute xl:left-0 xl:bottom-0">
        <a
          className="p-1 text-lg font-bold leading-none text-white border-b-2 border-dashed"
          href="#"
        >
          مشاهده همه آگهی های استخدام
        </a>
      </section>
    </main>
  );
};

export default Main;
