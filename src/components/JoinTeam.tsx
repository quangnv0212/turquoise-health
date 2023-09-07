import * as React from "react";

export interface IJoinTeamProps {}

export function JoinTeam(props: IJoinTeamProps) {
  const JoinTeamDesktop = () => (
    <div className="relative w-full mt-52">
      <div className="flex flex-row justify-center items-center gap-6 p-10 mx-20 px-52 jointeam absolute top-[-124px] left-28">
        <img
          src="https://static.turquoise.health/static/images/newHome-jobs-img.bf56ef7bdf0f.png"
          alt=""
        />
        <div className="">
          <p className="text-6xl font-bold header-intro">Join the team.</p>
          <p>
            We’re on a journey to help everyday Americans to know the price of
            healthcare. You in?
          </p>
        </div>
        <div className="">
          <button className="px-5 py-2 text-white rounded-3xl bg-[#01363D]">
            Job Opening
          </button>
        </div>
      </div>
      <div className="bg-[#01363D] grid grid-cols-2 text-white p-28 pt-40  gap-7 px-52">
        <div className="flex flex-col w-full gap-4">
          <p className="text-4xl font-bold header-intro">Stay updated.</p>
          <p className="">
            We have a lot to say about healthcare. But instead of shouting from
            the rooftops, we use email.
          </p>
        </div>
        <div className="grid items-center grid-cols-2 gap-5">
          <div className="w-full">
            <input
              className="py-2 px-5 w-[300px] outline-0 rounded-3xl"
              type="text"
              name=""
              id=""
              placeholder="Email address..."
            />
          </div>
          <div className="flex items-center">
            <button className="px-5 py-2 font-bold text-black rounded-3xl bg-[#A8E6E1]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  const JoinTeamMobile = () => (
    <>
      <div className="px-3 py-10 md:px-5 md:mx-14 jointeam">
        <div className="">
          <img
            src="https://static.turquoise.health/static/images/newHome-jobs-img.bf56ef7bdf0f.png"
            alt=""
            className="p-5"
          />
          <p className="text-4xl font-bold header-intro">Join the team.</p>
          <p className="w-full my-3 mr-10 lg:w-full">
            We’re on a journey to help everyday Americans to know the price of
            healthcare. You in?
          </p>
          <button className="px-5 py-2 text-white rounded-3xl bg-[#01363D]">
            Job Opening
          </button>
        </div>
      </div>
      <div className="bg-[#01363D] text-white p-5 py-16 md:flex md:px-10 ">
        <div className="">
          <p className="text-4xl font-bold header-intro">Stay updated.</p>
          <p className="my-3">
            We’re on a journey to help everyday Americans to know the price of
            healthcare. You in?
          </p>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Email address..."
            className="w-full px-4 py-2 rounded-3xl"
          />
          <button className="px-5 my-5 py-2 font-bold text-black w-full rounded-3xl bg-[#A8E6E1]">
            Submit
          </button>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div>
        <div className="hidden lg:block">
          <JoinTeamDesktop />
        </div>
        <div className="block lg:hidden">
          <JoinTeamMobile />
        </div>
      </div>
    </>
  );
}
