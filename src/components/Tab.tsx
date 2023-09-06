import React, { useState } from "react";

const Tab = () => {
  const arr = ["Procedure", "Providers", "Health System", "Health Plans"];
  const [active, setActive] = useState("Health System");
  return (
    <div className="bg-[#01363D]">
      <h1 className="py-10 text-6xl font-bold text-white mx-52">Browse All</h1>
      <div className="flex flex-row gap-5 px-5 py-10 bg-white mx-52">
        {arr.map((x) => (
          <button
            onClick={() => setActive(x)}
            className={`cursor-pointer ${
              active === x ? "rounded-3xl bg-[#01363D] p-2 text-white" : ""
            } `}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tab;

// const Button = ({ label }: { label: string }) => {
//   const [active, setActive] = useState(false);
//   return (
//     <button onClick={} className="rounded-3xl bg-[#01363D] p-2 text-white">{label}</button>
//   );
// };
