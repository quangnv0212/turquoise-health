import * as React from "react";

export interface ISectionProps {
  children: any;
  title: string;
  desc: string;
  buttonText: string;
  bg?: string;
  text?: string;
  bgButton?: string;
}

export function Section({
  children,
  title,
  desc,
  buttonText,
  bg = "bg-white",
  text = "text-[#02363D]",
  bgButton = "bg-[#196E6F] text-white",
}: ISectionProps) {
  const SectionDesktop = () => (
    <>
      <div className={`${bg} lg:py-8 lg:px-28 p-14 py-20 `}>
        <p
          className={` mb-0 mr-40  text-6xl lg:w-7/12  ${text} header-intro lg:mx-28 lg:mt-24 `}
        >
          {title}
        </p>
        <div
          className={`grid w-full grid-cols-2 ${text} gap-6 lg:my-10 my-5 productPageParah lg:px-28`}
        >
          <div className={`mt-0 ${text}`}>
            <p>{desc}</p>
          </div>
          <div className="flex items-end justify-end">
            <div className="">
              <button className={`${bgButton} rounded-3xl px-4 py-2 font-bold`}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
        <div className="lg:mx-28 gap-7">{children}</div>
      </div>
    </>
  );
  const SectionMobile = () => (
    <div className={`md:p-12 py-10  p-4 ${bg}`}>
      <p className={` mb-0 text-4xl ${text} header-intro `}>{title}</p>
      <p className={`mt-5 ${text}`}>{desc}</p>
      <button className={`${bgButton} my-5 rounded-3xl px-4 py-2 font-bold`}>
        {buttonText}
      </button>
      <div className="">{children}</div>
    </div>
  );

  return (
    <div>
      <div className="hidden md:block">
        <SectionDesktop />
      </div>
      <div className="block md:hidden">
        <SectionMobile />
      </div>
    </div>
  );
}
