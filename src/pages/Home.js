import React from 'react'
import Hero from '../componants/Hero'
import Navbar from '../componants/Navbar'
import LatestRecipes from '../componants/LatestRecipes'
import Footer from '../componants/Footer';

export default function Home() {
  return (
      <>
        <Navbar/>
        <Hero />
        <LatestRecipes />
        <Footer />
      </>
  )
}
