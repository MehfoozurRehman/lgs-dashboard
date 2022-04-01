import React from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

export default function SettingsEditProfile({ heading, onChangePassword }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">
            <button
              className="main__header__top__heading__button"
              onClick={() => {
                navigate(-1);
              }}
            >
              <ArrowLeft size={20} color="currentColor" />
            </button>
            Edit Profile
          </div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                onChangePassword(true);
              }}
              style={{
                background: "transparent",
                border: "1px solid #9a7cb8",
                color: "#242424",
              }}
            >
              Change Password
            </button>
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate(-1);
              }}
            >
              Save Changings
            </button>
          </div>
        </div>
      </div>
      <div
        className="main__content"
        style={{
          height: "92%",
        }}
      >
        <div className="main__content__form">
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Business Name</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Business Name"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Re-presentative Name
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Re-presentative Name"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col"></div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Email</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Email"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Name in Arabic</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Name in Arabic"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col"></div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Password</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Password"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Name on Receipt</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Name on Receipt"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col"></div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Phone</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Phone"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Type of merchant</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Type of merchant"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col"></div>
        </div>
      </div>
    </div>
  );
}
