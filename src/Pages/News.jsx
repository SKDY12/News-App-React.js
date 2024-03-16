import React, { useState, useEffect, useContext } from 'react'
import { CountryContext } from '../compoent/context/CountryContext';
import { FaBlind } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

function News() {

    let api;

    const {searchKey, setNews, news} = useContext(CountryContext);
    const [isAvailable, setIsAvailable] = useState(false);

    if(searchKey === null){
       api = `https://newsapi.org/v2/top-headlines?country=in&apiKey=95a1e5b26b90451d802b2c493cf47db2`;
    }else{
      api = `https://newsapi.org/v2/top-headlines?q=${searchKey}&country=in&apiKey=95a1e5b26b90451d802b2c493cf47db2`; 
    }

    const getData=async(api)=>{
        try{
            const response = await fetch(api);
            const data = await response.json();
            setNews(data);

        }catch(error){
            console.log(error);
        }
    }

    const checkData=()=>{
      if(news !== undefined){
        if(news.totalResults !== 0){
          setIsAvailable(true);
        }else{
          setIsAvailable(false);
        }
      }else{
        setIsAvailable(false);
      }
    }

    console.log(news);
    console.log(searchKey);
    console.log(isAvailable);

    useEffect(() => {
     getData(api);
    }, [searchKey])

   useEffect(()=>{
    checkData();
   },[news])
    
  return (
    <section className='grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 pt-2 bg-gray-200 lg:p-10'>
      {
         isAvailable ? news.articles.map((article)=>{
            const { author, content, publishedAt, title, urlToImage } = article;
           return <article key={uuidv4()} className='m-2 bg-slate-400 p-3 rounded-xl'>
            <img className='w-80 h-52 ml-auto mr-auto m-2 rounded-lg' src={urlToImage ? urlToImage : "https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg"} alt="Image not supported" />
           <h3 className='font-bold'>{title}</h3>
           <h3 className='text-green-800 font-bold'>Author : {author ? author : "Unknown"}</h3>
           <h3 className='text-red-700'>Date : {publishedAt.substring(0,10)}</h3>
           <h3>{content}</h3>
           </article>
        }) : <article className='col-span-4 mr-auto ml-auto text-center p-10 border-4 border-black rounded-full mt-24 mb-48'>
          <FaBlind className='text-9xl ml-24'/>
          <span className='text-3xl text-red-600 mt-6 font-bold'>Sorry News Not Found</span>
        </article>
      }
    </section>
  )
}

export default News
