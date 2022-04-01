import React from "react";
import { X } from "react-feather";
import Select from "react-select";

export default function AllocateRewardPopup({ onClose, onSubmit, isEdit }) {
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
          {isEdit ? "Edit" : "Add"} Offer
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Points Earned</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Name"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Start Date</div>
            <input
              type="date"
              className="popup__form__input__field"
              placeholder="Enter Name"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">End Date</div>
            <input
              type="date"
              className="popup__form__input__field"
              placeholder="Enter Name"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Toggle</div>
            <Select
              options={[
                { value: true, label: "True" },
                { value: false, label: "False" },
              ]}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: "#f6f6f6",
                  primary: "#9a7cb8",
                  primary50: "#f6f6f6",
                },
              })}
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
