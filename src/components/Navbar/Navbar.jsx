import React, { useContext } from "react";
import './Navbar.css';
import dollar from "../../assets/dollar.png"
import arrow from "../../assets/arrow_icon.png"
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (event) => {
        switch (event.target.value){
            case "usd": {
                setCurrency({name: "usd", symbol: "$"});
                break;
            }

            case "euro": {
                setCurrency({name: "euro", symbol: "€"});
                break;
            }

            case "yen": {
                setCurrency({name: "yen", symbol: "¥"});
                break;
            }
            
            case "sterling":{
                setCurrency({name: "sterling", symbol: "£"});
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
            <img src={dollar} className="logo" alt="logo picture"/>
            <ul>
                <li>Home</li>
                <li>Feature</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="nav-right">
                <select onChange={currencyHandler}>
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