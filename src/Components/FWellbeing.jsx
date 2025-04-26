import React from 'react'
import CountUp from 'react-countup'

const FWellbeing = () => {
  return (
    <div className="h-full w-full ">
    <div className='border-b-1 h-28 border-[#D9D9D9]'>
    <div>
      <h1 className="font-bold">Financial Wellbeing</h1>
    </div>
    <div className="flex justify-between items-center pt-3">
          <h1 className="text-[2rem] font-bold"><CountUp start={0} end={20} duartion={2} delay={0.5}/></h1>
        <img className="h-5" src="/imgs/2point9.svg" alt="" />
      </div>
      <p className='text-[0.8rem] text-[#475467] leading-0'>Total Franchisees</p>
        </div>
        <div className='flex gap-y-4 gap-x-3'>
            <div className='my-3 rounded-md h-20 w-1/2 bg-[#EAECF0] flex flex-col justify-center items-center gap-y-3 hover:scale-110 duration-300 transition-all hover:shadow-2xl'>
            <p className='text-[0.8rem]'>Target</p>
            <h1 className='font-semibold text-[1.2rem]'>$<CountUp start={0} end={500000} duartion={2} delay={2}/></h1>
            </div>
            <div className='my-3 rounded-md h-20 w-1/2 bg-[#EAECF0] flex flex-col justify-center items-center gap-y-3 hover:scale-110 duration-300 transition-all hover:shadow-2xl'>
            <p className='text-[0.8rem]'>Current</p>
            <h1 className='font-semibold text-[1.2rem] font-[]'>$<CountUp start={0} end={450000} duartion={2} delay={4}/></h1>
            </div>
        </div>
    </div>
  )
}

export default FWellbeing
