import * as React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
export interface IIntroProps {}

export function Intro(props: IIntroProps) {
  return (
    <>
      <div className="bg-[#01363D] intro flex justify-between px-52 py-28 pb-0 text-white">
        <div className=" text-white flex flex-col gap-10 w-[800px]">
          <p className="font-bold text-white text-7xl ">
            You can put a price on healthcare.
          </p>
          <p>
            Just like you wouldn’t buy a car, rent an apartment, or even order
            food without knowing the cost, you shouldn’t just pay for
            healthcare.
          </p>
          <div className="flex flex-row items-center justify-center gap-3 p-4 text-black bg-white border rounded-xl ">
            <SearchIcon></SearchIcon>
            <input
              type="text"
              placeholder="Enter service name or code..."
              className="w-full p-2 border-r-2 outline-0"
            />
            <LocationOnIcon></LocationOnIcon>
            <input
              type="text"
              placeholder="Enter location or provider name"
              className="w-full p-2 outline-0"
            />
            <button className="text-white bg-[#176F6F] p-2 rounded-2xl px-7 font-bold">
              Search
            </button>
          </div>
        </div>
        <img
          src="https://static.turquoise.health/static/images/new-home-bannerImage.92c4de7d77ec.png"
          alt=""
        />
      </div>
      <div className="bg-[#0D5256] flex flex-row gap-10 justify-center items-center p-6 text-white">
        <img
          src="https://static.turquoise.health/static/images/turquoiseOrganisationLeftIcon.d1371e7200e5.svg"
          alt=""
        />
        <p>Turquoise for organizations ›</p>
        <img
          src="	https://static.turquoise.health/static/images/turquoiseOrganisation-rightIcon.d8fcd833d036.svg"
          alt=""
        />
      </div>
    </>
  );
}
