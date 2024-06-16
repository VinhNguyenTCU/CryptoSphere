import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom"; 
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/coin/:coinId" element={<Coin/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App