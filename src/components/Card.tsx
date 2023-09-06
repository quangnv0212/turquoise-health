import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export interface ICardProps {
  buttonContent: string;
  title?: string;
  price?: string;
  text?: string;
  image?: string;
  name?: string;
  letter?: string;
}

export function Card({
  buttonContent,
  text,
  title,
  price,
  image,
  name,
  letter,
}: ICardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-white p-5 border text-center hover:border-[#0D5256] ">
      {title && <p className="font-bold">{title}</p>}
      {image && <img src={image}></img>}
      {letter && (
        <p className="flex items-center justify-center w-20 h-20 text-5xl bg-orange-200 rounded-full text-orange-50">
          <span>{letter}</span>
        </p>
      )}
      <div className="flex flex-col gap-2">
        {price && <p className="text-4xl font-bold text-center">{price}</p>}
        {name && <p className="font-bold">{name}</p>}
        <p className="text-gray-500">{text}</p>
      </div>
      <button className="px-6 hover:bg-[#0D5256] hover:text-white py-2 font-bold border rounded-3xl border-[#0D5256]">
        {buttonContent}
      </button>
    </div>
  );
}
