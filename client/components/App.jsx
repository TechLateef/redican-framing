import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Shop from './Shop'
import ShopItem from './subcomponents/ShopItem'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <img src='images/thumbnails/logo.jpg' alt='logo' id="logo"></img>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/store' element={<Shop />} />
        <Route path='/:title' element={<ShopItem />} />
      </Routes>
    </div>
    </>
  )
}

export default App
