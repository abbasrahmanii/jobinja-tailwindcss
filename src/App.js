import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faBuilding,
  faMapMarkerAlt,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./images/asset 3.png";
import home from "./images/asset 4.png";
import job from "./images/asset 5.png";
import resume from "./images/asset 6.png";
import company from "./images/asset 7.png";
import office from "./images/office.png";
import main1 from "./images/main1.png";
import main2 from "./images/main2.jpg";
import main3 from "./images/main3.jpg";
import main4 from "./images/main4.jpg";
import main5 from "./images/main5.png";
import main6 from "./images/main6.jpg";

function App() {
  const cardItems = [
    { id: 1, title: "کاوه نگار", pic: main1 },
    { id: 2, title: "دیجیکالا", pic: main2 },
    { id: 3, title: "رصد سرمایه هوشمند", pic: main3 },
    { id: 4, title: "صنایع کابل کرمان", pic: main4 },
    { id: 5, title: "شابش", pic: main5 },
    { id: 6, title: "انتشارات خیلی سبز", pic: main6 },
  ];
  const jobs = [
    {
      id: 1,
      title: "استخدام کارشناس بازاریابی و فروش",
      company: "سفیر تجارت آرسس",
      city: "تهران",
    },
    {
      id: 2,
      title: "استخدام توسعه‌دهنده PHP/Laravel) Back-End-مشهد)",
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

  const lastedAds = [
    {
      id: 1,
      title: "استخدام کارشناس بازاریابی و فروش",
      company: "سفیر تجارت آرسس",
      city: "تهران",
    },
    {
      id: 2,
      title: "استخدام توسعه‌دهنده PHP/Laravel) Back-End-مشهد)",
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
    <div className=" min-h-screen font-serif">
      <div className="w-full bg-nav sticky top-0 left-0 z-50 shadow-xl">
        <header className="container mx-auto w-11/12 lg:w-11/12 text-white h-20 lg:h-16 flex justify-between">
          <nav className="flex">
            <ul className="hidden lg:flex items-center divide-x-2 divide-gray-600 divide-x-reverse">
              <a className="px-4 bg-nav-active py-5 min-w-max" href="#">
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
          <div className="w-full flex items-center justify-between lg:divide-x-2 lg:divide-gray-600 lg:divide-x-reverse">
            <div>
              <a
                className="w-24 px-2 py-2 ml-2 bg-gray-600 rounded-md lg:hidden my-auto"
                href="#"
              >
                <FontAwesomeIcon icon={faBars} />
              </a>
              <a className="w-24 px-2 py-2 lg:hidden my-auto " href="#">
                <FontAwesomeIcon
                  icon={faSearch}
                  color="gray"
                  className="hover:text-white"
                />
              </a>
            </div>
            <div className="order-2 lg:order-1">
              <a className="px-2 py-2 ml-2" href="#">
                <FontAwesomeIcon
                  icon={faBell}
                  color="gray"
                  className="hover:text-white"
                />
              </a>
              <a className="px-2 py-2" href="#">
                <FontAwesomeIcon
                  icon={faUser}
                  color="gray"
                  className="hover:text-white"
                />
              </a>
            </div>

            <a className="w-24 px-2 lg:px-4 py-5 order-1 lg:order-2" href="#">
              <img className="object-cover" src={logo} alt="logo" />
            </a>
          </div>
        </header>
      </div>
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
          <section className="flex flex-wrap bg-gray-700 bg-opacity-70 p-6 justify-center md:container lg:mb-8 w-full space-y-4 lg:space-y-0 lg:space-x-px rounded-md">
            <input
              className="w-full lg:w-60 p-2 outline-none border-none rounded-sm block lg:inline lg:ml-px"
              type="text"
              placeholder="عنوان شغلی، مهارت یا..."
            />
            <select
              className="w-72 lg:w-60 p-2 text-gray-600 outline-none border-none rounded-sm hidden lg:inline"
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
            <select
              className="w-72 lg:w-60 p-2 text-gray-600 outline-none border-none rounded-sm hidden lg:inline"
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
            <input
              className="w-full lg:w-60 p-2 bg-button focus:bg-button-hover font-semibold text-xl cursor-pointer rounded-sm block lg:inline"
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
      <main className="w-full bg-white mb-10">
        <section className="container mx-auto md:w-9/12 xl:py-8 flex flex-wrap justify-between items-center cursor-pointer space-x-4 space-y-6">
          {cardItems.map((card) => (
            <a key={card.id} className="mt-6" href="#">
              <div className="div-card">
                <img src={card.pic} alt={card.title} className="w-8/12" />
                <p className="p-card">{card.title}</p>
              </div>
            </a>
          ))}
        </section>
      </main>
      <main className="container mx-auto">
        <header className="border-2 border-gray-300 rounded-sm pb-8 mb-8">
          <h4 className="py-2 px-3 border-b-2 border-gray-300 mb-4 bg-gray-50 text-lg">
            استخدام‌های فوری امروز
          </h4>
          <section className="flex flex-col space-y-4 ">
            {jobs.map((job) => (
              <a
                className="flex relative border-2 border-gray-300 rounded-md mx-4 hover:card-hover"
                key={job.id}
                href="#"
              >
                <div className="p-4">
                  <p className=" text-employee font-light">{job.title}</p>
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
        <h4 className="py-2 px-3 border border-t-4 border-b-0 rounded-t-md border-employee text-employee bg-gray-50 text-lg inline-block">
          آخرین آگهی‌ها
        </h4>
        <section className="border-2 border-gray-300 rounded-sm pb-8 mb-8 w-1/2">
          <div className="divide-y-2 divide-solid divide-gray-300 w-5/6 mx-auto">
            {lastedAds.map((ad) => (
              <a className="flex relative" key={ad.id} href="#">
                <div className="p-4">
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
    </div>
  );
}

export default App;
