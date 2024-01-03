import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import "../Styles/NewComponent.css"


let input={
  width:"250px",
  padding:"10px",
  borderRadius:"5px",
  outline:"none",
  marginTop:"20px",
  marginBottom:"20px",
  marginLeft:"calc((80vw)/2)"
}

function NewsComponent() {

const[newsData,setNewsData]=useState([])

const[search,setSearch]=useState("tech")
    useEffect(()=>{
        (async function f1(){
          let url=`https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=10&apikey=265a87be9f108995ad7262d8c76c5f16`
            const response=await fetch(url);
            const data=await response.json();
            console.log(data);

            setNewsData(data["articles"])
        })()
    },[search])
  return (
    <>
<input style={input} type="text" placeholder='Search Your News Here' onChange={(e)=>{
setSearch(e.target.value)
}}/>


      <div className='new-component'>
        {newsData?.map(( item)=>{
           return <NewsCard data={item}/>
        })}
    </div>
         </>
  )
}

export default NewsComponent