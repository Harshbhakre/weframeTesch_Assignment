import React, { useEffect, useState } from 'react';
import Options from './Components/Options';
import AccountProgress from './Components/AccountProgress';
import TFOnboard from './Components/TFOnboard';
import KIFeedback from './Components/KIFeedback';
import FWellbeing from './Components/FWellbeing';
import PLeads from './Components/PLeads';
import PQuestions from './Components/PQuestions';
import ChatBot from './Components/ChatBot';
import MobileOption from './Components/MobileOption';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const checkDevice = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  return (
    <div className='flex font-["Inter"] flex-col sm:flex-row'>
      {!isMobile && <Options />}
      {showSidebar && (
        <MobileOption setShowSidebar={setShowSidebar} />
        
      )}
      <div className='w-full h-screen bg-[#F6F7FB] overflow-y-auto'>
       
        <div className='h-15 w-full border-b-2 border-[#D9D9D9] flex justify-end items-center px-5 gap-x-4 relative'>
          {isMobile && (
            <a onClick={() => setShowSidebar(true)}
            className='absolute left-4'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
          )}
          <img className='h-6 cursor-pointer hover:rotate-90 duration-300 transition-all' src="/imgs/setting-icon.svg" alt="" />
          <img className='h-8 cursor-pointer' src="/imgs/Avatar.svg" alt="" />
        </div>

      
        <div className='px-4 py-5 flex flex-col gap-5 sm:flex-row sm:items-start'>
          <div className='w-full sm:w-1/3'><AccountProgress /></div>
          
          <div className='flex flex-col sm:flex-row gap-4 w-full'>
            <div className='flex flex-col gap-4 w-full sm:w-1/2'>
              <div className='border border-[#D9D9D9] rounded-md p-5 w-full'><TFOnboard /></div>
              <div className='border border-[#D9D9D9] rounded-md p-5 w-full'><FWellbeing /></div>
            </div>

            <div className='flex flex-col gap-4 w-full sm:w-1/2'>
              <div className='border border-[#D9D9D9] rounded-md p-5 w-full'><KIFeedback /></div>
              <div className='border border-[#D9D9D9] rounded-md p-5 w-full'><PLeads /></div>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row sm:px-4 border-t border-[#D9D9D9]'>
          <div className='w-80'><PQuestions /></div>
          <div className='w-full'><ChatBot /></div>
        </div>
      </div>
    </div>
  );
};

export default App;
