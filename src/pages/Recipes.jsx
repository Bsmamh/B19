import React from 'react'
import { useEffect } from 'react'
import Footer from '../componants/Footer'
import Navbar from '../componants/Navbar'
import { useParams } from 'react-router-dom';

export default function Test() {
  let { title } = useParams();
  useEffect(()=>{
    ((async()=>{
      console.log(title)
    })())
  },[])
  return (
      <>
       <Navbar/>
        {
          <h1>{title}</h1>
        }
        <Footer/>
      </>



 
 

  )
}
