import React from 'react'
import { NavLink } from 'react-router-dom'
import navlinks from '../assets/NavLinks'
const Options = () => {
  return (
    <div className='text-sm flex flex-col text-white h-screen w-1/5 bg-[#11455D] justify-between items-center py-13'>
<div className='flex flex-col gap-2'>
  {navlinks.map((ele,idx)=>(
    <NavLink key={idx} to={ele.to} className={({isActive}) => `py-1 w-50 pl-3 ${isActive ? 'rounded-md bg-white/10 text-[#2FBCFE]' : 'opacity-60'}`}>{ele.text} {idx===navlinks.length-1 ? <span className='bg-gray-200 ml-6 px-2 py-1 rounded-full  text-[#11455D]'>3</span> : ''  } </NavLink>
  ))}
</div>
      <div className='h-7 w-50 pl-3'>
        <NavLink to="/logout" className="opacity-60 hover:text-[#2FBCFE] hover:opacity-100 duration-300 transition-all">Logout</NavLink>
      </div>
    </div>
  )
}

export default Options
