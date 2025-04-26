import React from 'react'

const ChatBot = () => {
  return (
    <div className='sm:h-full h-60 w-full bg-[#EAECF0]/50 flex justify-center items-center flex-col gap-y-5 relative' >
        <img className='border-1 border-[#d9d9d9] rounded-full absolute top-10 right-10' src="/imgs/AIButton.svg" alt="" />
      <div className='flex flex-col gap-y-3'>
        <img className='h-8' src="/imgs/AILogo.svg" />
        <h1 className='font-bold text-[#212121] sm:text-xl'>Welcome to the AI Chat Assistant</h1>
      </div>
        <div className='border-2 border-[#D9D9D9] sm:h-8 sm:w-100 w-80 bg-[#FFFFFF] p-2 flex justify-between items-center'>
            <input type="text" className='text-[0.8rem] w-full border-none' placeholder='Ask your question here..' />
            <img className='' src="/imgs/AIsendbutton.svg" alt="" />
      </div>
    </div>
  )
}

export default ChatBot
