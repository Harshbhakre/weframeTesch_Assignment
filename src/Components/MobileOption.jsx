import React from 'react'
import { NavLink } from 'react-router-dom'
import navlinks from '../assets/NavLinks'

const MobileOption = ({setShowSidebar}) => {
  return (
    <div className='absolute z-[10] text-sm flex flex-col text-white h-screen w-[60%] bg-[#11455D] justify-between items-center py-13'>
        <a onClick={(e)=>{ e.preventDefault();
            setShowSidebar(false)}} className='absolute top-5 right-5' href=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
    <div className='flex flex-col gap-2'>
      {navlinks.map((ele,idx)=>(
        <NavLink key={idx} to={ele.to} className={({isActive}) => `py-2 w-50 pl-3 ${isActive ? 'rounded-md bg-white/10 text-[#2FBCFE]' : 'opacity-60'}`}>{ele.text} {idx===navlinks.length-1 ? <span className='bg-gray-200 ml-6 px-2 py-1 rounded-full  text-[#11455D]'>3</span> : ''  } </NavLink>
      ))}
    </div>
          <div className='h-7 w-50 pl-3 mb-20'>
            <NavLink to="/logout" className="opacity-60 hover:text-[#2FBCFE] hover:opacity-100 duration-300 transition-all">Logout</NavLink>
          </div>
        </div>
  )
}

export default MobileOption
