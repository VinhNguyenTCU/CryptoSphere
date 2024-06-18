import React, { useContext } from "react";
import './Navbar.css';
import dollar from "../../assets/dollar.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (event) => {
        switch (event.target.value){
            case "usd": {
                setCurrency({name: "usd", symbol: "$"});
                break;
            }

            case "eur": {
                setCurrency({name: "eur", symbol: "€"});
                break;
            }

            case "jpy": {
                setCurrency({name: "jpy", symbol: "¥"});
                break;
            }
            
            case "gbp":{
                setCurrency({name: "gbp", symbol: "£"});
                break;
            }

            default: {
                setCurrency({name: "usd", symbol: "$"});
                break;
            }
            
        }
    }

    return (
        <div className="nav-bar">
            <Link to={`/`}>
                <img src={dollar} className="logo" alt="logo picture"/>
            </Link>
            <ul>
                <Link to={`/`}><li>Home</li></Link>
                <Link to={`/about`}><li>About Us</li></Link>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="nav-right">
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="jpy">JPY</option>
                    <option value="gbp">GBP</option>
                </select>
                <Link to={`/sign-up`}><button className="sign-up">Sign Up</button></Link>
                <Link to={`/sign-in`}><button className="sign-in">Sign In</button></Link>
            </div>
        </div>
    )
}

export default Navbar