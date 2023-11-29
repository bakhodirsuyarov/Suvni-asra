import React from "react";
import Carousel from "./HeaderCarousel";

const Header = () => {
  return (
    <div className="w-full relative bg-[rgba(0,0,0, .7)]">
      <Carousel/>
      <div className="w-full flex flex-col items-center justify-center text-center absolute top-0 left-0 right-0 z-[999] xl:py-[120px] xl:px-[415px] lg:px-[150px] md:py-[173px] md:px-[50px] sm:py-[175px] sm:px-[30px]  ">
        <h1 className="font-bold text-white text-center  md:text-[48px] sm:text-[36px]">
          Santexnika bo'yicha ishonchli hamkoringiz!
        </h1>
        <p className="font-medium mt-[20px] text-white text-[16px] text-center leading-[32px] ">
          Biz sizning ostonangizga tajriba, ishonchlilik va ajoyib xizmatni olib
          boramiz. Bizning malakali xodimlarimiz sizning ehtiyojlaringizni
          samarali va eng yuqori professionallik darajasi bilan hal qilishadi.
        </p>
        <button className=" w-[225px] mt-[60px] uppercase text-center  p-[18px] bg-[#FFC436] font-bold text-[15px] rounded-[8px]">
          Buyurtma berish
        </button>
      </div>
    </div>
  );
};

export default Header;
