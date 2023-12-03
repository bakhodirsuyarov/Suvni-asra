import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Image } from '@chakra-ui/react'
import "swiper/css";
import "swiper/css/effect-fade";
import img1 from "../../assets/Frame 42.png";
import img2 from "../../assets/Frame 43.png";
import img3 from "../../assets/Frame 44.png";
import img4 from "../../assets/Frame 45.png";

const Carousel = () => {
  return (
    <>
      <Swiper
      className="blur-[1px]"
        spaceBetween={1}
        centeredSlides={true}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay, EffectFade]}>
        <SwiperSlide>
          <Image src={img1} className="w-full h-[590px]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img2} className="w-full h-[590px]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img3} className="w-full h-[590px]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img4} className="w-full h-[590px]" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
