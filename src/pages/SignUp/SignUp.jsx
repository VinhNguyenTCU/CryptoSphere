import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import SignIn from "../SignIn/SignIn";

const SignUp = () => {
    return (
        <div>
            <div className="form">
                <div>
                    <h2 className="title">Sign Up</h2>
                </div>

                <div className="form-detail">
                    <input type="text" id="registerName" className="form-control" placeholder="Name"/>
                    <input type="text" id="registerUserName" className="form-control" placeholder="Username"/>
                    <input type="text" id="registerEmail" className="form-control" placeholder="Email"/>
                    <input type="text" id="registerPassword" className="form-control" placeholder="Password"/>
                    <input type="text" id="registerPassword" className="form-control" placeholder="Repeat password"/>
                    <Link to={`/sign-in`}><p>Already had an account</p></Link>
                </div>

                <div className="submit-button">
                    <button>Submit</button>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp