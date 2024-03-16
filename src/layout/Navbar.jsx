import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { FaRegNewspaper } from "react-icons/fa";
import Search from './Search';
import './style.css';

function Navbar() {
  let location = useLocation();

  return (
    <nav className='bg-green-700 text-white font-bold p-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:text-3xl sm:text-1xl md:text-2xl'>
      <h2 className='flex text-4xl font-semibold italic tracking-widest col-span-1 mb-1 mt-1'><FaRegNewspaper className='mr-4 mt-1'/>News  Bites</h2>
      <div className='lg:col-span-2 sm:col-span-1 mt-2'>
        {
          location.pathname == "/news" && <Search />
        }
      </div>
     <div className=' grid grid-cols-4 mt-2'>
     <NavLink to="/"><span className='  hover:text-orange-600 text-sm'> Home</span></NavLink>
      <NavLink to="/news"><span className=' hover:text-orange-600 text-sm'>News</span></NavLink>
      <NavLink to="/contact"><span className='  hover:text-orange-600 text-sm'>Contact</span></NavLink>
      <NavLink to="/about"><span className=' hover:text-orange-600 text-sm'>About</span></NavLink>
     </div>
    </nav>
  )
}

export default Navbar
