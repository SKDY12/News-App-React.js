import React from 'react'
// import SendMail from '../compoent/mailer/mailer';
import { FaRegNewspaper, FaFacebook, FaTwitter, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";

function Footer() {

  const handleClick=()=>{
    console.log("Button cliced");
  }
  return (
    <footer className='grid bg-gray-700 bottom-0 w-full p-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1'>
      <div className='mt-2'>
        <span className='flex text-white text-2xl italic ml-2 '>
        <FaRegNewspaper className='mt-1 mr-2'/>N e w s  B i t e s
        </span>
        <div className='flex ml-4 text-2xl text-white mt-2 gap-4'>
        <FaFacebook className='cursor-pointer'/>
        <FaTwitter className='cursor-pointer'/>
        <FaInstagramSquare className='cursor-pointer'/>
        <FaWhatsapp className='cursor-pointer'/>
        </div>
      </div>
      <div className='col-span-2 text-white font-bold mt-6 sm:ml-4 lg:ml-1'>@Copyright 1999-2024 by Refsnes Data. All Rights Reserved. News Bites is Powered by NB</div>
      <div className='mt-2'>
        <span className='text-white italic'>Subscribe to News Bites</span>
        <div className='mt-2'>
            <input type="text" placeholder='enter your email' className='bg-slate-700 border-2 h-10 pl-2 mr-1 text-white w-40 '/>
            <button onClick={handleClick} className='bg-white text-black p-2 hover:bg-slate-500'>Submit</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
