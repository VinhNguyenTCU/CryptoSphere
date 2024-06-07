import React from "react";
import './Navbar.css';
import dollar from "../../assets/dollar.png"
import arrow from "../../assets/arrow_icon.png"

const Navbar = () => {
    return (
        <div className="nav-bar">
            <img src={dollar} className="logo" alt="logo picture"/>
            <ul>
                <li>Home</li>
                <li>Feature</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="nav-right">
                <select>
                    <option value="usd">USD</option>
                    <option value="euro">EUR</option>
                    <option value="yen">JPY</option>
                    <option value="sterling">GBP</option>
                </select>
                <button>Sign Up <img src={arrow} alt="arrow_icon"/></button>
            </div>
        </div>
    )
}

export default Navbar