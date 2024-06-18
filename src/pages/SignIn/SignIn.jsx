import React, {useState, useEffect, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./SignIn.css"


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{6,23}$/;
const NAME_REGEX = /^[a-zA-Z ]{2,40}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%?]).{8,24}$/;

const SignIn = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible)
    }


    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email])

    return(
        <div>
            <div className="form">
            <div className="form-detail">
                <h2 className="title">Sign In</h2>
            </div>
            <div className="form-detail">
                <div>
                            <label htmlFor="email">
                                Email:
                                <span className={validEmail ? "valid" : "hide"}>
                                    <FontAwesomeIcon className="check" icon={faCheck} />
                                </span>
                                <span className={validEmail || !email ? "hide" : "invalid"}>
                                    <FontAwesomeIcon className="times" icon={faTimes}></FontAwesomeIcon>
                                </span>
                            </label>

                            <input type="text"
                                id="registerEmail"
                                className="form-control"
                                placeholder="Email"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                                required />

                        <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon className="info-icon" icon={faInfoCircle}></FontAwesomeIcon>
                            Your email must contain @gmail.com/ @yourschoolname.edu.
                        </p>
                </div>
                
                <div>
                            <label htmlFor="password">
                                Password:
                                <span className={validPwd ? "valid" : "hide"}>
                                    <FontAwesomeIcon className="check" icon={faCheck} />
                                </span>
                                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                    <FontAwesomeIcon className="times" icon={faTimes}></FontAwesomeIcon>
                                </span>
                            </label>

                        
                            <input type={visible ? "text" : "password"}
                                id="registerPassword"
                                className="form-control"
                                placeholder="Password"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setPwd(e.target.value)}
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                                required
                                >
                            </input>
                            <p id="uidnote" className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon className="info-icon" icon={faInfoCircle}></FontAwesomeIcon>
                            Your password must contain uppercase, lowercase, numbers and special characters.
                            </p>
                        </div>
                        
                </div>
                <div className="submit-button" >
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn