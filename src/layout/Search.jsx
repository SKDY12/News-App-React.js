import React, {useContext, useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { CountryContext } from '../compoent/context/CountryContext';


function Search() {

  const {setSearchKey} = useContext(CountryContext);

  const [key, setKey] = useState();

  const handleChange=(event)=>{
    setKey(event.target.value);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    setSearchKey(key);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex'>
      <input onChange={handleChange} value={key} type="text" name="" id="" placeholder='Search news...' className='w-56 h-10 rounded-lg ml-auto mr-2 text-black text-lg font-thin p-2'/>
      <button type='submit' className='bg-slate-900 p-1 rounded-lg text-lg font-thin mr-auto flex hover:bg-slate-700'><FaSearch className='mt-2 mr-1 ml-1'/></button>
      </form>
    </div>
  )
}

export default Search
