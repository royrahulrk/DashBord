import React from 'react'
import './App.css';
import Header from './Component/Header/Header';
import Welcome from "./Component/Header/Welcome"
import CardTop from "./Component/CardTop/CardTop"
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Header/Navbar';
import Graph from './Component/Graph/Graph';
import CountryWiseSales from "./Component/ProductsData/ProductsData"

const App = () => {
  return (
    <div className='app'>
       <Header/>
       <Navbar/>
       <Welcome/>
       <CardTop/>
       <Graph />
       <CountryWiseSales/>
    
       <Footer/>
    </div>
  )
}

export default App