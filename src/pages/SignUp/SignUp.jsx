import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{6,23}$/;
const NAME_REGEX = /^[a-zA-Z ]{2,40}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%?]).{8,24}$/;

const SignUp = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [userName, setUserName] = useState('');
    const [validUserName, setValidUserName] = useState(false);
    const [userNameFocus, setUserNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible)
    }

    useEffect(() => {
        const result = NAME_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = USER_REGEX.test(userName);
        console.log(result);
        console.log(userName);
        setValidUserName(result);
    }, [userName])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const v1 = USER_REGEX.test(user);
        // const v2 = PWD_REGEX.test(pwd);

        // if (!v1 || !v2) {
        //     setErrMsg("Invalid Entry");
        //     return;
        // }
        // console.log(user, pwd);
        setSuccess(true);
    }

    return (
        <>
        {
            success ? (
                alert("You have created an account for CryptoSphere.")
            ) : (
        <section>
        <div>
            <div className="form" onSubmit={handleSubmit}>
                <div className="form-detail">
                    <h2 className="title">Sign Up</h2>
                </div>

                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                <div className="form-detail">
                    <div>

                        <div>
                            <label htmlFor="name">
                                Name:
                                <span className={validName ? "valid" : "hide"}>
                                    <FontAwesomeIcon className="check" icon={faCheck} />
                                </span>
                                <span className={validName || !user ? "hide" : "invalid"}>
                                    <FontAwesomeIcon className="times" icon={faTimes}></FontAwesomeIcon>
                                </span>
                            </label>

                            <input type="text"
                                id="registerName"
                                className="form-control"
                                placeholder="Name"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)} />

                            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon className="info-icon" icon={faInfoCircle}></FontAwesomeIcon>
                                6 to 23 characters. Must contain letters, numbers, underscore, hyphens allowed.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="username">
                                UserName:
                                <span className={validUserName ? "valid" : "hide"}>
                                    <FontAwesomeIcon className="check" icon={faCheck} />
                                </span>
                                <span className={validUserName || !userName ? "hide" : "invalid"}>
                                    <FontAwesomeIcon className="times" icon={faTimes}></FontAwesomeIcon>
                                </span>
                            </label>

                            <input type="text"
                                id="registerUserName"
                                className="form-control"
                                placeholder="Username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUserName(e.target.value)}
                                aria-invalid={validUserName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserNameFocus(true)}
                                onBlur={() => setUserNameFocus(false)}
                                required />

                            <p id="uidnote" className={userNameFocus && userName && !validUserName ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon className="info-icon" icon={faInfoCircle}></FontAwesomeIcon>
                                4 to 10 characters. Must contain letters, numbers and special characters.
                            </p>
                        </div>
                    </div>

                    <div>
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
                    </div>

                    <div>
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

                        
                            <div className="input-field">
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
                            <div className="eye-div" onClick={toggleVisible}>
                                <FontAwesomeIcon className="eye" icon={visible ? faEye : faEyeSlash}></FontAwesomeIcon>
                            </div>
                        
                            </div>
                            <p id="uidnote" className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon className="info-icon" icon={faInfoCircle}></FontAwesomeIcon>
                            Your password must contain uppercase, lowercase, numbers and special characters.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="confirmpassword">
                                Confirm Password:
                                <span className={matchPwd && validMatch ? "valid" : "hide"}>
                                    <FontAwesomeIcon className="check" icon={faCheck} />
                                </span>
                                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                                    <FontAwesomeIcon className="times" icon={faTimes}></FontAwesomeIcon>
                                </span>
                            </label>

                            <div className="input-field">
                                <input type="password"
                                    id="confirmPassword"
                                    className="form-control"
                                    placeholder="Confirm password"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                    required
                                ></input>
                                <div className="eye-div" onClick={toggleVisible}>
                                    <FontAwesomeIcon className="eye" icon={visible ? faEye : faEyeSlash}></FontAwesomeIcon>
                                </div>
                            </div>
                            <p id="uidnote" className={matchFocus && matchPwd && !validMatch ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon className="info-icon" icon={faInfoCircle}></FontAwesomeIcon>
                                Must match the previous password input field.
                            </p>

                            <Link to={`/sign-in`}><p>Already had an account</p></Link>
                        </div>

                    </div>

                </div>

                <div className="submit-button" onClick={handleSubmit}>
                    <button disabled={!validName || !validUserName || !validEmail || !validMatch || !validPwd ? true : false}>Submit</button>
                </div>

            </div>

        </div>
        </section>)}
        </>
    )
}

export default SignUp