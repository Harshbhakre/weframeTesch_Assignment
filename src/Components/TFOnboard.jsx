import React from 'react'
import CountUp from 'react-countup';

const TFOnboard = () => {
  return (
    <div className="h-60 w-full ">
      <div>
        <h1 className="font-bold">Total Franchisees Onboard</h1>
      </div>
      <div className="flex justify-between items-center py-3">
        <div className="flex gap-x-4 justify-center items-center">
          <h1 className="text-[2rem] font-bold"><CountUp start={0} end={14} duartion={3} delay={1}/></h1>
          <img className="h-5" src="/imgs/7point9.svg" alt="" />
        </div>
        <img className="h-6" src="/imgs/MultiAvatars.svg" alt="" />
      </div>
      <div className="h-max w-full flex gap-x-2">
        <div className='bg-[#1F7EAA] h-3 w-[30%] rounded-2xl' />
        <div className='bg-[#2FBDFF] h-3 w-[20%] rounded-2xl' />
        <div className='bg-[#97DEFF] h-3 w-[50%] rounded-2xl' />
      </div>
      <div className='py-5 text-[0.8rem]'>
      <li className="step-item mt-1 mb-2">
          <span className="stage1-dot"></span>
          <span className="text text-[#455468]">Stage 1(Initial Inquiry)</span>
          <h1 className='font-bold text-[1.1rem]'>0<CountUp start={0} end={2} duartion={2} delay={0.5}/></h1>
        </li>
        <li className="step-item mt-1 mb-2">
          <span className="stage2-dot"></span>
          <span className="text text-[#455468]">Stage 2 (Documents Submission)</span>
          <h1 className='font-bold text-[1.1rem]'>0<CountUp start={0} end={7} duartion={7} delay={0.5}/></h1>
        </li>
        <li className="step-item mt-1">
          <span className="stage3-dot"></span>
          <span className="text text-[#455468]">Stage 3(Training)</span>
          <h1 className='font-bold text-[1.1rem]'>0<CountUp start={0} end={5} duartion={2} delay={0.5}/></h1>
        </li>
      </div>
    </div>
  );
}

export default TFOnboard
