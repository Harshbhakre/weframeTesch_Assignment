import React from "react";
import CountUp from "react-countup";

const KIFeedback = () => {
  return (
    <div className="h-full w-full ">
      <div className="border-b-1 h-32 border-[#D9D9D9]">
        <div>
          <h1 className="font-bold">Key Insights & Feedback</h1>
        </div>
        <div className="flex justify-between items-center py-3">
          <h1 className="text-[2rem] font-bold"><CountUp start={0} end={10} duartion={2} delay={0.5}/>%</h1>
          <img className="h-5" src="/imgs/2point9.svg" alt="" />
        </div>
        <p className="text-[0.8rem] text-[#475467] leading-0">
          Total Franchisees
        </p>
      </div>
      <div className="p-4 rounded-xl bg-[#EAECF0] w-full max-w-md mt-4 hover:scale-110 duration-300 transition-all hover:shadow-2xl">
        <h1 className="font-semibold text-sm text-[#101828] mb-2">Feedback</h1>
        <ul className="space-y-1">
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-[#D9D9D9] flex-shrink-0"></span>
            <span className="text-[13px] text-[#475467] font-medium leading-snug">
              Franchisees are requesting more detailed training materials.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KIFeedback;
