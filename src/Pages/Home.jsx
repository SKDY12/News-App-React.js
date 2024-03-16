import React from 'react'
import breakingNews from '../assets/breakingnews.gif';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-gray-200' >
      <div>
        <img src={breakingNews} alt=""  className='w-full'/>
      </div>
      <div className='p-8 font-semibold'>
      Welcome to NewsBites - your go-to source for short, snappy news updates!
       Stay informed with our curated selection of bite-sized news pieces, covering a
        wide range of topics from around the globe. Whether you're a busy professional,
         a news enthusiast on the go, or just looking to stay up-to-date without sifting 
         through long articles, we've got you covered.<br></br><br></br>
         At NewsBites, we believe that staying informed shouldn't be time-consuming or 
         overwhelming. That's why we deliver concise and relevant news summaries, designed 
         to give you the essential information you need to know in just a few minutes. Our 
         team of dedicated journalists scours the latest headlines to bring you the most important 
         stories of the day, keeping you informed and empowered in today's fast-paced world.<br></br><br></br>
         Experience the power of concise news reporting with NewsBites - your shortcut to staying 
         informed in today's fast-paced world. Start exploring now!<br></br><br></br>
         <Link to="/news" className='bg-slate-600 text-white p-2 rounded-lg hover:bg-slate-700'>Start Exploring !</Link>
      </div>
    </div>
  )
}

export default Home
