import React, { useState } from "react";
import { X } from "react-feather";
import CheckBox from "./Checkbox";

export default function CreatePromoCodePopup({ onClose, onSubmit, isEdit }) {
  const [isChecked, setIschecked] = useState(false);
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
        <div className="popup__form__heading">
          {isEdit ? "Edit" : "Create"} Promo Code
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Promocode</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Promocode"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Expiry Date</div>
            <input
              type="date"
              className="popup__form__input__field"
              placeholder="Enter Expiry Date"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row" style={{ marginBottom: 15 }}>
          <CheckBox
            value={!isChecked}
            customLabel={
              <div
                className="checkbox__content__label"
                style={{ marginRight: 30 }}
              >
                Amount
              </div>
            }
            labelColor="#ffffff"
            checkedColor="#9A7CB8"
            unCheckedColor="#f6f6f6"
            iconColor="#ffffff"
            style={{ borderRadius: 20 }}
            onChange={() => {
              setIschecked(false);
            }}
          />
          <CheckBox
            value={isChecked}
            customLabel={
              <div className="checkbox__content__label">Percentage</div>
            }
            labelColor="#ffffff"
            checkedColor="#9A7CB8"
            unCheckedColor="#f6f6f6"
            iconColor="#ffffff"
            style={{ borderRadius: 20 }}
            onChange={() => {
              setIschecked(true);
            }}
          />
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">
              {isChecked ? "Percentage" : "Amount"}
            </div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder={isChecked ? "Enter Percentage" : "Enter Amount"}
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <button
          onClick={() => onSubmit(false)}
          className="popup__form__button"
          style={{ width: 150 }}
        >
          {isEdit ? "Edit" : "Create"} Promo Code
        </button>
      </form>
    </div>
  );
}
