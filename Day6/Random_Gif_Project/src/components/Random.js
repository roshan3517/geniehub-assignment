import React, { useEffect } from 'react'
import {useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY =process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  // const [gif,setgif]=useState('');

  // const[loading,setLoading]=useState('false');
 

  // async function fetchData(){
  //   setLoading(true);
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  //   const {data}=await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url;
  //   setgif(imageSource);
  //   setLoading(false);

  // }
  // useEffect(()=>{
  //   fetchData();
  // },[])


  const {gif,loading,fetchData}=useGif();
  function clickHandler(){
   fetchData();
  }
  return (
    <div className=' flex flex-col items-center w-1/2   bg-green-500 rounded-lg border border-black 
    gap-y-5 mt-[15px]'>
      <h1 className=' text-2xl  underline uppercase font-bold mb-[10px]'> A Random  GIF</h1>

    {
      loading ?(<Spinner/>):(<img src={gif} w="300" alt=""></img>)
    }

      

      <button onClick={clickHandler}
      className='w-9/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[10px]'>
        Generate
      </button>
    

    </div>
  )
}

export default Random
