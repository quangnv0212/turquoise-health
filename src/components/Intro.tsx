import * as React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
export interface IIntroProps {}

export function Intro(props: IIntroProps) {
  const IntroDesktop = () => (
    <>
      <div className="bg-[#01363D] h-[664px] relative lg:px-52 lg:py-28 pb-0 text-white p-11">
        <div className="text-white md:flex md:flex-col lg:w-full md:w-full">
          <p className="text-white header-intro hm-banner-info-h1 ">
            You can put a price on healthcare.
          </p>
          <p className="hm-banner-info">
            Just like you wouldn’t buy a car, rent an apartment, or even order
            food without knowing the cost, you shouldn’t just pay for
            healthcare.
          </p>
          <div className="hidden lg:flex flex-row max-w-[917px] items-center z-50 justify-center gap-3 p-4 text-black bg-white border rounded-[5px] ">
            <SearchIcon></SearchIcon>
            <input
              type="text"
              placeholder="Enter service name or code..."
              className="w-full p-2 border-r-2 outline-0"
            />
            <LocationOnIcon></LocationOnIcon>
            <input
              type="text"
              defaultValue={10001}
              placeholder="Enter location or provider name"
              className="w-full p-2 outline-0"
            />
            <button className="text-white banner-submit-btn bg-[#176F6F] p-2 rounded-2xl px-7 font-bold">
              Search
            </button>
          </div>
          <form className="my-4 lg:hidden">
            <div className="flex items-center px-5 py-3 bg-white border-b-2 rounded-lg rounded-b-none">
              <SearchIcon className="text-xl text-black"></SearchIcon>
              <input
                type="text"
                placeholder="Enter service name or code..."
                className="w-full p-2 text-black outline-0"
              />
            </div>
            <div className="flex items-center px-5 py-3 bg-white">
              <LocationOnIcon className="text-xl text-black"></LocationOnIcon>
              <input
                type="text"
                defaultValue={10001}
                placeholder="Enter service name or code..."
                className="w-full p-2 text-black outline-0"
              />
            </div>
            <button className="bg-[#176F6F] w-full py-5 font-bold rounded-b-lg">
              Search
            </button>
          </form>
        </div>
        <img
          src="https://static.turquoise.health/static/images/new-home-bannerImage.92c4de7d77ec.png"
          className="hidden lg:block absolute top-5 right-[250px] z-10 "
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
  const IntroMobile = () => (
    <>
      <div className="bg-[#01363D] text-white py-10 px-5">
        <p className="text-5xl font-bold header-intro">
          You can put a price on healthcare.
        </p>
        <p className="pt-10">
          Just like you wouldn’t buy a car, rent an apartment, or even order
          food without knowing the cost, you shouldn’t just pay for healthcare.
        </p>
        <form className="my-4">
          <div className="flex items-center px-5 py-3 bg-white border-b-2 rounded-lg rounded-b-none">
            <SearchIcon className="text-xl text-black"></SearchIcon>
            <input
              type="text"
              placeholder="Enter service name or code..."
              className="w-full p-2 text-black outline-0"
            />
          </div>
          <div className="flex items-center px-5 py-3 bg-white">
            <LocationOnIcon className="text-xl text-black"></LocationOnIcon>
            <input
              type="text"
              defaultValue={10001}
              placeholder="Enter service name or code..."
              className="w-full p-2 text-black outline-0"
            />
          </div>
          <button className="bg-[#176F6F] w-full py-5 font-bold rounded-b-lg">
            Search
          </button>
        </form>
      </div>
    </>
  );
  return (
    <div>
      <div className="hidden md:block">
        <IntroDesktop />
      </div>
      <div className="block md:hidden">
        <IntroMobile />
      </div>
    </div>
  );
}
