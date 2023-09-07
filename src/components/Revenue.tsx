import * as React from "react";
import { Section } from "./Section";

export interface IRevenueProps {}
const dataList = [
  {
    id: 1,
    icon: "https://static.turquoise.health/static/images/newHome-ico-duo-providers.81b13be3c4f6.svg",
    title: "For providers",
    desc: "Harness price transparency as a competitive edge without staffing up or spreading thin.",
    people:
      "	https://static.turquoise.health/static/images/newHome-solution-img-provider.74087a4a2a2d.png",
  },
  {
    id: 2,
    icon: "	https://static.turquoise.health/static/images/newHome-ico-duo-payers.3edbe7f6c688.svg",
    title: "For payers",
    desc: "Harness price transparency as a competitive edge without staffing up or spreading thin.",
    people:
      "		https://static.turquoise.health/static/images/newHome-solution-img-payer.79c1e5fe5e7f.png",
  },
  {
    id: 3,
    icon: "https://static.turquoise.health/static/images/newHome-ico-duo-employers.d04d54d6bef6.svg",
    title: "For employers",
    desc: "Harness price transparency as a competitive edge without staffing up or spreading thin.",
    people:
      "https://static.turquoise.health/static/images/newHome-solution-img-employer.2ded6ec2a83b.png",
  },
];

export function Revenue(props: IRevenueProps) {
  return (
    <Section
      title="Modernizing the revenue cycle."
      desc="We welcome like-minded partners. From channel to brand and product partnerships, we’ve joined with the industry’s newest, oldest, and boldest."
      buttonText="View Partner"
    >
      <div className="justify-center gap-7 md:grid md:grid-cols-3 md:mb-24">
        {dataList.map((x) => (
          <Cards
            key={x.id}
            desc={x.desc}
            icon={x.icon}
            people={x.people}
            title={x.title}
          />
        ))}
      </div>
    </Section>
  );
}

const Cards = ({
  icon,
  title,
  desc,
  people,
}: {
  icon: string;
  title: string;
  desc: string;
  people: string;
}) => {
  return (
    <div className="flex flex-col gap-5 p-4 pb-0 mt-5 border lg:my-0 hover:border-black">
      <img className="w-11 h-11" src={icon} alt="" />
      <p className="text-2xl font-bold">{title}</p>
      <p>{desc}</p>
      <p className="font-bold underline">Learn More</p>
      <img src={people} alt="" />
    </div>
  );
};
