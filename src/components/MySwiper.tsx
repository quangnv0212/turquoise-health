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
  const SwiperDesktop = () => (
    <div className="">
      <div className="flex flex-col gap-10 my-4 pt-[60px]">
        <div className="flex flex-row justify-between">
          <p className="text-5xl font-bold header-intro text-[#02363D] ">
            {title}
          </p>
          <button className="text-white bg-[#196E6F] rounded-3xl px-4 py-2 font-bold">
            View All
          </button>
        </div>
        <div className="">
          <Swiper
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper p-30"
            spaceBetween={5}
          >
            <div className="flex flex-row justify-center gap-4">
              {data.map((x) => (
                <SwiperSlide className="aa" key={x.id}>
                  <Card
                    price={x.price}
                    text={x.text}
                    title={x.title}
                    buttonContent={buttonContent}
                    image={x.image}
                    name={x.name}
                    letter={x.letter}
                    verify={x.verify}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
  const SwiperMobile = () => (
    <div className="mb-20">
      <div className="items-end justify-between md:flex">
        <p className="text-5xl my-5 md:mr-72 font-bold header-intro text-[#02363D] ">
          {title}
        </p>
        <div className="justify-end md:flex">
          <button className="text-white bg-[#196E6F] rounded-3xl px-4 py-2 mb-6 font-bold">
            View All
          </button>
        </div>
      </div>

      <div className="">
        <div className="hidden md:block lg:hidden">
          <Swiper
            slidesPerView={2}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map((x) => (
              <SwiperSlide className="" key={x.id}>
                <Card
                  price={x.price}
                  text={x.text}
                  title={x.title}
                  buttonContent={buttonContent}
                  image={x.image}
                  name={x.name}
                  letter={x.letter}
                  verify={x.verify}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="block md:hidden lg:hidden">
          <Swiper
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map((x) => (
              <SwiperSlide className="" key={x.id}>
                <Card
                  price={x.price}
                  text={x.text}
                  title={x.title}
                  buttonContent={buttonContent}
                  image={x.image}
                  name={x.name}
                  letter={x.letter}
                  verify={x.verify}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="hidden lg:block">
        <SwiperDesktop />
      </div>
      <div className="block lg:hidden">
        <SwiperMobile />
      </div>
    </div>
  );
}
