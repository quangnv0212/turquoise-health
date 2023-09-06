import * as React from "react";
import { Section } from "./Section";

export interface ICustomerProps {}

export function Customer(props: ICustomerProps) {
  return (
    <Section
      bg="bg-[#02363d] text-white"
      title="Our customers speak for themselves."
      buttonText="Press Media"
      desc="Turquoise Health was created for patients, so we love it when they say nice things about us. We also love it when they mention us in articles, media, and academic studies."
    >
      <div className="flex">
        <div className="p-10 bg-white">
          <img
            src="	https://static.turquoise.health/static/images/quote-sign.e50f65d9294d.svg"
            alt=""
            className="w-10 h-10"
          />
          <p className="text-2xl font-bold text-black">
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
    </Section>
  );
}
