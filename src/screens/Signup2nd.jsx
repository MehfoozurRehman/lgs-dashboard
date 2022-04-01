import React, { useState } from "react";
import logo from "../assets/logo.png";
import authBg from "../assets/authBg.png";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import CheckBox from "../components/Checkbox";

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
              Sign Up 2nd
            </div>
            <img
              src={logo}
              alt="logo"
              className="authentication__container__overlay__form__header__img"
            />
          </div>
          <div className="authentication__container__overlay__form__content">
            <InputBox
              placeholder="Type of merchant"
              type="text"
              error=""
              autoFocus
            />
            <InputBox placeholder="Number of Branches" type="text" error="" />
            <InputBox
              placeholder="Cities"
              error=""
              name="cities"
              id="city"
              list="cities"
            />
            <datalist id="cities">
              <option value="Edge" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>
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
              Already have an account? <a href="#"> Log In</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
