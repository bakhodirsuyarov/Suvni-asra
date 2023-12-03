import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className=" w-full form pt-10 pb-14 ">
      <div className="flex justify-center">
        <form className="w-full flex flex-col ss:w-full ss:px-8 sm:container mx-auto lg:px-[250px]" action="">
          <input
            className="text-sm text-black font-normal rounded-lg outline-none input1 mb-2.5 py-4 px-5"
            type="text"
            placeholder="Ismingiz"
          />
          <input
            className="text-sm text-black font-normal rounded-lg outline-none input2 mb-2.5 py-4 px-5"
            type="tel"
            placeholder="Telefon raqamingiz"
          />
          <input
            className="text-sm text-black font-normal rounded-lg outline-none input3 mb-2.5 py-4 px-5"
            type="address"
            placeholder="Manzil"
          />
          <textarea
            className="text-sm text-black font-normal rounded-lg outline-none py-4 px-5 mb-5 h-32"
            name=""
            id=""
            placeholder="Izoh"></textarea>
          <button className="py-5 px-28 ss:px-10 lg:w-[400px] lg:m-auto  bg-bgbtn  text-sm font-bold text-textColor uppercase rounded-lg shadow-boxShadowbtn">
            buyurtma qoldirish
          </button>
        </form>
      </div>
    </div>
  );
}
