import * as React from "react";
import MySwiper from "./MySwiper";

export interface ISwiperListProps {}
const dataprocedure = [
  {
    id: 1,
    title: "Basic metabolic panel",
    price: "$144",
    text: "Avg. Cash Price",
  },
  {
    id: 2,
    title: "Basic metabolic panel",
    price: "$144",
    text: "Avg. Cash Price",
  },
  {
    id: 3,
    title: "Basic metabolic panel",
    price: "$144",
    text: "Avg. Cash Price",
  },
  {
    id: 4,
    title: "Basic metabolic panel",
    price: "$144",
    text: "Avg. Cash Price",
  },
];
const dataprovider = [
  {
    id: 1,
    image:
      "https://ucarecdn.com/05e498a4-07e8-4b18-acd5-3375dba6cfb5/-/resize/72x72/",
    name: "Paloma Health",
    text: "New York, NY",
    verify: true,
  },
  {
    id: 2,
    image:
      "https://ucarecdn.com/05e498a4-07e8-4b18-acd5-3375dba6cfb5/-/resize/72x72/",

    name: "Paloma Health",
    text: "New York, NY",
  },
  {
    id: 3,
    image:
      "https://ucarecdn.com/05e498a4-07e8-4b18-acd5-3375dba6cfb5/-/resize/72x72/",

    name: "Paloma Health",
    text: "New York, NY",
  },
  {
    id: 4,
    image:
      "https://ucarecdn.com/05e498a4-07e8-4b18-acd5-3375dba6cfb5/-/resize/72x72/",

    name: "Paloma Health",
    text: "New York, NY",
  },
  {
    id: 5,
    image:
      "https://ucarecdn.com/05e498a4-07e8-4b18-acd5-3375dba6cfb5/-/resize/72x72/",

    name: "Paloma asdasdasdasdas",
    text: "New York, NY",
  },
  {
    id: 6,
    image:
      "https://ucarecdn.com/05e498a4-07e8-4b18-acd5-3375dba6cfb5/-/resize/72x72/",

    name: "Paloma ababab",
    text: "New York, NY",
  },
  {
    id: 7,
    image:
      "https://ucarecdn.com/05e498a4-07e8-4b18-acd5-3375dba6cfb5/-/resize/72x72/",

    name: "Paloma Health",
    text: "New York, NY",
  },
  {
    id: 8,
    image:
      "https://ucarecdn.com/05e498a4-07e8-4b18-acd5-3375dba6cfb5/-/resize/72x72/",

    name: "Paloma Health 111",
    text: "New York, NY",
  },
];
const datapayer = [
  { id: 1, name: "Atena of NY", text: "New York", letter: "A" },
  { id: 2, name: "Atena of NY", text: "New York", letter: "A" },
  { id: 3, name: "Atena of NY", text: "New York", letter: "A" },
  { id: 4, name: "Atena of NY", text: "New York", letter: "A" },
  { id: 5, name: "Atena of NY", text: "New York", letter: "A" },
  { id: 6, name: "Atena of NY", text: "New York", letter: "A" },
  { id: 7, name: "Atena of NY", text: "New York", letter: "A" },
];

export function SwiperList(props: ISwiperListProps) {
  return (
    <div className="z-10 p-5 md:px-10 md:py-10 lg:px-56 bg-slate-100">
      <MySwiper
        data={dataprocedure}
        title="Browse by procedure."
        buttonContent="Compare Providers"
      />
      <MySwiper
        data={dataprovider}
        title="Browse by provider."
        buttonContent="View Services"
      />
      <MySwiper
        data={datapayer}
        title="Browse by payer."
        buttonContent="View Services"
      />
    </div>
  );
}
