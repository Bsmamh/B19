import React from 'react'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from './pages/Home';
import OneRecipe from './pages/OneRecipe';
import Recipes from './pages/Recipes';
import { Routes, Route, Outlet, Link } from "react-router-dom";



const theme = createTheme({
    typography: {
      fontFamily: [
        "Cormorant Garamond",
        "sans-serif",
      ].join(",")
    }
  })

export default function App() {
  return (
    
    <ThemeProvider theme={theme}>
        {/* <Home/> <Recipes /> */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="recipe/:title" element={<OneRecipe />} />
            
        </Routes>
        
        {/* <OneRecipe /> */}
    </ThemeProvider>
  )
}
