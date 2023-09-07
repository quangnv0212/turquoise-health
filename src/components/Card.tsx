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
    <div className="flex flex-col items-center justify-center gap-2 bg-white p-4 px-6 border text-center hover:border-[#0D5256] lg:w-[286px] md:m-5  ">
      {title && (
        <p className="py-5 card-title text-[#02363D] font-semibold">{title}</p>
      )}
      {image && <img src={image} className="pt-7"></img>}
      {letter && (
        <p className="flex text-[#E29578] font-bold items-center justify-center w-20 h-20 text-5xl bg-[#FFDDD2] rounded-full text-orange-50">
          <span>{letter}</span>
        </p>
      )}
      <div className="flex flex-col">
        {price && (
          <p className="text-[36px] header-intro pt-3 font-bold text-[#176F6F] text-center">
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
      <button className="px-10 w-full my-3 border-2 py-3 hover:bg-[#176F6F] hover:text-white text-[14px] text-[#176F6F] font-bold rounded-[50px] border-[#0D5256]">
        {buttonContent}
      </button>
      {letter && <div className="h-5"></div>}
    </div>
  );
}
