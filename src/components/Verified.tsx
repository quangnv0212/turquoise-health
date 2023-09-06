import React from "react";

const Verified = () => {
  return (
    <div className="bg-[#01363D] flex text-white px-52 w-full py-10 flex-row gap-20 py-36 ">
      <div className="w-2/3">
        <p className="text-sm font-bold">TURQUOISE VERIFIED</p>
        <p className="py-4 text-3xl font-bold">
          Are you a transparent provider or payer?
        </p>
        <p>
          Claims your organization's profile and turn price transparency into a
          competitive edge.
        </p>
      </div>
      <div className="flex items-center w-1/3">
        <button className="p-5 button px-7 font-bold rounded-[48px] bg-cyan-500">
          Get Verified
        </button>
      </div>
    </div>
  );
};

export default Verified;
