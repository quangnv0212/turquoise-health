import { verify } from "crypto";
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
  verify?: boolean;
}

export function Card({
  buttonContent,
  text,
  title,
  price,
  image,
  name,
  letter,
  verify,
}: ICardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-white p-5 border text-center hover:border-[#0D5256] ">
      {title && <p className="font-semibold  card-title">{title}</p>}
      {image && <img src={image}></img>}
      {letter && (
        <p className="flex text-[#E29578] font-bold items-center justify-center w-20 h-20 text-5xl bg-[#FFDDD2] rounded-full text-orange-50">
          <span>{letter}</span>
        </p>
      )}
      <div className="flex flex-col gap-2">
        {price && (
          <p className="text-[45px] header-intro  font-bold text-[#0D5256] text-center">
            {price}
          </p>
        )}
        {name && (
          <p className="flex text-[#02363D] font-semibold ">
            {name}{" "}
            {verify && (
              <img
                src="	https://static.turquoise.health/static/images/verified.045aa10d32b6.svg"
                alt=""
                className="mx-2"
              />
            )}
          </p>
        )}

        <p className=" text-[#02363D] opacity-70">{text}</p>
      </div>
      <button className="px-6 hover:bg-[#0D5256] hover:text-white py-2 text-[#0D5256] font-bold border rounded-3xl border-[#0D5256]">
        {buttonContent}
      </button>
    </div>
  );
}
