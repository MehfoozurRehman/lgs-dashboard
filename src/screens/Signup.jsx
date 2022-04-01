import React, { useState } from "react";
import logo from "../assets/logo.png";
import authBg from "../assets/authBg.png";
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
            <img
              src={logo}
              alt="logo"
              className="authentication__container__overlay__form__header__img"
            />
          </div>
          <div className="authentication__container__overlay__form__content">
            <div className="authentication__container__overlay__form__content__row">
              <InputBox placeholder="Brand Name English" error="" autoFocus />
              <div style={{ width: "30px" }}>&nbsp;</div>
              <InputBox placeholder="Brand Name Arabic" error="" />
            </div>
            <InputBox placeholder="Email" type="email" error="" />
            <InputBox placeholder="Phone" type="tel" error="" />
            <div className="authentication__container__overlay__form__content__row">
              <InputBox placeholder="Password" type="password" error="" />
              <div style={{ width: "30px" }}>&nbsp;</div>
              <InputBox
                placeholder="Re-Enter Password"
                type="password"
                error=""
              />
            </div>

            <div className="authentication__container__overlay__form__checkbox">
              <CheckBox
                value={isChecked}
                customLabel={
                  <div
                    className="checkbox__content__label"
                    style={{ color: "white" }}
                  >
                    I Agree to the{" "}
                    <a
                      href="#"
                      className="authentication__container__overlay__form__checkbox__anchor"
                    >
                      Partnership Agreement
                    </a>
                  </div>
                }
                labelColor="#ffffff"
                checkedColor="#4B2E73"
                unCheckedColor="transparent"
                iconColor="#ffffff"
                style={{ borderRadius: 20 }}
                onChange={() => {
                  isChecked ? setIschecked(false) : setIschecked(true);
                }}
              />
            </div>

            <a
              href="#"
              className="authentication__container__overlay__form__btn"
            >
              Next
            </a>
            <div className="authentication__container__overlay__form__toSignup">
              Already have an account? <Link to="/"> Log In</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
