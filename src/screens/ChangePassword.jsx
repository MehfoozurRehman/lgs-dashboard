import React, { useState } from "react";
import logo from "../assets/logo.png";
import authBg from "../assets/authBg.png";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";

export default function Signup2nd() {
  const navigate = useNavigate();
  const [isChecked, setIschecked] = useState(false);
  return (
    <div className="authentication__container">
      <img src={authBg} alt="" className="authentication__container__img" />
      <div className="authentication__container__overlay">
        <form action="" className="authentication__container__overlay__form">
          <div className="authentication__container__overlay__form__header">
            <div className="authentication__container__overlay__form__header__heading">
              Reset Password
            </div>
            <img
              src={logo}
              alt="logo"
              className="authentication__container__overlay__form__header__img"
            />
          </div>
          <div className="authentication__container__overlay__form__content">
            <div className="authentication__container__overlay__form__ibcustomstyling">
              <InputBox
                placeholder="Password"
                type="password"
                error=""
                autoFocus
              />
              <InputBox
                placeholder="Re enter Password"
                type="password"
                error=""
              />
            </div>
            <Link
              to="/otp_email"
              className="authentication__container__overlay__form__btn"
            >
              Change Password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
