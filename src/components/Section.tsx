import * as React from "react";

export interface ISectionProps {
  children: any;
  title: string;
  desc: string;
  buttonText: string;
  bg?: string;
}

export function Section({
  children,
  title,
  desc,
  buttonText,
  bg = "bg-white",
}: ISectionProps) {
  return (
    <div className={`${bg} py-10`}>
      <p className={`w-1/2 mb-0 text-5xl font-bold m-28 `}>{title}</p>
      <div className="flex flex-row justify-center gap-6 mt-10 m-28">
        <div className="w-1/2 mt-0 ">
          <p>{desc}</p>
        </div>
        <div className="flex flex-row items-end justify-end w-1/2">
          <button className="text-white bg-[#196E6F] rounded-3xl px-4 py-2 font-bold">
            {buttonText}
          </button>
        </div>
      </div>
      <div className="flex flex-row mx-28 gap-7">{children}</div>
    </div>
  );
}
