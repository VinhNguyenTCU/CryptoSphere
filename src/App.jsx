import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom"; 
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'

const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/coin/:coinId" element={<Coin/>}></Route>
      </Routes>
    </div>
  )
}

export default App