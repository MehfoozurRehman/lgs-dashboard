import React from "react";
import authBg from "../assets/authBg.jpg";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";

export default function Signup2nd() {
  return (
    <div className="authentication__container">
      <img src={authBg} alt="" className="authentication__container__img" />
      <div className="authentication__container__overlay">
        <form action="" className="authentication__container__overlay__form">
          <div className="authentication__container__overlay__form__header">
            <div className="authentication__container__overlay__form__header__heading">
              Forgot Password
            </div>
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
