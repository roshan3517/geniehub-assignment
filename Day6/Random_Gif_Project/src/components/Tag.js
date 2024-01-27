import React, { useEffect } from 'react'
import {useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY =process.env.REACT_APP_GIPHY_API_KEY;
const Tag= () => {
  // const [gif,setgif]=useState('');

  // const[loading,setLoading]=useState('false');
  const[tag,setTag]=useState('');
 

  // async function fetchData(){
  //   setLoading(true);
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  //   const {data}=await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url;
  //   setgif(imageSource);
  //   setLoading(false);

  // }
  // useEffect(()=>{
  //   fetchData();
  // },[])

  const {gif,loading,fetchData}=useGif(tag); 



  return (
    <div className=' flex flex-col items-center lg:w-1/2   bg-blue-500 rounded-lg border border-black 
    gap-y-5 mt-[15px]'>
      <h1 className=' text-2xl  underline uppercase font-bold mb-[10px]'>  Random {tag}  GIF</h1>

    {
      loading ?(<Spinner/>):(<img src={gif} w="300" alt=""></img>)
    }

    <input
    className='w-9/12 text-2xl py-2 rounded-lg mb-[6px] text-center'
    onChange={(event)=>{
      setTag(event.target.value);
    }}
    value={tag}

    />

      

    <button onClick={(event)=>{
      fetchData("car");
    }}
      className='w-9/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[10px]'>
        Generate
    </button>
    

    </div>
  )
}

export default Tag

