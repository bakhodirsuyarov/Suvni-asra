import React from "react";
import "./Service.css";
import image1 from "../../assets/service_timer_1 1.png";
import image2 from "../../assets/service_timer_1 1-2.png";
import image3 from "../../assets/service_timer_1 1-1.png";
import phone from "../../assets/phone-call (2).svg";
import address from "../../assets/map-pin.svg";

export default function Service() {
  return (
    <div className="services-wrapper bg-bgService">
      <div className="services  sm:px-5  md:px-5 flex-wrap justify-center  lg:px-48 xl:px-80 flex justify-between items-center py-20">
        <div className="service-box, w-96 h-72  bg-1 flex items-center flex-col mr-8 sm:mb-5 md: w-mdWidth mr-5 mb-5">
          <img className="pt-8" src={image1} alt="" />
          <h3 className="text-lg font-bold uppercase text-white pb-2.5 pt-5">
            Aniqlik
          </h3>
          <p className="text-center text-white text-sm px-8 pb-8">
            Sizni uzoq kuttirmagan holda biz sizning ostonangizga qadam bosamiz.
          </p>
        </div>
        <div className="service-box, w-96 h-72  bg-2 flex items-center flex-col mr-8 sm:mb-5 md: w-mdWidth mr-0 mb-5">
          <img className="pt-8" src={image2} alt="" />
          <h3 className="text-lg font-bold uppercase text-white pb-2.5 pt-5">
            Hamyonbop
          </h3>
          <p className="text-center text-white text-sm px-8 pb-8">
            Bizdan hamyonbop narxlarda yuqori darajadagi xizmatni qabul qiling.{" "}
          </p>
        </div>
        <div className="service-box, w-96 h-72  bg-3 flex items-center flex-col sm:mb-5 md: w-mdWidth">
          <img className="pt-8" src={image3} alt="" />
          <h3 className="text-lg font-bold uppercase text-white pb-2.5 pt-5">
            Sifat
          </h3>
          <p className="text-center text-white text-sm px-8 pb-8">
            Tajribali santexniklarimiz muntazam texnik xizmat ko'rsatishdan
            tortib murakkab ta'mirlashgacha, vaqt sinovidan o'tgan ajoyib
            mahoratdan boshqa hech narsa kutmang.
          </p>
        </div>
      </div>

      <div className="service-btns flex justify-center items-center pb-14">
        <div className="realtive btn-boxes flex items-center">
          <img className=" icon absolute  bg-Pblue p-6 rounded-full" src={phone} alt=""/>
          <button className="realtive ml-10  h-18 bg-white rounded-full py-6 pl-20 pr-28 mr-14">
            <a className="text-black text-base font-semibold"  href="tel:+998(99) 999 99 99"> +998(99) 999 99 99</a>
          </button>
        </div>
        <div className="btn-boxes flex items-center">
          <img  className="icon2 absolute  bg-Pblue p-6 rounded-full" src={address}  alt=""/>
          <button className="realtive ml-10  h-18 bg-white rounded-full py-6 pl-20 pr-28">
            <a className="text-black text-base font-semibold" href="#!"> Toshkent sh.</a>
          </button>
        </div>
      </div>
    </div>
  );
}
