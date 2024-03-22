import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import NewsAppData from './NewsAppData';
import Navbar from '../Component/Navbar';
import { Row, Col } from 'antd';
import'./news.css';
import TopicBox from '../Component/TopicBox/TopicBox';
import Carousal from '../Component/Carousal/Carousal';



function NewsApp() {
// datatypes
  
// let date=new Dat();
 // Api key and Url Setting
 let date= new Date().getDate();
 let month= new Date().getMonth();
 let year= new Date().getFullYear();
 const [queryData,setQueryData]=useState("movie")
 const [newsData, setNewsData]=useState([])
const apiKey="01c84632e8124c6d95f2256156c4a071";
const apiUrl=`https://newsapi.org/v2/everything?q=${queryData}&from=${year}-${month}-${date}&sortBy=publishedAt&apiKey=${apiKey}`;
// using hooks here
function updateQuery(data){
  setQueryData(data)
  console.log(data+"this is prnt")
 
}
// console.log(date);

// useEffect 
useEffect(()=>{
  fetchApi();
},[queryData])

async function fetchApi(){
 try{
    const res= await fetch(apiUrl);
  const newsArrData=await res.json();
  const set=newsArrData.articles;
  setNewsData(set);
  // console.log(newsArrData);
 }catch(e){
    console.log("server is down"+e)
 }finally{
console.log("NewsApplication here we add our social links")
}
}


  return (
    <div >
    <Navbar/>
    <TopicBox sendData={updateQuery}/>
    <Carousal />
    <div className='design' style={{
      display:'grid',
      gridTemplateColumns:'repeat(4,1fr)',
      rowGap:'40px',
      justifyContent:'space-evenly',
      margin:'20px',
      padding:'25px',
      // marginleft:'40px',
      paddingLeft:'100px',
    
    }}>  
     {newsData.map((news, index)=>{
    return <NewsAppData key={index} news={news}/>
   })}

</div>
<Carousal />
</div>
  )
}

export default NewsApp;
