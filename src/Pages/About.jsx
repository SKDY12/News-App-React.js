import React from 'react'

function About() {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 bg-gray-200 p-10 gap-4'>
      <div className='bg-gray-600 p-6 text-white rounded-xl'>
        <h2 className='text-2xl bg-green-600 text-center p-1 rounded-lg'>About NewsBites</h2>
        <p className='p-2'>
           Welcome to NewsBites, your destination for concise and curated news updates.
           At NewsBites, we understand the value of your time and strive to provide 
           you with the essential information you need to stay informed, without the unnecessary fluff.
        </p>
      </div>
      <div className='bg-gray-600 p-6 text-white rounded-xl'>
        <h2 className='text-2xl bg-green-600 text-center p-1 rounded-lg'>Our Mission</h2>
        <p className='p-2'>
          Our mission at NewsBites is simple: to empower our readers with knowledge by delivering short,
          snappy news pieces that cut through the noise of today's information overload. We believe that
          staying informed should be convenient, accessible, and above all, efficient.
        </p>
      </div>
      <div className='bg-gray-600 p-6 text-white rounded-xl'>
        <h2 className='text-2xl bg-green-600 text-center p-1 rounded-lg'>What Sets Us Apart</h2>
        <p className='p-2'>
          In a world inundated with lengthy articles and overwhelming news cycles, NewsBites stands out as 
          your shortcut to staying informed. Our team of experienced journalists meticulously selects and 
          summarizes the most important stories of the day, ensuring that you get the facts you need without 
          having to wade through endless pages of content.</p>
      </div>
      <div className='bg-gray-600 p-6 text-white rounded-xl'>
        <h2 className='text-2xl bg-green-600 text-center p-1 rounded-lg'>Our Values</h2>
        <p className='p-2'>
        <span className='font-bold'>Accuracy: </span>
          We prioritize accuracy and integrity in our reporting, ensuring that our readers can trust the information they receive from NewsBites.<br/>
         <span className='font-bold'>Relevance: </span>
          We focus on delivering news that is relevant and impactful, keeping you updated on the topics and events that matter most.<br/>
          <span className='font-bold'>Efficiency: </span>
          We respect your time and attention by delivering news updates in a concise and digestible format, allowing you to stay informed without sacrificing your busy schedule.</p>
      </div>
    </div>
  )
}

export default About
