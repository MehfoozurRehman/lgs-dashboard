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
              Forgot Password
            </div>
            <img
              src={logo}
              alt="logo"
              className="authentication__container__overlay__form__header__img"
            />
          </div>
          <div className="authentication__container__overlay__form__content">
            <div className="authentication__container__overlay__form__ibcustomstyling">
              <InputBox placeholder="Email" type="email" error="" autoFocus />
            </div>
            <Link
              to="/change_password"
              className="authentication__container__overlay__form__btn"
            >
              Send recovery email
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
