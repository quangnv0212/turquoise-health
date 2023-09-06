import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { A11y, Navigation, Pagination } from "swiper";
import { Card } from "./Card";

export default function MySwiper({
  title,
  buttonContent,
  data,
}: {
  title: string;
  buttonContent: string;
  data: any[];
}) {
  return (
    <div className="flex flex-col gap-10 my-16">
      <div className="flex flex-row justify-between">
        <p className="text-5xl font-bold">{title}</p>
        <button className="text-white bg-[#196E6F] rounded-3xl px-4 py-2 font-bold">
          View All
        </button>
      </div>
      <div className="">
        <Swiper
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={30}
        >
          {data.map((x) => (
            <SwiperSlide key={x.id}>
              <Card
                price={x.price}
                text={x.text}
                title={x.title}
                buttonContent={buttonContent}
                image={x.image}
                name={x.name}
                letter={x.letter}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
