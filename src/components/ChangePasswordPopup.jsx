import React from "react";
import { X } from "react-feather";

export default function ChangePasswordPopup({ onClose, onSubmit, isEdit }) {
  return (
    <div className="popup">
      <form className="popup__form">
        <button
          className="popup__form__close"
          type="button"
          onClick={() => onClose(false)}
        >
          <X size={15} color="currentColor" strokeWidth={4} />
        </button>
        <div className="popup__form__heading">Change Password</div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Old Password</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Old Password"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
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
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Confirm Password</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Confirm Password"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <button onClick={() => onSubmit(false)} className="popup__form__button">
          Save
        </button>
      </form>
    </div>
  );
}
