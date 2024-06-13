import React from "react";
import './About.css';
import dollar from '../../assets/dollar.png'

const About = () => {
    return (
        <div>
            <div className="container">
                <div>
                    <h2>OUR VISION</h2>
                    <h1>Cryptocurrency in Every Wallet</h1>
                    <img src={dollar} className="logo" alt="logo picture" />
                </div>
                <div>
                    <h2>OUR MISSION</h2>
                    <h1>Speed Up the Global Shift to Cryptocurrency</h1>
                </div>
                <div>
                    <h2>WHY IT MATTERS</h2>
                    <h1>Fueled by cryptocurrency, the future of the internet will be more fair and equitable, owned by its builders, creators, and users. You.
                        We believe you have the fundamental right to control your money, data, and identity.</h1>
                </div>
            </div>
        </div>
    )
}

export default About