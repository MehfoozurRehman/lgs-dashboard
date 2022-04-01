import React from "react";
import logo from "../assets/logo.png";
import authBg from "../assets/authBg.png";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";

export default function Login() {
  return (
    <div className="authentication__container">
      <img src={authBg} alt="" className="authentication__container__img" />
      <div className="authentication__container__overlay">
        <div className="authentication__container__overlay__form">
          <div className="authentication__container__overlay__form__header">
            <div className="authentication__container__overlay__form__header__heading">
              Sign In
            </div>
            <img
              src={logo}
              alt="logo"
              className="authentication__container__overlay__form__header__img"
            />
          </div>
          <div className="authentication__container__overlay__form__content">
            <InputBox placeholder="Email" error="" autoFocus />
            <InputBox placeholder="Password" type="password" error="" />
            <Link
              to="/forgot_password"
              className="authentication__container__overlay__form__forgotpass"
            >
              Forgot Password?
            </Link>
            <Link
              to="/dashboard"
              className="authentication__container__overlay__form__btn"
            >
              Login
            </Link>
            <div className="authentication__container__overlay__form__toSignup">
              Don't have an account? <Link to="/sign_up"> Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
