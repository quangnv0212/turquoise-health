import * as React from "react";

export interface IJoinTeamProps {}

export function JoinTeam(props: IJoinTeamProps) {
  return (
    <>
      <div className="relative w-full mt-52">
        <div className="flex flex-row justify-center gap-3 p-10 mx-20 px-52 jointeam absolute top-[-124px] left-28">
          <img
            src="https://static.turquoise.health/static/images/newHome-jobs-img.bf56ef7bdf0f.png"
            alt=""
          />
          <div className="">
            <p className="text-6xl font-bold">Join the team.</p>
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
        <div className="bg-[#01363D] flex text-white p-28 justify-center items-center flex-row gap-7 px-52">
          <div className="flex flex-col gap-4 w-[400px]">
            <p className="text-4xl font-bold">Stay updated.</p>
            <p className="">
              We have a lot to say about healthcare. But instead of shouting
              from the rooftops, we use email.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-5">
            <div className="">
              <input
                className="p-2 outline-0 rounded-3xl"
                type="text"
                name=""
                id=""
                placeholder="Email address..."
              />
            </div>

            <button className="px-5 py-2  font-bold text-black rounded-3xl bg-[#A8E6E1]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
