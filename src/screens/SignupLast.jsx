import React from "react";
import logo from "../assets/logo.png";
import authBg from "../assets/authBg.png";

export default function SignupLast() {
  return (
    <div className="authentication__container">
      <img src={authBg} alt="" className="authentication__container__img" />
      <div className="authentication__container__overlay">
        <form action="" className="authentication__container__overlay__form">
          <div className="authentication__container__overlay__form__header">
            <div className="authentication__container__overlay__form__header__heading">
              Account Activation
            </div>
          </div>
          <div className="authentication__container__overlay__form__content">
            <div className="authentication__container__overlay__form__img__container">
              <img
                src={logo}
                alt="logo"
                className="authentication__container__overlay__form__header__img"
              />
            </div>
            <div className="authentication__container__overlay__form__content__thank">
              Thank you for signing it up with picode!
            </div>
            <div className="authentication__container__overlay__form__content__activation">
              Your account will be activated within <b>72 hours</b>
            </div>

            <a
              href="#"
              className="authentication__container__overlay__form__btn"
            >
              Submit
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
