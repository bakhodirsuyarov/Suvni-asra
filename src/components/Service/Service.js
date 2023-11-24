import React from 'react'
import "./Service.css"
import image1 from "../../assets/service_timer_1 1.png"
import image2 from "../../assets/service_timer_1 1-2.png"
import image3 from "../../assets/service_timer_1 1-1.png"
import phone from "../../assets/phone-call (2).svg"
import address from "../../assets/map-pin.svg"

export default function Service() {
  return (
    <div className="services-wrapper">
      <div className='services flex justify-between items-center py-20 px-52 '>
      <div className="service-box, w-96 h-72  bg-1 flex items-center flex-col mr-8">
          <img className='pt-8' src={image1} alt="" />
          <h3 className='text-lg font-bold uppercase text-white pb-2.5 pt-5'>Aniqlik</h3>
          <p className='text-center text-white text-sm px-8 pb-8'>Sizni uzoq kuttirmagan holda biz sizning ostonangizga qadam bosamiz.</p>
      </div>
      <div className="service-box, w-96 h-72  bg-2 flex items-center flex-col mr-8">
          <img className='pt-8' src={image2} alt="" />
          <h3 className='text-lg font-bold uppercase text-white pb-2.5 pt-5'>Hamyonbop</h3>
          <p className='text-center text-white text-sm px-8 pb-8'>Bizdan hamyonbop narxlarda yuqori darajadagi xizmatni qabul qiling. </p>
      </div>
      <div className="service-box, w-96 h-72  bg-3 flex items-center flex-col">
          <img className='pt-8' src={image3} alt="" />
          <h3 className='text-lg font-bold uppercase text-white pb-2.5 pt-5'>Sifat</h3>
          <p className='text-center text-white text-sm px-8 pb-8'>Tajribali santexniklarimiz muntazam texnik xizmat ko'rsatishdan tortib murakkab ta'mirlashgacha, vaqt sinovidan o'tgan ajoyib mahoratdan boshqa hech narsa kutmang.</p>
      </div>
    </div>

        <div className="service-btns flex justify-center items-center">
          <div className="btn-boxes flex items-center">
              <img className='absolute  bg-Pblue p-6 rounded-full' src={phone} alt="" />
              <button className='realtive w-96 h-18 bg-white rounded-full py-6 pl-20 pr-28 mr-14'>
                <a className='text-black text-base font-semibold' href="tel:+998(99) 999 99 99">+998(99) 999 99 99</a>
              </button>
          </div>
          <div className="btn-boxes flex items-center">
              <img className='absolute  bg-Pblue p-6 rounded-full' src={address} alt="" />
              <button className='realtive w-96 h-18 bg-white rounded-full py-6 pl-20 pr-28'>
                <a className='text-black text-base font-semibold' href="#!">Toshkent sh.</a>
              </button>
          </div>
        </div>

    </div>
  )
}
