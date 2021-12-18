import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
    const location = useLocation();
    let navigate = useNavigate();
    const { signInUsingGoogle } = useAuth();

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, navigate);
    };
    return (
        <>
            <div class="container containerr">
                <div class="body d-md-flex align-items-center justify-content-between">
                    <div class="box-1 mt-md-0 mt-5">
                        {" "}
                        <img
                            src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            class=""
                            alt=""
                        />{" "}
                    </div>
                    <div class=" box-2 d-flex flex-column h-100">
                        <div class="mt-5">
                            <p class="mb-1 h-1">Login Account.</p>
                            <p class="text-muted mb-2">
                                Share your thouhts with the world form today.
                            </p>
                            <div className="d-flex flex-row justify-content-center mt-5">
                                <div className="mx-auto ">
                                    <button className="btn login-btn login-box text-primary">
                                        <span class="fab fa-facebook mb-2 text-primary"></span>
                                        Facebook
                                    </button>
                                </div>
                                <div className="mx-auto ">
                                    <button
                                        className="btn login-btn login-box"
                                        onClick={handleGoogleSignIn}
                                    >
                                        <span class="fab fa-google mb-2"></span>
                                        Gmail
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-auto">
                            <p class="footer text-muted mb-0 mt-md-0 mt-4">
                                By register you agree with our{" "}
                                <span class="p-color me-1">
                                    terms and conditions
                                </span>
                                and{" "}
                                <span class="p-color ms-1">privacy policy</span>{" "}
                            </p>
                        </div>
                    </div>{" "}
                    <span class="fas fa-times"></span>
                </div>
            </div>
        </>
    );
};

export default Login;
