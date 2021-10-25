import React from "react";

import resume from "../images/asset 0.png";
import person from "../images/asset 1.jpeg";
import blog1 from "../images/1_main.jpg";
import blog2 from "../images/2_main.png";
import blog3 from "../images/3_main (1).jpg";

const Resume = () => {
  return (
    <main className="container flex flex-wrap items-stretch justify-around w-full h-auto mx-auto mb-8 lg:container">
      <a href="#" className="w-5/12 border-2 border-gray-300 rounded-sm">
        <img src={resume} alt="resume" className="object-cover w-full h-full" />
      </a>
      <section className="flex flex-col justify-between w-5/12 min-h-0 border-2 border-gray-300 rounded-sm bg-nav-active">
        <div className="flex flex-col px-2 py-2 my-auto text-white bg-nav-active">
          <p className="mb-3">
            جابینجا با معرفی فرصت‌های شغلی که هیچ جای دیگر نمی‌دیدم، به من کمک
            کرد تا موقعیت شغلی جدیدم را بهتر انتخاب کنم.
          </p>
          <p>بهزاد شعبانی</p>
        </div>
        <img src={person} alt="jobinja" className="w-full" />
      </section>
      {/* <section className="w-full">
        <section className="flex flex-wrap justify-around">
            <div>
              از
              <a href="https://jobinja.ir/blog" target="_blank">
                وبلاگ
              </a>
              جابینجا
            </div>
            <a
              href="https://jobinja.ir/blog/posts/5-points-for-find-your-dream-job"
              target="_blank"
              className="block w-full sm:w-6/12 md:w-full"
            >
              <img
                src="https://thumb.jobinjacdn.com/ASLoCpHlCPJCGl9Q-iXWWk20jyE=/294x168/filters:strip_exif():format(jpeg)/https://storage.jobinjacdn.com/other/misc_images_blob/f/e/2/246697-fe2e308cb4c15420b6e25ed979c11a1f6df97a4a/1_main.jpg"
                alt="۵ نکته برای یافتن شغل رویایی‌تان"
                title="۵ نکته برای یافتن شغل رویایی‌تان"
              />
              <span className="block w-7/12">۵ نکته برای یافتن شغل رویایی‌تان</span>
            </a>
            <div className="w-full">
              <a
                target="_blank"
                href="https://jobinja.ir/blog/posts/5-points-for-find-your-dream-job"
              >
                <span className="block w-full md:hidden">
                  <span className="block w-5/12">
                    <span className="block">
                      <img
                        src="https://thumb.jobinjacdn.com/ASLoCpHlCPJCGl9Q-iXWWk20jyE=/294x168/filters:strip_exif():format(jpeg)/https://storage.jobinjacdn.com/other/misc_images_blob/f/e/2/246697-fe2e308cb4c15420b6e25ed979c11a1f6df97a4a/1_main.jpg"
                        alt="۵ نکته برای یافتن شغل رویایی‌تان"
                        title="۵ نکته برای یافتن شغل رویایی‌تان"
                      />
                    </span>
                  </span>
                  <span className="block w-7/12">
                    ۵ نکته برای یافتن شغل رویایی‌تان
                  </span>
                </span>
              </a>
              <a
                target="_blank"
                href="https://jobinja.ir/blog/posts/16-reasons-unemployed"
                className="block w-full md:w-full sm:w-6/12"
              >
                <span className="block w-full">
                  <span className="block w-5/12">
                    <span className="block">
                      <img
                        src="https://thumb.jobinjacdn.com/hVUlZ-sqV9gxMLC5cm7VAm-c-QI=/294x168/filters:strip_exif():format(jpeg)/https://storage.jobinjacdn.com/other/misc_images_blob/53047-0c75e46b07517c34c22de41b101fcbfb0de07c69/1_main.jpg"
                        alt="https://thumb.jobinjacdn.com/hVUlZ-sqV9gxMLC5cm7VAm-c-QI=/294x168/filters:strip_exif():format(jpeg)/https://storage.jobinjacdn.com/other/misc_images_blob/53047-0c75e46b07517c34c22de41b101fcbfb0de07c69/1_main.jpg"
                        title="۱۶ دلیل برای اینکه هنوز بی‌کار هستید؟"
                      />
                    </span>
                  </span>
                  <span className="block w-7/12">
                    ۱۶ دلیل برای اینکه هنوز بی‌کار هستید؟
                  </span>
                </span>
              </a>
              <a
                target="_blank"
                href="https://jobinja.ir/blog/posts/10-ways-successful-people-spend-their-time-after-work-part-2"
                className="block w-full sm:w-6/12 md:w-full"
              >
                <span className="block w-full">
                  <span className="w-5/12">
                    <span>
                      <img
                        src="https://thumb.jobinjacdn.com/ziDjDvbjboo7P-2Nf72iMtAvxsU=/294x168/filters:strip_exif():format(png)/https://storage.jobinjacdn.com/other/misc_images_blob/655094-a18479bd89d01c97786c16a5ff556fe097935293/1_main.png"
                        alt="https://thumb.jobinjacdn.com/ziDjDvbjboo7P-2Nf72iMtAvxsU=/294x168/filters:strip_exif():format(png)/https://storage.jobinjacdn.com/other/misc_images_blob/655094-a18479bd89d01c97786c16a5ff556fe097935293/1_main.png"
                        title="۱۰ کار که افراد موفق بعد از ساعات کاری انجام می‌دهند! – قسمت ۲"
                      />
                    </span>
                  </span>
                  <span className="block w-7/12">
                    ۱۰ کار که افراد موفق بعد از ساعات کاری انجام می‌دهند! – قسمت
                    ۲
                  </span>
                </span>
              </a>
            </div>
        </section>
      </section> */}
    </main>
  );
};

export default Resume;
