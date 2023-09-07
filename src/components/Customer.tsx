import * as React from "react";
import { Section } from "./Section";

export interface ICustomerProps {}
const CustomerDesktop = () => (
  <Section
    bg="bg-[#02363d]"
    title="Our customers speak for themselves."
    buttonText="Press Media"
    bgButton="bg-[#A8E6E1] text-black"
    text="text-white"
    desc="Turquoise Health was created for patients, so we love it when they say nice things about us. We also love it when they mention us in articles, media, and academic studies."
  >
    <div className="flex">
      <div className="p-10 bg-white">
        <img
          src="	https://static.turquoise.health/static/images/quote-sign.e50f65d9294d.svg"
          alt=""
          className="w-10 h-10"
        />
        <p className="w-8/12 text-2xl font-bold text-black">
          [I] recently got a few confusing bills from a hospital, and the tool
          gave me confidence that [I] wasn't being overcharged for certain
          procedures.
        </p>
      </div>
      <img
        src="https://static.turquoise.health/static/images/testimonial-img.cea2bc3b42a0.png"
        alt=""
        style={{
          borderTopRightRadius: 160,
        }}
      />
    </div>
    <div className="flex gap-3 my-10">
      <img src="https://static.turquoise.health/static/images/wsj-logo-wht.32032801f755.svg" />
      <img src="	https://static.turquoise.health/static/images/forbes-logo-wht.da6414ff086b.svg" />
      <img src="https://static.turquoise.health/static/images/nyt-logo-wht.5637b97aac27.svg" />
      <img src="https://static.turquoise.health/static/images/newHomepage-axios-logo.1deecda61f3a.svg" />
    </div>
  </Section>
);
const CustomerMobile = () => (
  <>
    <Section
      bg="bg-[#02363d]"
      title="Our customers speak for themselves."
      buttonText="Press Media"
      bgButton="bg-[#A8E6E1] text-black"
      text="text-white"
      desc="Turquoise Health was created for patients, so we love it when they say nice things about us. We also love it when they mention us in articles, media, and academic studies."
    >
      <div className="hidden lg:block">
        <img
          src="https://static.turquoise.health/static/images/testimonial-img.cea2bc3b42a0.png"
          alt=""
          style={{
            borderTopRightRadius: 160,
          }}
        />
        <div className="p-10 bg-white">
          <img
            src="	https://static.turquoise.health/static/images/quote-sign.e50f65d9294d.svg"
            alt=""
            className="w-20 h-20"
          />
          <p className="text-2xl font-bold text-black">
            [I] recently got a few confusing bills from a hospital, and the tool
            gave me confidence that [I] wasn't being overcharged for certain
            procedures.
          </p>
        </div>
      </div>
      <div className="my-5 md:hidden">
        <img
          src="https://static.turquoise.health/static/images/testimonial-img.cea2bc3b42a0.png"
          alt=""
          className="w-96 h-96"
          style={{
            borderTopRightRadius: 160,
          }}
        />
        <div className="p-3 bg-white ">
          <img
            src="	https://static.turquoise.health/static/images/quote-sign.e50f65d9294d.svg"
            alt=""
            className="w-5 h-5"
          />
          <p className="font-bold text-black ">
            [I] recently got a few confusing bills from a hospital, and the tool
            gave me confidence that [I] wasn't being overcharged for certain
            procedures.
          </p>
        </div>
      </div>
      <div className="flex hidden my-5 lg:hidden md:flex">
        <div className="p-10 bg-white ">
          <img
            src="	https://static.turquoise.health/static/images/quote-sign.e50f65d9294d.svg"
            alt=""
            className="w-5 h-5"
          />
          <p className="font-bold text-black ">
            [I] recently got a few confusing bills from a hospital, and the tool
            gave me confidence that [I] wasn't being overcharged for certain
            procedures.
          </p>
        </div>
      </div>
    </Section>
  </>
);
export function Customer(props: ICustomerProps) {
  return (
    <div>
      <div className="hidden lg:block">
        <CustomerDesktop />
      </div>
      <div className="block lg:hidden">
        <CustomerMobile />
      </div>
    </div>
  );
}
