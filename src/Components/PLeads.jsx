import React from 'react'
import leads from '../assets/PLeadsData'

const PLeads = () => {
  return (
    <div className="h-54 w-full">
      <div>
        <h1 className="font-bold">Prospect Leads</h1>
      </div>
     {leads.map((ele,idx)=>(
         <div key={idx} className='bg-[#EAECF0] h-10 my-5 flex items-center justify-between text-[0.7rem] px-3 rounded-xl hover:scale-110 duration-300 transition-all hover:shadow-2xl hover:border-1 border-[#D9D9D9]'>
         <div className='flex justify-center items-center gap-x-2'>
             <img className='h-8' src={ele.avatar} alt="" />
             <h1 className='text-[0.8rem] text-[#101828]'>{ele.name}</h1>
         </div>
         <div>
             <h1><span  className='text-[0.8rem] text-[#1C222B] opacity-70'>Stage:</span> <span className='opacity-100 text-[0.8rem] text-[#101828]!'>{ele.stage}</span></h1>
         </div>
       </div>
     ))}
    </div>
  )
}

export default PLeads
