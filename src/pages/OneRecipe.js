import React from 'react'
import { useEffect, useState } from 'react'
import Footer from '../componants/Footer'
import Navbar from '../componants/Navbar'
import { useParams } from 'react-router-dom';
import data from "../componants/Data.js" ;

export default function Test() {
  let { title } = useParams();
  const [useImage, setImage] = useState("")
  const [useRecipe, setRecipe] = useState("")
  useEffect(()=>{
    const findRec = data.find((e)=> e.title == title.replaceAll("-", " "))
    setImage(findRec.imageUrl)
    setRecipe(findRec.recipeText)
  },[])
  return (
      <>
       <Navbar/>
        {
          <>
          <h1>{title.replaceAll("-", " ")}</h1>
          <p>{useRecipe}</p>
          <img src={useImage} />
          </>
        }
        <Footer/>
      </>
  )
}
