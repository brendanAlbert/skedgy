import React, { Fragment, useState } from "react";
import "./login.css";
import SkedgyContext from "../../context/Context";
import Head from "../Head/Head";
import Main from "../Main/Main";
// import Schedule from "../Schedule/Schedule";

const Login = () => {
    // let loginTypes = ["student", "admin"];

    const [loginType, setLoginType] = useState("student");
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [errormsg, setErrorMsg] = useState(null);

    const handleLogin = () => {
        let error_message = "";

        if (username !== null && username.length > 1) {
        } else {
            error_message += "must provide username";
        }

        if (password !== null && password.length > 2) {
        } else {
            if (error_message.length > 0) {
                error_message += " and ";
            }

            error_message += "password must be valid";
        }

        if (error_message !== "") {
            setErrorMsg(error_message);
        } else {
            setErrorMsg(null);
        }

        if (username === "student" && password === "student") {
            setLoginType("student");
        } else if (username === "admin" && password === "admin") {
            setLoginType("admin");
        }
    };

    const handleUsernameInput = (inputEvent) => {
        let value = inputEvent.target.value;
        setUsername(value);
    };
    const handlePasswordInput = (passwordEvent) => {
        let value = passwordEvent.target.value;
        setPassword(value);
    };

    return (
        <SkedgyContext.Consumer>
            {(context) => (
                <Fragment>
                    {loginType !== "student" && loginType !== "admin" && (
                        <div className="login-container">
                            {errormsg && (
                                <div className="error-widget">
                                    <span className="error-title">
                                        error msg:
									</span>
                                    {errormsg}
                                </div>
                            )}
                            <div className="login-widget">
                                <div className="title-wrap">
                                    <h1>Skedgy Login</h1>
                                    <div className="underline"></div>
                                </div>

                                <div className="login-wrapper">
                                    <label htmlFor="username">
                                        <p>username</p>
                                        <input
                                            onChange={handleUsernameInput}
                                            name="username"
                                            type="text"
                                        />
                                    </label>
                                    <label htmlFor="password">
                                        <p>password</p>
                                        <input
                                            onChange={handlePasswordInput}
                                            name="password"
                                            type="password"
                                        />
                                    </label>

                                    <label htmlFor="loginbtn">
                                        <button
                                            onClick={handleLogin}
                                            className="loginbtn"
                                        >
                                            login
										</button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {loginType === "student" && (
                        <div className="dashboard">
                            <div className="top-nav">
                                <Head />
                            </div>

                            <div className="main-content">
                                <Main />
                                {/* <Schedule /> */}
                            </div>
                        </div>
                    )}
                    {loginType === "admin" && (
                        <div className="admin-dashboard">
                            <div className="top-nav">
                                <p>here is the admin top nav</p>
                            </div>

                            <div className="main-content">
                                <p>here is the admin main content</p>
                            </div>
                        </div>
                    )}
                </Fragment>
            )}
        </SkedgyContext.Consumer>
    );
};

export default Login;
