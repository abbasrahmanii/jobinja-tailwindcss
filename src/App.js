import "./App.css";
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
  return (
    <div className=" min-h-screen font-serif">
      <header className="container w-full text-white bg-nav h-16 flex justify-evenly">
        <nav className="flex">
          <ul className="flex items-center divide-x-2 divide-gray-400 divide-x-reverse">
            <a className="px-4 bg-nav-active py-7" href="#">
              <li>
                <img className="w-4 ml-2" src={home} alt="home" /> خانه
              </li>
            </a>
            <a className="px-4 py-7 hover:bg-nav-active" href="#">
              <li>
                <img className="w-4 ml-2" src={job} alt="home" /> جستجوی مشاغل
              </li>
            </a>
            <a className="px-4 py-7 hover:bg-nav-active" href="#">
              <li>
                <img className="w-4 ml-2" src={resume} alt="home" /> رزومه ساز
              </li>
            </a>
            <a className="px-4 py-7 hover:bg-nav-active" href="#">
              <li>
                <img className="w-4 ml-2" src={company} alt="home" />
                ۵۰ شرکت برتر
              </li>
            </a>
            <a className="px-4 py-7 hover:bg-nav-active" href="#">
              <li>
                <img className="w-4 ml-2" src={office} alt="home" /> بخش
                کارفرمایان
              </li>
            </a>
          </ul>
        </nav>
        <div className="flex items-center divide-x-2 divide-gray-400 divide-x-reverse">
          <span className="px-4">Abbas Rahmani</span>
          <a className="w-24 px-4" href="#">
            <img className="object-cover" src={logo} alt="logo" />
          </a>
        </div>
      </header>
      <main className="bg-landing-page w-full h-96 object-cover relative">
        <section className=" bg-opacity-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-items-center items-center">
          <section className="bg-gray-100 p-6 rounded-t-3xl inline-block">
            <h1 className="text-center mb-3 text-4xl">
              تعداد{" "}
              <span className="text-red-600 border-dashed border-b-2 border-red-600">
                ۱۶,۵۵۴
              </span>{" "}
              آگهی استخدام فعال در{" "}
              <span className="text-red-600 border-dashed border-b-2 border-red-600">
                ۶,۳۸۱
              </span>{" "}
              شرکت ایرانی
            </h1>
            <p className="text-center text-lg">
              جابینجا: سامانه کاریابی آنلاین با بیشترین تعداد آگهی استخدام در
              ایران
            </p>
          </section>
          <section className="flex bg-gray-700 bg-opacity-70 p-6 mb-8 min-w-max space-x-px rounded-md">
            <input
              className="w-72 p-2 outline-none border-none rounded-sm"
              type="text"
              placeholder="عنوان شغلی، مهارت یا..."
            />
            <select
              className="w-72 p-2 text-gray-600 outline-none border-none rounded-sm"
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
              className="w-72 p-2 text-gray-600 outline-none border-none rounded-sm"
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
              className="w-48 p-2 bg-button focus:bg-button-hover font-semibold text-xl cursor-pointer rounded-sm"
              type="button"
              value="جستجو در مشاغل"
            />
          </section>
        </section>
        <section className="w-full flex justify-center items-center py-4 bg-gradient-to-r from-blue-500 to-green-600 absolute left-0 bottom-0 cursor-pointer">
          <a
            className="text-white text-xl border-b-2 border-dashed leading-none"
            href="#"
          >
            مشاهده همه آگهی های استخدام
          </a>
        </section>
      </main>
      <main className="w-full">
        <section className="container mx-auto w-8/12 h-16 py-8 flex justify-between  cursor-pointer">
          <a href="#">
            <div className="div-card">
              <img src={main1} alt="main1" className="w-8/12" />
              <p className="p-card">کاوه نگار</p>
            </div>
          </a>
          <a href="#">
            <div className="div-card">
              <img src={main2} alt="main2" className="w-8/12" />
              <p className="p-card">دیجیکالا</p>
            </div>
          </a>
          <a href="#">
            <div className="div-card">
              <img src={main3} alt="main3" className="w-8/12" />
              <p className="p-card">رصد سرمایه هوشمند</p>
            </div>
          </a>
          <a href="#">
            <div className="div-card">
              <img src={main4} alt="main4" className="w-8/12" />
              <p className="p-card">صنایع کابل کرمان</p>
            </div>
          </a>
          <a href="#">
            <div className="div-card">
              <img src={main5} alt="main5" className="w-8/12" />
              <p className="p-card">شابش</p>
            </div>
          </a>
          <a href="#">
            <div className="div-card">
              <img src={main6} alt="main6" className="w-8/12" />
              <p className="p-card">انتشارات خیلی سبز</p>
            </div>
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
