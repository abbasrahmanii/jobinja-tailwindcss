import React from "react";

import main1 from "../images/main1.png";
import main2 from "../images/main2.jpg";
import main3 from "../images/main3.jpg";
import main4 from "../images/main4.jpg";
import main5 from "../images/main5.png";
import main6 from "../images/main6.jpg";

const Cards = () => {
  const cardItems = [
    { id: 1, title: "کاوه نگار", pic: main1 },
    { id: 2, title: "دیجیکالا", pic: main2 },
    { id: 3, title: "رصد سرمایه هوشمند", pic: main3 },
    { id: 4, title: "صنایع کابل کرمان", pic: main4 },
    { id: 5, title: "شابش", pic: main5 },
    { id: 6, title: "انتشارات خیلی سبز", pic: main6 },
  ];
  return (
    <main className="w-full bg-white mb-10">
      <section className="container mx-auto md:w-3/4 xl:py-8 grid grid-cols-3 lg:grid-cols-6 justify-between items-center cursor-pointer gap-4">
        {cardItems.map((card) => (
          <a key={card.id} className="mt-6" href="https://jobinja.ir">
            <div className="div-card p-2">
              <img src={card.pic} alt={card.title} className="w-2/3" />
              <p className="p-card h-5 w-max">{card.title}</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
};

export default Cards;
