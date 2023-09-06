import * as React from "react";
import { Section } from "./Section";

export interface ITransparencyProps {}
const dataList = [
  {
    id: 1,
    img: "https://static.turquoise.health/static/images/care-search.1e850be29af4.svg",
    title: "Browse and compare available services in your area.",
    buttonText: "Search Care",
  },
  {
    id: 2,
    img: "	https://static.turquoise.health/static/images/newHome-priceTransparency-Icon.fb24134e6384.svg",
    title: "Hospital price transparency for consumers.",
    buttonText: "Learn More",
  },
  {
    id: 3,
    img: "https://static.turquoise.health/static/images/newHome-impactReports-icon.19785acc61c3.svg",
    title: "Price transparency impact reports",
    buttonText: "View All",
  },
];
export function Transparency(props: ITransparencyProps) {
  return (
    <Section
      bg="bg-slate-100"
      buttonText="Learn more"
      title="What the health is price transparency?"
      desc="Basically, hospitals and health plans are required by law to make their prices and charges publicly available. Turquoise Health gathers and displays those rates for patients so it’s easier to make cost-conscious decisions when receiving care."
    >
      <div className="grid grid-cols-3 gap-10">
        {dataList.map((x) => (
          <Cards img={x.img} title={x.title} buttonText={x.buttonText} />
        ))}
      </div>
    </Section>
  );
}

const Cards = ({ img, title, buttonText }: any) => {
  return (
    <div className="flex flex-col gap-5 p-4 bg-white border card hover:border-black">
      <img className="w-11 h-11" src={img} alt="" />
      <p className="text-2xl font-bold text-[#02363D]">{title}</p>
      <p>Best way to learn is to jump right in. It's how we learned to swim.</p>
      <p className="flex font-bold underline">
        {buttonText}{" "}
        <img
          src="https://static.turquoise.health/static/images/newHome-featureArrow.ecbf60058a7c.svg"
          alt=""
          className="mx-1"
        />
      </p>
    </div>
  );
};
