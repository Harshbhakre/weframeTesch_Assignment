import React, {  useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AccountProgress = () => {
    const stepsCompleted = ['Profile Setup', 'Initial Training', 'Legal Documents'];
    const stepsRemaining = ['Financial Integration','Final Review'];
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
      let percentage = 0    ;
      if (percentage >= 85) return;
  
      const interval = setInterval(() => {
        setPercentage(prev => {
          if (prev >= 85) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 50);
  
      return () => clearInterval(interval);
    }, [percentage]);
 

  return (
    <div className='flex flex-col h-138 sm:w-max justify-center items-center bg-[#F6F7FB] px-8 py-5 gap-y-4 border-1 border-[#D9D9D9] rounded-md'>
      <div className='flex flex-col justify-center items-center gap-y-5 border-b-1 border-[#D9D9D9] w-full pb-6'>
        <h2 className='font-bold text-[1rem]'>Account Progress</h2>
        <div style={{ width: 175, height: 175,fontWeight: 'bold', }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: '#2196f3',      
          trailColor: '#f4f4f4',    
          textColor: '#000',
          textSize: '1rem',
          pathTransitionDuration: 0.2,
          strokeLinecap: 'round',
        })}
      />
    
            </div>
      </div>
      <div className='flex flex-col gap-y-4 '>
        <div className='bg-[#EAECF0] pl-3 sm:w-max w-80 py-3 rounded-md hover:scale-110 duration-300 transition-all hover:shadow-2xl'>
            <h1 className='font-bold py-1 text-[0.9rem]'>Steps Completed</h1>
            <div className=' text-[0.8rem] sm:w-50 w-75 pr-3 leading-6'>
            <ul className="step-list ">
      {stepsCompleted.map((step, index) => (
        <li key={index} className="step-item">
          <span className="dot"></span>
          <span className="text text-[#455468]">{step}</span>
          <img src="/imgs/green-tik.svg" alt="" />
        </li>
      ))}
    </ul>
            </div>
        </div>
        <div className='bg-[#EAECF0] pl-3 py-3 rounded-md hover:scale-110 duration-300 transition-all hover:shadow-2xl'>
            <h1 className='font-bold py-1 text-[0.9rem]'>Steps Remaining</h1>
            <div className=' text-[0.8rem] sm:w-50 w-75 pr-3 leading-6'>
            <ul className="step-list ">
      {stepsRemaining.map((step, index) => (
        <li key={index} className="step-item">
          <span className="dot"></span>
          <span className="text text-[#455468]">{step}</span>
          <img className='opacity-25' src="/imgs/green-tik.svg" alt="" />
        </li>
      ))}
    </ul>
            </div>
        </div>
    
      </div>
    </div>
  )
}

export default AccountProgress
