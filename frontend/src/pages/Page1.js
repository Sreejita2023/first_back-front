import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import Card from './Card';
function Page1() {
  const [data,setData]=useState([])
  const getData=async()=>{
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}/getEmployee`)
    let data=await result.json()
    console.warn(data.date)
    setData(data.date)
    if(data.length===0){
      console.warn("there is no data")
    }
    else{
      console.warn("here is ",data)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <button><NavLink  to='/'>Add new employee</NavLink></button>
      {data.map((list)=>{
        return (
          <div>
            <Card list={list}/>
          </div>
        )
        })}
    </div>
  )
}

export default Page1