import React from "react";
import { X } from "react-feather";
import cardImg from "../assets/cardImg.png";

export default function CardPopup({ onClose, onSubmit, isEdit }) {
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
          {isEdit ? "Edit" : "Add"} Card
        </div>
        <div className="popup__form__card">
          <div className="popup__form__card__top">
            <div className="popup__form__card__top__left">
              Mehfooz-ur-Rehman
            </div>
            <img
              src={cardImg}
              alt="cardImg"
              className="popup__form__card__top__right"
            />
          </div>
          <div className="popup__form__card__main">454 554 3434 4545</div>
          <div className="popup__form__card__bottom">
            <div className="popup__form__card__bottom__left">
              <span>Year</span>
              01/25
            </div>
            <div className="popup__form__card__bottom__right">
              <span>CVC</span>XXX
            </div>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Card Label</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Card Label"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Card No.</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Card No."
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input" style={{ marginRight: "1em" }}>
            <div className="popup__form__input__label">Exp</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Exp"
            />
            <div className="popup__form__input__error"></div>
          </div>
          <div className="popup__form__input">
            <div className="popup__form__input__label">CVC</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter CVC"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <button onClick={() => onSubmit(false)} className="popup__form__button">
          {isEdit ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}
