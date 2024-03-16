import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='text-center'>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/013/076/891/small/error-page-not-found-vector.jpg" alt="" style={{width:"50vh", height:"50vh", margin:"0 auto", marginTop:"50px"}} />
      <Link to="/">
        <button className='bg-green-800 text-white font-bold p-2 rounded-lg hover:bg-green-950'>Go To Home Page</button>
      </Link>
    </div>
  )
}

export default Error
