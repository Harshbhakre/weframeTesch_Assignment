import React from "react";

const PQuestions = () => {
  return (
    <div className="py-3 sm:px-0 px-3 h-full sm:w-73 w-100 ">
      <h1 className="font-bold">Pending Questions</h1>
      <div className="border-t-1 border-[#D9D9D9] pr-3 md:mt-2 mt-5 rounded-md">
        <div className=" h-10 mt-4 flex items-center justify-between text-[0.7rem] ">
          <div className="flex justify-center items-center gap-x-4">
            <span className="h-2 w-2 bg-[#2FBDFF] rounded-full"></span>
            <img className="h-8" src="/imgs/PQAvatar1.svg" alt="" />
            <div className="flex flex-col leading-4">
              <h1 className="text-[0.8rem] text-[#344054] font-bold">
                Phoenix Baker
              </h1>
              <p className="text-[0.8rem] text-[#475467]">@phoenix</p>
            </div>
          </div>
          <div>
            <h1 className="text-[0.8rem] text-[#344054]">5min ago</h1>
          </div>
        </div>
        <p className="text-[0.8rem] text-[#344054] pl-6">
          What are the requirements for opening a new store?
        </p>
      </div>
      <div className="border-t-1 border-[#D9D9D9] pr-3 rounded-md md:mt-2 mt-5">
        <div className=" h-10 mt-4 flex items-center justify-between text-[0.7rem] ">
          <div className="flex justify-center items-center gap-x-4">
            <span className="h-2 w-2 bg-[#2FBDFF] rounded-full"></span>
            <img className="h-8" src="/imgs/PQAvatar2.svg" alt="" />
            <div className="flex flex-col leading-4">
              <h1 className="text-[0.8rem] text-[#344054] font-bold">
              Koray Okumus
              </h1>
              <p className="text-[0.8rem] text-[#475467]">@koray</p>
            </div>
          </div>
          <div>
            <h1 className="text-[0.8rem] text-[#344054]">4hr ago</h1>
          </div>
        </div>
        <p className="text-[0.8rem] text-[#344054] pl-6">
        How do I manage inventory effectively?</p>
      </div>
    </div>
  );
};

export default PQuestions;
