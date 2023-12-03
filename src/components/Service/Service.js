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
      <div className="services w-full">
        <div className="my-20 px-4 mx-auto sm:container grid ss:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="service-box, bg-1 py-8">
            <div className=" flex items-center flex-col ss:w-full">
              <img className="pt-8" src={image1} alt="" />
              <h3 className="text-lg font-bold uppercase text-white pb-2.5 pt-5">
                Aniqlik
              </h3>
              <p className="text-center text-white text-sm px-8">
                Sizni uzoq kuttirmagan holda biz sizning ostonangizga qadam
                bosamiz.
              </p>
            </div>
          </div>
          <div className="service-box, bg-2 py-8 ">
            <div className="flex items-center flex-col ss:w-full">
              <img className="pt-8" src={image2} alt="" />
              <h3 className="text-lg font-bold uppercase text-white pb-2.5 pt-5">
                Hamyonbop
              </h3>
              <p className="text-center text-white text-sm px-8 ">
                Bizdan hamyonbop narxlarda yuqori darajadagi xizmatni qabul
                qiling.{" "}
              </p>
            </div>
          </div>
          <div className="service-box, bg-3 py-8">
            <div className="flex items-center flex-col ss:w-full">
              <img className="pt-8" src={image3} alt="" />
              <h3 className="text-lg font-bold uppercase text-white pb-2.5 pt-5">
                Sifat
              </h3>
              <p className="text-center text-white text-sm px-5 ">
                Tajribali santexniklarimiz muntazam texnik xizmat ko'rsatishdan
                tortib murakkab ta'mirlashgacha, vaqt sinovidan o'tgan ajoyib
                mahoratdan boshqa hech narsa kutmang.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="service-btns flex justify-center items-center  ">
        <div className="container mx-auto grid place-content-center sm:grid-cols-2 ss:grid-cols-1 gap-8  lg:px-[250px]">
          <div className="realtive btn-boxes mx-auto grid justify-center items-center ">
            <img
              className=" icon absolute  bg-Pblue p-[25px]  rounded-full"
              src={phone}
              alt=""
            />
            <button className="realtive ml-10 h-18 bg-white rounded-full  w-full py-6 ss:pl-[50px]  ss:pr-[26px] sm:pl-[40px]  sm:pr-[50px] md:pl-[60px] md:pr-[80px]">
              <a
                className="text-black text-base font-semibold"
                href="tel:+998(99) 999 99 99">
                +998(99) 999 99 99
              </a>
            </button>
          </div>
          <div className="relative btn-boxes mx-auto grid justify-center items-center ">
            <img
              className="icon2 absolute bg-Pblue  p-[25px] rounded-full"
              src={address}
              alt=""
            />
            <button className="realtive ml-10 h-18 bg-white rounded-full w-full py-6 ss:pl-[60px] ss:pr-[75px] sm:pl-[45px] sm:pr-[100px] md:pl-[45px] md:pr-[120px]">
              <a
                className="text-black text-base font-semibold"
                href="https://www.google.com/maps/place/41%C2%B018'59.2%22N+69%C2%B014'31.5%22E/@41.316455,69.2395091,17z/data=!3m1!4b1!4m4!3m3!8m2!3d41.316451!4d69.242084?entry=ttu"
                target="_blank">
                Toshkent sh.
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
