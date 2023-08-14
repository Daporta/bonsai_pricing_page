import React, { useState } from 'react'
import Navbar from './components/Navbar/index';
import Info from './components/Info/index';
import Banner from './components/Banner/index'
import Faq from './components/Faq/index'
import Footer from './components/Footer/index'

function App() {

  return (
    <>
      <Navbar/>
      <Info/>
      <Banner/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App
