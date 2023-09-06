import * as React from "react";

export interface ISectionProps {
  children: any;
  title: string;
  desc: string;
  buttonText: string;
  bg?: string;
  text?: string;
}

export function Section({
  children,
  title,
  desc,
  buttonText,
  bg = "bg-white",
  text = "text-[#02363D]",
}: ISectionProps) {
  return (
    <div className={`${bg} py-10`}>
      <p className={` mb-0 text-6xl w-1/2 ${text} header-intro m-28 `}>
        {title}
      </p>
      <div
        className={`grid w-full grid-cols-2 ${text} gap-6 my-10 productPageParah mx-28`}
      >
        <div className={`mt-0 ${text}`}>
          <p>{desc}</p>
        </div>
        <div className="flex justify-end">
          <div className="">
            <button className="text-white bg-[#196E6F] rounded-3xl px-4 py-2 font-bold">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row mx-28 gap-7">{children}</div>
    </div>
  );
}
