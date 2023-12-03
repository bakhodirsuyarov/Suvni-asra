import React from "react";
import Carousel from "./HeaderCarousel";
import Router from 'react-router-dom';
const Header = () => {
  return (
    <div className="w-full relative bg-[rgba(0,0,0, .7)]">
      <Carousel />
      <div className="w-full flex flex-col items-center  text-center absolute top-0 left-0 right-0 z-[999]  ss:mt-[120px] ss:px-[20px] sm:px-[25px] sm:mt-[170px] md:mt-[180px] ">
        <h1 className="font-bold text-white text-center ss:text-[30px] sm:text-[36px]">
          Santexnika bo'yicha ishonchli hamkoringiz!
        </h1>
        <p className="font-medium mt-[20px] text-white xl:text-[16px] text-center leading-[32px] ss:leading-[25px] ss:text-[14px] sm:text-[16px]">
          Biz sizning ostonangizga tajriba, ishonchlilik va ajoyib xizmatni olib
          boramiz. Bizning malakali xodimlarimiz sizning ehtiyojlaringizni
          samarali va eng yuqori professionallik darajasi bilan hal qilishadi.
        </p>
        <button className=" w-[225px] mt-[60px] uppercase text-center  p-[18px] bg-[#FFC436] font-bold text-[15px] rounded-[8px] ss:w-[220px] ss:mt-[30px] ss:p-[15px]">
          Buyurtma berish
        </button>
      </div>
    </div>
  );
};

export default Header;
