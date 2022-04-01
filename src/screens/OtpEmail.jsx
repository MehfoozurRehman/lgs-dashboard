import React, { useState } from "react";
import logo from "../assets/logo.png";
import authBg from "../assets/authBg.png";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";

export default function OtpEmail() {
  const navigate = useNavigate();
  const [isChecked, setIschecked] = useState(false);
  return (
    <div className="authentication__container">
      <img src={authBg} alt="" className="authentication__container__img" />
      <div className="authentication__container__overlay">
        <form action="" className="authentication__container__overlay__form">
          <div className="authentication__container__overlay__form__header">
            <div className="authentication__container__overlay__form__header__heading">
              OTP Email
            </div>
            <img
              src={logo}
              alt="logo"
              className="authentication__container__overlay__form__header__img"
            />
          </div>
          <div className="authentication__container__overlay__form__content">
            <div className="authentication__container__overlay__form__msg">
              We have sent an OTP at <p>youremail@gmail.com</p>
            </div>
            <div className="authentication__container__overlay__form__ibcustomstyling">
              <InputBox type="text" error="" autoFocus />
            </div>

            <a
              href="
            #"
              className="authentication__container__overlay__form__resend"
            >
              resend
            </a>
            <Link
              to="/"
              className="authentication__container__overlay__form__btn"
            >
              Submit
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
