import React, { useState } from "react";

import authBg from "../assets/authBg.jpg";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";
import CheckBox from "../components/Checkbox";

export default function Signup() {
  const [isChecked, setIschecked] = useState(false);
  return (
    <div className="authentication__container">
      <img src={authBg} alt="" className="authentication__container__img" />
      <div className="authentication__container__overlay">
        <form action="" className="authentication__container__overlay__form">
          <div className="authentication__container__overlay__form__header">
            <div className="authentication__container__overlay__form__header__heading">
              Sign Up
            </div>
          </div>
          <div className="authentication__container__overlay__form__content">
            <InputBox placeholder="Name" type="email" error="" />
            <InputBox placeholder="Email" type="tel" error="" />
            <InputBox placeholder="Password" type="tel" error="" />
            <InputBox placeholder="Confirm Password" type="tel" error="" />
            <div className="authentication__container__overlay__form__checkbox">
              <CheckBox
                value={isChecked}
                customLabel={
                  <div className="checkbox__content__label">
                    I Agree to the{" "}
                    <a
                      href="#"
                      className="authentication__container__overlay__form__checkbox__anchor"
                    >
                      Terms & Conditions
                    </a>
                  </div>
                }
                labelColor="#ffffff"
                checkedColor="#005dff"
                unCheckedColor="#f9f9f9"
                iconColor="#ffffff"
                onChange={() => {
                  isChecked ? setIschecked(false) : setIschecked(true);
                }}
              />
            </div>

            <Link
              to="/dashboard"
              className="authentication__container__overlay__form__btn"
            >
              SignUp
            </Link>
            <div className="authentication__container__overlay__form__toSignup">
              Already have an account? <Link to="/"> Log In</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
